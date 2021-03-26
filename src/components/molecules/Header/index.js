import React from 'react';
import './header.scss';
import {Logo} from '../../../assets';

const Header = () => {
    return (
        <div className="header">
            <img src={Logo} alt="logo" className="logo-app"/>
            <p className="menu-item">Login</p>
        </div>
    )
}

export default Header;
