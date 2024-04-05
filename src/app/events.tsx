import React, { useEffect, useState } from 'react';

interface Event {
    _id: number;
    EventName: string;
    EventDate: string;
}

const EventsPage: React.FC = () => {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        fetch('http://localhost:9872/api/events')
            .then(response => response.json())
            .then(data => setEvents(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>All Events</h1>
            {events.map((event) => (
                <div key={event._id}>
                    <h2>{event.EventName}</h2>
                    <p>Date: {event.EventDate}</p>
                </div>
            ))}
        </div>
    );
};

export default EventsPage;