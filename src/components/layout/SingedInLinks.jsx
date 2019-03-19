import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../redux/actions/authActions';

function SingedInLinks(props) {
    console.log(props);
    const { signOut } = props;
    return (
        <div className="right">
            <ul>
                <li><NavLink className="black-text" to="/create">New project</NavLink></li>
                <li><a className="black-text" onClick={signOut}>Logout</a></li>
                <li><NavLink className="btn btn-floating white black-text" exact to="/">{props.profile.initials}</NavLink></li>
            </ul>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SingedInLinks)