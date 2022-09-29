import React, { useState } from 'react';
import './List.css';

const List = ({ eTime }) => {
    console.log(eTime)

    const [breakTime, setBreakTime] = useState([0]);
    const handleSetBreakTime = (time) => {
        const selectedBreakTime = time;
        const newBreakTime = [selectedBreakTime];
        setBreakTime(newBreakTime);
        console.log(selectedBreakTime)
    }

    let total = 0;
    for (const time of eTime) {
        total = total + time.time_required * time.quantity;
    }


    return (
        <div className='list'>
            <h3>Asif Ibne Kamal</h3>
            <h5>Chandpur, Bangladesh</h5>
            <div className='details'>
                <div>
                    <h6>Age: 15</h6>
                </div>
                <div>
                    <h6>Height: 5'5"</h6>
                </div>
                <div>
                    <h6>Weight: 57KG</h6>
                </div>
            </div>
            <div>
                <h3>Add a Break</h3>
                <div className='break'>
                    <button onClick={() => handleSetBreakTime(10)} className='btn-break'><h6><small>10</small>s</h6></button>
                    <button onClick={() => handleSetBreakTime(20)} className='btn-break'><h6><small>20</small>s</h6></button>
                    <button onClick={() => handleSetBreakTime(30)} className='btn-break'><h6><small>30</small>s</h6></button>
                    <button onClick={() => handleSetBreakTime(40)} className='btn-break'><h6><small>40</small>s</h6></button>
                    <button onClick={() => handleSetBreakTime(50)} className='btn-break'><h6><small>50</small>s</h6></button>
                </div>
            </div>
            <div>
                <h3>Exercise Details</h3>
                <h5 className='time'>Exercise Time: {total} S</h5>
                <h5 className='time'>Break Time: {breakTime} S</h5>
            </div>
        </div>
    );
};

export default List;