// index.js

import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import posts from './postReducer';

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    posts: posts
});