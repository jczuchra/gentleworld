import React, { Component } from 'react'

export default class SignIn extends Component {
    state = {
        login: "",
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
                <h2 className="center">Sign in</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="login">Login</label>
                        <input type="text" id="login" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="black btn">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

