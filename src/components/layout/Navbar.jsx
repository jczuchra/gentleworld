import React from 'react';
import logo from '../../img/logo.png';
import SingedInLinks from './SingedInLinks';
import SignedOutLinks from './SingedOutLinks';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    const links = props.auth.uid ? <SingedInLinks profile={props.profile} /> : <SignedOutLinks />;
    return (
        <nav className="nav-wrapper grey lighten-3">
            <div className="container">
                <Link to="/"><div className="brand-logo"><img src={logo} alt="" /></div></Link>
                {links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);