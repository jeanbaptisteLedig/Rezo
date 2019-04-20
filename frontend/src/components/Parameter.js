// Profil.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
    Container,
    Row,
    Col
} from "react-bootstrap";

import { Card } from "../components/Card/Card.jsx";
import { FormInputs } from "../components/FormInputs/FormInputs.jsx";
import { UserCard } from "../components/UserCard/UserCard.jsx";
import Button from "../components/CustomButton/CustomButton.jsx";

class Profil extends Component {
    render() {
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
                                    <form>
                                        <FormInputs
                                            ncols={["col-md-6", "col-md-6"]}
                                            proprieties={[
                                                {
                                                    label: "Prénom",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Prénom",
                                                    defaultValue: this.props.user.name
                                                },
                                                {
                                                    label: "Nom",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Nom",
                                                    defaultValue: this.props.user.lastname
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols={["col-md-12"]}
                                            proprieties={[
                                                {
                                                    label: "Adresse email",
                                                    type: "email",
                                                    bsClass: "form-control",
                                                    placeholder: "Adresse email",
                                                    defaultValue: this.props.user.email
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols={["col-md-6", "col-md-6"]}
                                            proprieties={[
                                                {
                                                    label: "Mot de passe",
                                                    type: "password",
                                                    bsClass: "form-control",
                                                    placeholder: "Mot de passe"
                                                },
                                                {
                                                    label: "Confirmer votre mot de passe",
                                                    type: "password",
                                                    bsClass: "form-control",
                                                    placeholder: "Confirmer votre mot de passe"
                                                },
                                            ]}
                                        />
                                        <Button bsStyle="info" pullRight fill type="submit">
                                            Update Profile
                                        </Button>
                                        <div className="clearfix" />
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

const mapStateToProps = (state) => ({
    user: state.auth.user
});

export default withRouter(connect(mapStateToProps)(Profil));