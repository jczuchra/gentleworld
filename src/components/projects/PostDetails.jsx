import React from 'react';
import { connect } from 'react-redux';

function PostDetails(props) {
    const post = props.posts.filter(post => {
        return post.id.toString() === props.match.params.id
    })
    console.log(post);
    return (
        <div className="container collection section">
            <div className="collection-item">
                <h2 className="center">{post[0].title}</h2>
                <p>{post[0].content}</p>
                <p>Halalal</p>
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        posts: state.posts.posts
    }
}

export default connect(mapStateToProps)(PostDetails);
