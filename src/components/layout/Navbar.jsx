import React from 'react';
import logo from '../../img/logo.png';
import SingedInLinks from './SingedInLinks';
import SignedOutLinks from './SingedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const links = props.auth.uid ? <SingedInLinks /> : <SignedOutLinks />;
    return (
        <nav className="nav-wrapper grey lighten-3">
            <div className="container">
                <div className="brand-logo"><img src={logo} alt="" /></div>
                {links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);