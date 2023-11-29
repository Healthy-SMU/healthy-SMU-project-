import React, { useState, useRef, useEffect } from "react";
import {
  DayPilot,
  DayPilotCalendar,
  DayPilotNavigator,
} from "@daypilot/daypilot-lite-react";
import "./SetTimeSlots.css";

const styles = {
  wrap: {
    display: "flex",
  },
  left: {
    marginRight: "10px",
  },
  main: {
    flexGrow: "1",
  },
};

const SetTimeSlots = ({ weeklyEvents}) => {
  const calendarRef = useRef();

  const editEvent = async (e) => {
    const dp = calendarRef.current.control;
    const modal = await DayPilot.Modal.prompt("Update event text:", e.text());
    if (!modal.result) {
      return;
    }
    e.data.text = modal.result;
    dp.events.update(e);
    dp.columnMarginRight = 40;
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
    
    },
    onEventClick: async (args) => {
      await editEvent(args.e);
    },
    contextMenu: new DayPilot.Menu({
      items: [
        {
          text: "Delete",
          onClick: async (args) => {
            const dp = calendarRef.current.control;

            dp.events.remove(args.source);
          },
        },
        {
            text: "add a subevent ",
            onClick: async (args) => {
              const dp = calendarRef.current.control;
  
              dp.events.add(args.source);
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
    dp.columnMarginRight = 40;
    const startDate = new Date();

    
   
    // Add 48 weeks of recurring events
    for (let i = 0; i < 48; i++) {
      weeklyEvents.forEach((event) => {
        const start = new Date(event.start);
        const end = new Date(event.end);

        start.setDate(start.getDate() + i * 7);
        end.setDate(end.getDate() + i * 7);
        dp.events.add({
          ...event,
          id: DayPilot.guid(), // Ensure each event has a unique ID
          start,
          end,
        });
        //   events.push({
        //     ...event,
        //     id: i + 1, // Ensure each event has a unique ID
        //     start: start.toISOString(),
        //     end: end.toISOString(),
        //   });
      });
    }

    calendarRef.current.control.update({ startDate });
  }, []);
 
  return (
    <div style={styles.wrap}>
      <div style={styles.left}>
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
      <div style={styles.main}>
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

