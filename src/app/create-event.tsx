import React, { useState } from 'react';

const CreateEventPage: React.FC = () => {
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');

    const handleEventNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEventName(e.target.value);
    };

    const handleEventDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEventDate(e.target.value);
    };
//controlled forms
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your logic to create the event here
        console.log('Event name:', eventName);
        console.log('Event date:', eventDate);

        fetch('http://localhost:9872/api/events', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                EventName: eventName,
                EventDate: eventDate
            })
        }).then(response => {
            if (response.ok) {
                console.log('Event created successfully');
            } else {
                console.error('Failed to create event');
            }
        });
    };

    return (
        <div>
            <h1>Create Event</h1>
                <div>
                    <p>Event Name:</p>
                    <input
                        type="text"
                        id="eventName"
                        value={eventName}
                        onChange={handleEventNameChange}
                    />
                </div>
                <div>
                    <p>Event Date:</p>
                    <input
                        type="date"
                        id="eventDate"
                        value={eventDate}
                        onChange={handleEventDateChange}
                    />
                </div>
                <button onClick={handleSubmit}>Create</button>
        </div>
    );
};

export default CreateEventPage;