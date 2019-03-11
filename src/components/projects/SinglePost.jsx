import React from 'react';
import { Link } from 'react-router-dom';

export default function SinglePost({ title, content, id }) {
    const postId = "/post/" + id;
    return (
        <div className="collection-item" >
            <Link to={postId}><h3>{title}</h3></Link>
            <p>{content}</p>
            <span className="grey lighten-3">Author: Jay Ce</span>
        </div>
    )
}


