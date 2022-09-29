import React, { useEffect, useState } from 'react';
import Events from '../Events/Events'
import List from '../List/List';
import './Club.css'

const Club = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('football.json')
            .then(res => res.json())
            .then(data => setEvents(data));

    }, []);
    return (
        <div className='club-container'>
            <div className='event-container'>
                {
                    events.map(event => <Events
                        key={event.id}
                        event={event}
                    ></Events>)
                }

            </div>
            <div className='list-container'>
                <List></List>

            </div>
        </div>
    );
};

export default Club;