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

export default function BookMeeting() {
  const [selectedDate, setSelectedDate] = useState(null);
 
  const [selectedHCP, setSelectedHCP] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  const handleHCPChange = (HCP) => {
    setSelectedHCP(HCP);
  };

const timeSlots =[
  { sess: "moring session", range: "from:8:30=> to 9:30 "},
  { sess: "moring session", range: "from:9:40=> to 10:40 "},
  { sess: "moring session", range: "from:10:50=> to 11:50 "},
  { sess: "afternoon session", range: "from:13:30=> to 14:30 "},
  { sess: "afternoon session", range: "from:14:40=> to 15:40 "},
  { sess: "afternoon session", range: "from:15:50=> to 16:50 "}
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
    
    { code: "nurse", name: "monjiya", room: "376" },
    { code: "psy", name: "mouldi ", room: "503" },
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
                  options={timeSlots}
                  autoHighlight
                  getOptionLabel={(option) => option.range}
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
                      {option.sess}: {option.range}
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
                  )}/>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "baseline",
                  justifyContent:'space-between'
                }}
              >
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
