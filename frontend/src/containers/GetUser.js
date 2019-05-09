//GetUser.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions/authentication';

class GetUser extends Component
{
    render() {
        return(
            <h1> {this.props.user.id} </h1>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUser: getUser(dispatch)
    };
};

export default connect(
    mapDispatchToProps
)(GetUser);