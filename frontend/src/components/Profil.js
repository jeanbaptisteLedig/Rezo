// Profil.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { UserCard } from "../components/UserCard/UserCard.jsx";
import Post from '../components/Post';
import {
    Container,
    Row,
    Col
} from "react-bootstrap";
import axios from "axios/index";
import {deletePost} from "../actions";

const styles = {
    borderBottom: '2px solid #eee',
    background: 'ghostwhite',
    margin: '.75rem auto',
    padding: '.6rem 1rem',
    borderRadius: '7px'
};

class Profil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            posts: []
        }
    }

    componentDidMount() {
        this.getUser();
        this.getPosts();
    };

    getUser() {
        let id = this.props.match.params.id;
        return axios.get(`http://localhost:5000/api/users/${id}`)
            .then((response) => {
                this.setState({
                    user: response.data
                });
            })
    }

    getPosts() {
        let id = this.props.match.params.id;
        return axios.get(`http://localhost:5000/api/posts/${id}`)
            .then((response) => {
                console.log(this);
                this.setState({
                    posts: response.data
                });
            })
    }

    addToFriend(){
        let id = this.props.match.params.id;

    }

    render() {
        if (!this.state.user) {
            return null;
        }
        return (
            <div className="content">
                <Container fluid>
                    <Row>
                        <Col md={4}>
                            <UserCard
                                avatar={this.state.user.avatar}
                                name={this.state.user.name}
                                lastname={this.state.user.lastname}
                            />
                            <button
                                type="submit"
                                className="float-right btn btn-outline-primary"
                                disabled={this.state.user._id === this.props.user._id}
                                onClick={this.addToFriend()}>
                                Ajouter en ami
                            </button>
                        </Col>
                        <Col md={8}>
                            <div style={ styles } >
                                <h6>Les plus récents</h6>
                                {this.state.posts.map(post => {
                                    return (
                                        <Post post={ post } onDelete={ this.props.deletePost } key={ post._id } />
                                    );
                                })}
                            </div>
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

const mapDispatchToProps = dispatch => {
    return {
        deletePost: deletePost(dispatch)
    };
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Profil));