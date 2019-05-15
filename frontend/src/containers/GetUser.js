//GetUser.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions/authentication';

class GetUser extends Component
{
    render() {
        //this.props.getUser(id);
        console.log(this.props);
        return(
            null
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