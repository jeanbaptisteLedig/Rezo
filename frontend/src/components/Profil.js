// Parameter.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
    Container,
    Row,
    Col
} from "react-bootstrap";

class Profil extends Component {
    render() {

        return (
            <div className="content">
                <Container fluid>
                    <Row>
                        <Col md={4}>

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