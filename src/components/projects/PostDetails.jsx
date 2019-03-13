import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

function PostDetails(props) {
    const { post } = props;
    if (post)
        return (
            <div className="container collection section">
                <div className="collection-item">
                    <h2 className="center">{post.title}</h2>
                    <p>{post.content}</p>
                    <p className="gray lighten-3">Author: {post.authorFirstName} {post.authorLastName}</p>
                </div>
            </div>
        )
    else
        return (
            <div className="container center">Loading content...</div>
        )
}


const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const posts = state.firestore.data.posts;
    const post = posts ? posts[id] : null;
    return {
        post: post
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'posts'
    }])
)(PostDetails);
