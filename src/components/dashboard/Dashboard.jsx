import React, { Component } from 'react'
import PostList from '../projects/PostList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <PostList posts={this.props.posts} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.firestore.ordered.posts
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'posts'
    }])
)(Dashboard);
