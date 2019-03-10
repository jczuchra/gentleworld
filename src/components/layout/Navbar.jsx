import React, { Component } from 'react';
import logo from '../../img/logo.png';
import SingedInLinks from './SingedInLinks';
import SignedOutLinks from './SingedOutLinks';

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey lighten-3">
            <div className="container">
                <div className="brand-logo"><img src={logo} alt="" /></div>
                <SingedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )
}

export default Navbar;