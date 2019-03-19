import React from 'react';
import SinglePost from './SinglePost';


const PostList = ({ posts }) => {
    const mapPosts = posts ?
        posts.map(post => <SinglePost post={post} />) : (<h4 className="center">There is no posts yet.</h4>)

    return (
        <div >
            {mapPosts}
        </div>
    )
}

export default PostList;

