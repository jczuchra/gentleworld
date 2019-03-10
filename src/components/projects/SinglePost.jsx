import React from 'react'

export default function SinglePost({ title, content }) {
    return (
        <div className="collection-item">
            <h3>{title}</h3>
            <p>{content}</p>
            <span className="grey lighten-3">Author: Jay Ce</span>
        </div>
    )
}
