import React from 'react';
import './Events.css'

const Events = ({ event }) => {
    const { name, img, description, for_age, time_required } = event;
    return (
        <div className='events'>
            <img src={img} alt="" />
            <div className='event-info'>
                <p className='event-name'>{name}</p>
                <p><small>Description: {description}</small></p>
                <p><small>For Age: {for_age}</small></p>
                <p>Time Required: {time_required}s</p>
            </div>

        </div>
    );
};

export default Events;