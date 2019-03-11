import React from 'react';
import SinglePost from './SinglePost';
import { connect } from 'react-redux';

const PostList = ({ posts }) => {
    const mapPosts = () => {
        return posts.map(post => <SinglePost title={post.title} content={post.content} key={post.id} id={post.id} />)
    }
    return (
        <div className="container section">
            <div className="row">
                <div className="col s12 l6 collection ">
                    {mapPosts()}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts
    }
}

export default connect(mapStateToProps)(PostList);