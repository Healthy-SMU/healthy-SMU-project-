import React, { useState, useRef, useEffect } from "react";
import {
  DayPilot,
  DayPilotCalendar,
  DayPilotNavigator,
} from "@daypilot/daypilot-lite-react";
import "./SetTimeSlots.css";

const STORAGE_KEY = "calendarEvents";

const SetTimeSlots = () => {
  const calendarRef = useRef();

  const editEvent = async (e) => {
    const dp = calendarRef.current.control;
    if (!dp) {
      return;
    }
    const modal = await DayPilot.Modal.prompt("Update event text:", e.text());
    if (!modal.result) {
      return;
    }
    e.data.text = modal.result;
    dp.events.update(e);
    dp.columnMarginRight = 40;
    saveEventsToStorage(dp.events.list);
  };

  const deleteEvent = async (e) => {
    const dp = calendarRef.current.control;
    if (!dp) {
      return;
    }
    dp.events.remove(e);
    dp.columnMarginRight = 40;
    saveEventsToStorage(dp.events.list);
  };

  const addSubevent = async (e) => {
    const dp = calendarRef.current.control;
    if (!dp) {
      return;
    }
    const modal = await DayPilot.Modal.prompt(
      "Create a subevent:",
      "subevent description"
    );

    if (!modal.result) {
      return;
    }

    const newSubevent = {
      start: e.data.start,
      end: e.data.end,
      id: DayPilot.guid(),
      text: modal.result,
      parentId: e.data.id, // Identify the parent event
    };

    dp.events.add(newSubevent);
    saveEventsToStorage(dp.events.list);
  };

  const saveEventsToStorage = (events) => {
    // Save only top-level events and their subevents
    const topLevelEvents = events.filter((event) => !event.parentId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(topLevelEvents));
  };

  const getEventsFromStorage = () => {
    const storedEvents = localStorage.getItem(STORAGE_KEY);
    return storedEvents ? JSON.parse(storedEvents) : [];
  };

  const [calendarConfig, setCalendarConfig] = useState({
    viewType: "Week",
    durationBarVisible: true,
    timeRangeSelectedHandling: "enabled",
    onTimeRangeSelected: async (args) => {
      const dp = calendarRef.current.control;
      const modal = await DayPilot.Modal.prompt(
        "Create a new event:",
        "available time slot "
      );
      dp.clearSelection();

      if (!modal.result) {
        return;
      }

      const newEvent = {
        start: args.start,
        end: args.end,
        id: DayPilot.guid(),
        text: modal.result,
      };
      dp.events.add(newEvent);
      saveEventsToStorage(dp.events.list);
    },
    onEventClick: async (args) => {
      await editEvent(args.e);
    },
    contextMenu: new DayPilot.Menu({
      items: [
        {
          text: "Delete",
          onClick: async (args) => {
            await deleteEvent(args.source);
          },
        },
        {
          text: "Add Subevent",
          onClick: async (args) => {
            await addSubevent(args.source);
          },
        },
        {
          text: "Edit...",
          onClick: async (args) => {
            await editEvent(args.source);
          },
        },
      ],
    }),
    onBeforeEventRender: (args) => {
      args.data.areas = [
        {
          top: 10,
          right: 20,
          width: 20,
          height: 20,
          symbol: "icons/daypilot.svg#minichevron-down-2",
          fontColor: "white",
          toolTip: "Show context menu",
          action: "ContextMenu",
        },
        {
          top: 3,
          right: 25,
          width: 20,
          height: 20,
          symbol: "icons/daypilot.svg#x-circle",
          fontColor: "#fff",
          action: "None",
          toolTip: "Delete event",
          onClick: async (args) => {
            const dp = calendarRef.current.control;
            dp.events.remove(args.source);
          },
        },
      ];

      const participants = args.data.participants;
      if (participants > 0) {
        // show one icon for each participant
        for (let i = 0; i < participants; i++) {
          args.data.areas.push({
            bottom: 5,
            right: 5 + i * 30,
            width: 24,
            height: 24,
            action: "None",
            image: `https://picsum.photos/24/24?random=${i}`,
            style:
              "border-radius: 50%; border: 2px solid #fff; overflow: hidden;",
          });
        }
      }
    },
  });

  useEffect(() => {
    const dp = calendarRef.current.control;
    if (!dp) {
      return;
    }
    dp.columnMarginRight = 40;

    const savedEvents = getEventsFromStorage();

    if (savedEvents.length > 0) {
      dp.events.list = savedEvents;
      dp.update();
    } else {
      const startDate = new Date();

      const weeklyEvents = [
        {
        id: 1,
        text: "Meeting A",
        start: "2023-11-28T08:30:00",
        end: "2023-11-28T10:00:00",
      },
      {
        id: 2,
        text: "Meeting B",
        start: "2023-11-28T10:30:00",
        end: "2023-11-28T12:00:00",
      },
      {
        id: 3,
        text: "Meeting C",
        start: "2023-11-28T13:30:00",
        end: "2023-11-28T15:00:00",
      },
      {
        id: 4,
        text: "Meeting D",
        start: "2023-11-28T15:30:00",
        end: "2023-11-28T17:00:00",
      },
      
      // Add more events as needed
      ];

      for (let i = 0; i < 48; i++) {
        weeklyEvents.forEach((event) => {
          const start = new Date(event.start);
          const end = new Date(event.end);

          start.setDate(start.getDate() + i * 7);
          end.setDate(end.getDate() + i * 7);
          dp.events.add({
            ...event,
            id: DayPilot.guid(),
            start,
            end,
          });
        });
      }

      saveEventsToStorage(dp.events.list);
      calendarRef.current.control.update({ startDate });
    }
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: "10px" }}>
        <DayPilotNavigator
          selectMode={"Week"}
          showMonths={1}
          skipMonths={1}
          startDate={new Date()}
          selectionDay={new Date()}
          onTimeRangeSelected={(args) => {
            calendarRef.current.control.update({
              startDate: args.day,
            });
          }}
        />
      </div>
      <div style={{ flexGrow: "1" }}>
        <DayPilotCalendar
          viewType={"Day"}
          {...calendarConfig}
          ref={calendarRef}
        />
      </div>
    </div>
  );
};

export default SetTimeSlots;



