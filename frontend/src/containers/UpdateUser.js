// UpdateUser.js

import { connect } from 'react-redux';
import {updateUser} from '../actions/authentication';
import Parameter from '../components/Parameter';

const mapDispatchToProps = dispatch => {
    return {
        onUpdateUser: user => {
            dispatch(updateUser(user));
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Parameter);