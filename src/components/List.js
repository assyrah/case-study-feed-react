import React from 'react';
import { Link } from 'react-router-dom';

const List = (props) => {
        const { posts } = props;
        const postList = posts.map(post => {
            return (
                <div className="list card card--vertical col-md-3 col-sm-6" key={post.id}>
                    <img src={require('../assets/' + post.thumb)} alt={post.thumb} className="img-responsive"/>
                    <h3>{post.title_long}</h3>
                    <small><Link to={{
                        pathname: '/details/' + post.slug,
                        state: {
                            details: post
                        }
                        }}><span>&#8212;</span> VIEW CASE STUDY</Link></small>
                </div>
            )
        })
        return (
            <div className="post-list container">
                <div className="row">
                { postList }
                </div>
            </div>
        )
}

export default List