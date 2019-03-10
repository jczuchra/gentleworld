import React, { Component } from 'react';
import SinglePost from './SinglePost';

export default class PostList extends Component {
    state = {
        posts: [
            { title: "Mojo jojoj is out", content: "blah blah blah blah", id: 1 },
            { title: "Ella no quiere beber !", content: "blah blah blah blah", id: 2 },
            { title: "Polskie cebule zlotem narodu", content: "blah blah blah blah", id: 3 },
        ]
    }
    render() {
        return (
            <div className="collection container section">
                <SinglePost />
                <SinglePost />
            </div>
        )
    }
}
