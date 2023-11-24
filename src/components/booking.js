import React, { useState } from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker, setOptions, localeEn } from '@mobiscroll/react';

setOptions({
    locale: localeEn,
    theme: 'ios',
    themeVariant: 'light'
});

function Book() {
    const [selectedDateTime, setSelectedDateTime] = useState(null);

    const handleDateChange = (event, inst) => {
        setSelectedDateTime(inst.getVal());
    };

    const handleSubmit = () => {
        // Check if a date and time are selected
        if (selectedDateTime) {
            // Display an alert box with the selected date and time
            alert(`Selected Date and Time: ${selectedDateTime}`);
        } else {
            // If no date and time are selected, show a message
            alert('Please select a date and time before submitting.');
        }
    };

    return (
        <div>
            <Datepicker
                controls={['calendar', 'time']}
                display="inline"
                onChange={handleDateChange}
            />

            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Book;
