import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./BookMeeting.css";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";



export default function BookMeeting({weeklyEvents}) {
  const [selectedDate, setSelectedDate] = useState(null);
 
  const [selectedHCP, setSelectedHCP] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  const handleHCPChange = (HCP) => {
    setSelectedHCP(HCP);
  };

  const eventTimeRanges = weeklyEvents.map((event) => {
    return {
      id: event.id,
      date: new Date(event.start), 
      startTime: new Date(event.start),
      endTime: new Date(event.end),
    };
  });
  
const timeSlots =[
  { sess: "moring session", start: eventTimeRanges[0].startTime.toLocaleTimeString('en-US') ,end:eventTimeRanges[0].endTime.toLocaleTimeString('en-US')},
  { sess: "moring session", start: eventTimeRanges[1].startTime.toLocaleTimeString('en-US') ,end:eventTimeRanges[1].endTime.toLocaleTimeString('en-US')},
  { sess: "moring session",start: eventTimeRanges[2].startTime.toLocaleTimeString('en-US') ,end:eventTimeRanges[2].endTime.toLocaleTimeString('en-US')},
  { sess: "afternoon session", start: eventTimeRanges[3].startTime.toLocaleTimeString('en-US') ,end:eventTimeRanges[3].endTime.toLocaleTimeString('en-US')}
  
  
];
const handleTimeSlotChange = (timeSlots) => {
  setSelectedTimeSlot(timeSlots);
};





  const handleOk = () => {
    // Perform actions when "OK" is clicked (e.g., save the selected date, time range, and HCP)
    console.log("OK clicked. Selected Date:", selectedDate);
    console.log("Selected Time Range:", selectedTimeSlot);
    console.log("Selected HCP:", selectedHCP);
  };

  const HCP = [
    
    {id:1,  code: "nurse", name: "monjiya", room: "376" },
    {id:2, code: "psy", name: "mouldi ", room: "503" },
  ];

  return (
    <div className="page">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          orientation="landscape"
          className="calander"
          onChange={handleDateChange}
          value={selectedDate}
          slotProps={{
            actionBar: {
              actions: [],
            },
          }}
        />

        {selectedDate && (
          <React.Fragment>
            <CardContent className="card-content">
              <Typography sx={{ fontSize: 22 }}>book your meeting</Typography>
              <Typography sx={{ mb: 1 }} color="text.secondary">
                set your time
              </Typography>
              <Autocomplete
                  id="HCP-select-demo"
                  sx={{ width: 220, marginTop: "20px" }}
                  options={HCP}
                  autoHighlight
                  getOptionLabel={(option) => option.name}
                  isOptionEqualToValue={(option, value) =>
                    option.code === value.code
                  }
                  onChange={(event, value) => handleHCPChange(value)}
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                      {...props}
                    >
                      {option.code}: {option.name} | room:{option.room}
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Choose a HCP"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password", // disable autocomplete and autofill
                      }}
                    />
                  )}
                />
                
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "baseline",
                  justifyContent:'space-between'
                }}
              >
                {selectedHCP?<Autocomplete
                  id="timeslot-select-demo"
                  sx={{ width: 220, marginTop: "20px" }} 
                  options={timeSlots}
                  autoHighlight
                  getOptionLabel={(option) => option.start}
                  isOptionEqualToValue={(option, value) =>
                    option.sess === value.sess
                  }
                  onChange={(event, value) => handleTimeSlotChange(value)}
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                      {...props}
                    >
                      {option.sess}: from {option.start}  to{option.end}
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Choose a time slot"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password", // disable autocomplete and autofill
                      }}
                    />
                  )}/>:null}
                
              
                <Button
                  variant="contained"
                  className="submit-button"
                  onClick={handleOk}
                >
                  Submit
                </Button>
             
                
              </ div>
              
            </CardContent>
          </React.Fragment>
        ) }
      </LocalizationProvider>
    </div>
  );
}
