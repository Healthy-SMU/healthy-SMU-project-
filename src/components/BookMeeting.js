import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MultiInputTimeRangeField } from "@mui/x-date-pickers-pro";
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
  const [selectedTimeRange, setSelectedTimeRange] = useState([
    { start: new Date(), end: new Date() },
    { start: new Date(), end: new Date() },
  ]);
  const [selectedHCP, setSelectedHCP] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeRangeChange = (newTimeRange) => {
    setSelectedTimeRange(newTimeRange);
  };

  const handleHCPChange = (HCP) => {
    setSelectedHCP(HCP);
  };

 

  const handleOk = () => {
    // Perform actions when "OK" is clicked (e.g., save the selected date, time range, and HCP)
    console.log("OK clicked. Selected Date:", selectedDate);
    console.log("Selected Time Range:", selectedTimeRange);
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
              actions: []

          }}}
          />

        {selectedDate && (
          <React.Fragment>
            
            <CardContent className="card-content">
            
              <Typography sx={{ fontSize: 22 }}>book your meeting</Typography>
              <Typography sx={{ mb: 1 }} color="text.secondary">
                set your time
              </Typography>
              <MultiInputTimeRangeField
                label="Select Time Range"
                slotProps={{
                  textField: ({ position }) => ({
                    label: position === "start" ? "From" : "To",
                  }),
                }}
                value={selectedTimeRange}
                onChange={handleTimeRangeChange}
              ></MultiInputTimeRangeField>
<div style={{display:'flex',flexDirection:'row',alignItems: 'baseline'}}>
              <Autocomplete
                id="HCP-select-demo"
                sx={{ width: 250, marginTop: "20px", color: "black" }}
                options={HCP}
                autoHighlight
                getOptionLabel={(option) => option.name}
                isOptionEqualToValue={(option, value) => option.code === value.code}
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
              <Button variant="contained" className="submit-button" onClick={handleOk}>Submit</Button>
              </div>
            </CardContent>
          </React.Fragment>
        )}
      </LocalizationProvider>
    </div>
  );
}