import React from 'react';
import SinglePost from './SinglePost';


const PostList = ({ posts }) => {
    console.log(posts);
    const mapPosts = posts ?
        posts.map(post => <SinglePost title={post.title} content={post.content} key={post.id} id={post.id} />) : (<h4 className="center">There is no posts yet.</h4>)

    return (
        <div className="container section">
            <div className="row">
                <div className="col s12 l6 collection ">
                    {mapPosts}
                </div>
            </div>
        </div>
    )
}

export default PostList;

