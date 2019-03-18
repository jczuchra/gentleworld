import React, { Component } from 'react'
import PostList from '../projects/PostList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {

    render() {
        if (!this.props.auth.uid) return <Redirect to="/signin" />
        return (
            <div>
                <PostList posts={this.props.posts} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.firestore.ordered.posts,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'posts'
    }])
)(Dashboard);
