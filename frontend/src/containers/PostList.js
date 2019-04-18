// PostList.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';
import { deletePost, fetchAllPosts } from '../actions';

class PostList extends Component
{
    componentDidMount () {
        this.props.fetchAllPosts();
    }
    render() {
        if(!this.props.posts.length) {
            return (
                <div>
                    No Posts
                </div>
            )
        }
        return (
            <div>
                {this.props.posts.map(post => {
                    return (
                        <Post post={ post } onDelete={ this.props.deletePost } key={ post._id } />
                    );
                })}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        posts: state.posts
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deletePost: deletePost(dispatch),
        fetchAllPosts: fetchAllPosts(dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostList);