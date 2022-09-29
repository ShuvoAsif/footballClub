import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-solid-svg-icons';

import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <div>
                <FontAwesomeIcon icon={faFutbol}></FontAwesomeIcon>
            </div>
            <div>
                <h1>Shahrasti Football Club</h1>
            </div>
        </nav>

    );
};

export default Header;