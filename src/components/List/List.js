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
        </div>
    );
};

export default List;