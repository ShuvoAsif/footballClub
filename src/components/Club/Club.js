import React, { useEffect, useState } from 'react';
import Events from '../Events/Events'
import List from '../List/List';
import { getStoredTime, addToDb } from '../../utilities/fakedb';
import './Club.css'

const Club = () => {
    const [events, setEvents] = useState([]);
    const [eTime, setETime] = useState([]);


    useEffect(() => {
        fetch('football.json')
            .then(res => res.json())
            .then(data => setEvents(data));

    }, []);


    useEffect(() => {
        const storedTime = getStoredTime();
        const savedTime = [];
        for (const id in storedTime) {
            const addedTime = events.find(event => event.id === id);
            if (addedTime) {
                const quantity = storedTime[id];
                addedTime.quantity = quantity;
                savedTime.push(addedTime);

            }
            setETime(savedTime);
            console.log(storedTime);
        }
    }, [events])







    const handleSetETime = (selectedTime) => {
        // console.log(selectedProduct);
        // cart.push(product)
        // here selectedProduct is which i clicked
        let newTime = [];
        const exists = eTime.find(event => event.id === selectedTime.id);
        if (!exists) {
            selectedTime.quantity = 1;
            newTime = [...eTime, selectedTime];
        }
        else {
            const rest = eTime.filter(event => event.id !== selectedTime.id);
            exists.quantity = exists.quantity + 1;
            newTime = [...rest, exists];
        }
        setETime(newTime);
        addToDb(selectedTime.id);
    };


    return (
        <div className='club-container'>
            <div className='event-container'>
                {
                    events.map(event => <Events
                        key={event.id}
                        event={event}
                        handleSetETime={handleSetETime}
                    ></Events>)
                }

            </div>
            <div className='list-container'>
                <List
                    eTime={eTime}
                ></List>

            </div>
        </div>
    );
};

export default Club;