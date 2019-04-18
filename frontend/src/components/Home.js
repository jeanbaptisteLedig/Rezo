// Home.js

import React, { Component } from 'react';

import Register from "./Register";
import CreatePost from '../containers/CreatePost';
import PostList from '../containers/PostList';

import '../assets/css/Home.css';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {withRouter} from "react-router-dom";

const stylesApp = {
    marginTop: 40
};

class Home extends Component {
    render() {
        const {isAuthenticated} = this.props.auth;
        const authLinks = (
            <div style={ stylesApp }>
                <div className="col-md-12">
                    <CreatePost />
                </div>
                <div className="col-md-12">
                    <PostList />
                </div>
            </div>
        );
        const guestLinks = (
            <main role="main" className="inner cover">
                <h1 className="cover-heading">Rezo</h1>
                <p className="lead">Rezo est un réseau social.. d'où son nom ! </p>
            </main>
        );
        return(
            <div className="container">
                {isAuthenticated ? authLinks : guestLinks}
            </div>
        )
    }
}

Home.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps)(withRouter(Home));