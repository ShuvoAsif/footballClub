import React from 'react';
import './Events.css'

const Events = ({ event, handleSetETime }) => {
    const { name, img, description, for_age, time_required } = event;
    return (
        <div className='events'>
            <img src={img} alt="" />
            <div className='event-info'>
                <h5 className='event-name'>{name}</h5>
                <p><small>Description: {description}</small></p>
                <p>For Age: {for_age}</p>
                <h5>Time Required: {time_required}s</h5>
            </div>

            <button onClick={() => handleSetETime(event)} className='btn-event'>
                <p className='btn-text'>Add to List</p>
            </button>
        </div>
    );
};

export default Events;