import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../redux/actions/authActions';

class SignIn extends Component {
    state = {
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
        this.props.signIn(this.state);
    }
    render() {
        const { authError } = this.props;
        return (
            <div className="container">
                <h2 className="center">Sign in</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="black btn">Login</button>
                    </div>
                    {authError ? <div className="center red-text">Login failed</div> : null}
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

