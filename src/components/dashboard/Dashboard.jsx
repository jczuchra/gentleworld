import React, { Component } from 'react'
import PostList from '../projects/PostList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import Notifications from './Notifications';

class Dashboard extends Component {
    render() {
        if (!this.props.auth.uid) return <Redirect to="/signin" />
        return (
            <div className="container section">
                <div className="row">
                    <div className="col s12 l6 collection ">
                        <PostList posts={this.props.posts} />
                    </div>
                    <div className="col s12 l5 right">
                        <Notifications notifications={this.props.notifications} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.firestore.ordered.posts,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'posts', orderBy: ['date', 'desc'] },
        { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] }
    ])
)(Dashboard);
