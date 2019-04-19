// PostList.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';
import { deletePost, fetchAllPosts } from '../actions';

const styles = {
    borderBottom: '2px solid #eee',
    background: 'ghostwhite',
    margin: '.75rem auto',
    padding: '.6rem 1rem',
    borderRadius: '7px'
};

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
            <div style={ styles } >
                <h6>Les plus récents</h6>
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