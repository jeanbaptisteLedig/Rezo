// Navbar.js

import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';

import '../assets/css/Navbar.css';

class Navbar extends Component {

    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const authLinks = (
            <ul className="navbar-nav ml-auto">
                <Link className="nav-link" to="/profil">
                    <img src={user.avatar} alt={user.name} title={user.name}
                         className="rounded-circle"
                         style={{ width: '25px', marginRight: '5px'}} />
                    {user.name} {user.lastname}
                </Link>
                <Link to="/" className="nav-link">
                    Accueil
                </Link>
                <a href="#" className="nav-link" onClick={this.onLogout.bind(this)}>
                    Se déconnecter
                </a>
            </ul>
        );
        const guestLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/register">S'inscrire</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Se connecter</Link>
                </li>
            </ul>
        );
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h4>Rezo</h4>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
            </nav>
        )
    }
}
Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));