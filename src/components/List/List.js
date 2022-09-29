import React from 'react';
import './List.css';

const List = () => {
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
                    <button className='btn-break'><h6>10<small>S</small></h6></button>
                    <button className='btn-break'><h6>20<small>S</small></h6></button>
                    <button className='btn-break'><h6>30<small>S</small></h6></button>
                    <button className='btn-break'><h6>40<small>S</small></h6></button>
                    <button className='btn-break'><h6>50<small>S</small></h6></button>
                </div>
            </div>
            <div>
                <h3>Exercise Details</h3>
                <h5 className='time'>Exercise Time: <small></small>s</h5>
                <h5 className='time'>Break Time: <small></small>s</h5>
            </div>
        </div>
    );
};

export default List;