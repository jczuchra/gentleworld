import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SingedOutLinks() {
    return (
        <div className="right">
            <ul>
                <li><NavLink className="black-text" to="/signin">Login</NavLink></li>
                <li><NavLink className="black-text" to="/signup">Sign up</NavLink></li>
            </ul>
        </div>
    )
}
