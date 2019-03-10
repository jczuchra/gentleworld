import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SingedInLinks() {
    return (
        <div className="right">
            <ul>
                <li><NavLink className="black-text" to="/create">New project</NavLink></li>
                <li><NavLink className="black-text" exact to="/">Logout</NavLink></li>
                <li><NavLink className="btn btn-floating white black-text" exact to="/">JC</NavLink></li>
            </ul>
        </div>
    )
}
