// postReducer.js

import { ADD_POST, DELETE_POST, FETCH_POST } from '../actions/types';

export default function postReducer(state = [], action) {
    switch (action.type) {
        case ADD_POST:
            return [action.payload, ...state];
        case DELETE_POST:
            return state.filter(post => post._id !== action.payload.id);
        case FETCH_POST:
            return action.posts;
        default:
            return state;
    }
}