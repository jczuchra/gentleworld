import React, { Component } from 'react'
import { createPost } from '../../redux/actions/postActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class CreatePost extends Component {
    state = {
        title: "",
        content: "",
        date: new Date()
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createPost(this.state);
        this.props.history.push('/');
    }
    render() {
        console.log(this.props);
        if (!this.props.auth.uid) return <Redirect to="/signin" />

        return (
            <div className="container">
                <h2 className="center">Create post</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Your thoughts :)</label>
                        <textarea id="content" row="20" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn black">Create post</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => dispatch(createPost(post))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);