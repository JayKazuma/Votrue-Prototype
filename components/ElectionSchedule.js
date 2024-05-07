// components/ElectionSchedule.js

import { useState } from 'react';

const ElectionSchedule = ({ electionSchedule, onSetSchedule }) => {
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');

    const handleSetSchedule = () => {
        // Validate the input values (start and end dates)
        if (start.trim() !== '' && end.trim() !== '') {
            // Convert the input strings to Date objects
            const startDate = new Date(start);
            const endDate = new Date(end);

            // Check if the end date is after the start date
            if (startDate < endDate) {
                // Call the onSetSchedule function with the start and end dates
                onSetSchedule(startDate, endDate);

                // Reset the input fields
                setStart('');
                setEnd('');
            } else {
                // Display an error message if the end date is not after the start date
                alert('End date must be after start date.');
            }
        } else {
            // Display an error message if any of the input fields are empty
            alert('Please enter both start and end dates.');
        }
    };

    return (
        <div className="election-schedule">
            <h2>Election Schedule</h2>
            <div>
                <input
                    type="datetime-local"
                    value={start}
                    onChange={(e) => setStart(e.target.value)}
                />
                <input
                    type="datetime-local"
                    value={end}
                    onChange={(e) => setEnd(e.target.value)}
                />
                <button onClick={handleSetSchedule}>Set Schedule</button>
            </div>
            <div>
                <p>Start Date: {electionSchedule.start}</p>
                <p>End Date: {electionSchedule.end}</p>
            </div>
        </div>
    );
};

export default ElectionSchedule;
