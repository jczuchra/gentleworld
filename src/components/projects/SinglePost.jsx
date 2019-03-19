import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default function SinglePost({ post }) {
    const postId = "/post/" + post.id;
    return (
        <div className="collection-item" >
            <Link to={postId}><h3>{post.title}</h3></Link>
            <p>{post.content}</p>
            <span className="grey lighten-3">Author: {post.authorFirstName} {post.authorLastName}</span>
            <p>{moment(post.date.toDate()).calendar()}</p>
        </div>
    )
}



