// Home.js

import React, { Component } from 'react';

import CreatePost from '../containers/CreatePost';
import PostList from '../containers/PostList';

import '../assets/css/Home.css';

const stylesApp = {
    marginTop: 40
};

export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row" style={ stylesApp }>
                    <div className="col-md-6">
                        <CreatePost />
                    </div>
                    <div className="col-md-6">
                        <PostList />
                    </div>
                </div>
            </div>
        );
    }
}