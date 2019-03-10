import React, { Component } from 'react'

export default class SignUp extends Component {
    state = {
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
                <h2 className="center">Sign up</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="first_name">First name</label>
                        <input type="text" id="first_name" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="last_name">Last name</label>
                        <input type="text" id="last_name" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn black">Sign in</button>
                    </div>
                </form>
            </div>
        )
    }
}

