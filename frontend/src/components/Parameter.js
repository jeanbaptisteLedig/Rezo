// Profil.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import {
    Container,
    Row,
    Col
} from "react-bootstrap";

import { Card } from "../components/Card/Card.jsx";
import { FormInputs } from "../components/FormInputs/FormInputs.jsx";
import { UserCard } from "../components/UserCard/UserCard.jsx";
import Button from "../components/CustomButton/CustomButton.jsx";

import {updateUser} from '../actions/authentication';

class Profil extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            lastname: '',
            email: '',
            password: '',
            password_confirm: '',
            errors: {}

        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            name: this.state.name,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm
        };
        updateUser(this.props.user.id, user, this.props.history);
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="content">
                <Container fluid>
                    <Row>
                        <Col md={4}>
                            <UserCard
                                avatar={this.props.user.avatar}
                                name={this.props.user.name}
                                lastname={this.props.user.lastname}
                            />
                        </Col>
                        <Col md={8}>
                            <Card
                                title="Modifier votre profil"
                                content={
                                    <form onSubmit={ this.handleSubmit }>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                placeholder="Name"
                                                className={classnames('form-control form-control-lg', {
                                                    'is-invalid': errors.name
                                                })}
                                                name="name"
                                                onChange={ this.handleInputChange }
                                                value={ this.state.name }
                                            />
                                            {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                placeholder="Last Name"
                                                className={classnames('form-control form-control-lg', {
                                                    'is-invalid': errors.lastname
                                                })}
                                                name="lastname"
                                                onChange={ this.handleInputChange }
                                                value={ this.state.lastname }
                                            />
                                            {errors.lastname && (<div className="invalid-feedback">{errors.lastname}</div>)}
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                className={classnames('form-control form-control-lg', {
                                                    'is-invalid': errors.email
                                                })}
                                                name="email"
                                                onChange={ this.handleInputChange }
                                                value={ this.state.email }
                                            />
                                            {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                placeholder="Password"
                                                className={classnames('form-control form-control-lg', {
                                                    'is-invalid': errors.password
                                                })}
                                                name="password"
                                                onChange={ this.handleInputChange }
                                                value={ this.state.password }
                                            />
                                            {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                placeholder="Confirm Password"
                                                className={classnames('form-control form-control-lg', {
                                                    'is-invalid': errors.password_confirm
                                                })}
                                                name="password_confirm"
                                                onChange={ this.handleInputChange }
                                                value={ this.state.password_confirm }
                                            />
                                            {errors.password_confirm && (<div className="invalid-feedback">{errors.password_confirm}</div>)}
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary">
                                                Update
                                            </button>
                                        </div>
                                    </form>
                                }
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

Profil.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    user: state.auth.user,
    errors: state.errors
});

export default withRouter(connect(mapStateToProps,{ updateUser })(Profil))