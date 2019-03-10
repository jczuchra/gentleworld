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
    mapPosts = () => {
        return this.state.posts.map(post => <SinglePost title={post.title} content={post.content} key={post.id} />)
    }
    render() {
        return (
            <div className="container section">
                <div className="row">
                    <div className="col s12 l6 collection ">
                        {this.mapPosts()}
                    </div>
                </div>
            </div>
        )
    }
}
