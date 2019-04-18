// index.js

import { ADD_POST, DELETE_POST, FETCH_POST } from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:5000/posts';

export const createPost = ({ id_user, body }) => {
    return (dispatch) => {
        return axios.post(`${apiUrl}/add`, {id_user, body})
            .then(response => {
                dispatch(createPostSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const createPostSuccess =  (data) => {
    return {
        type: ADD_POST,
        payload: {
            _id: data._id,
            id_user: data.id_user,
            body: data.body
        }
    }
};

export const deletePostSuccess = id => {
    return {
        type: DELETE_POST,
        payload: {
            id
        }
    }
};

export const deletePost = dispatch => {
    return (id) => {
        return axios.get(`${apiUrl}/delete/${id}`)
            .then(response => {
                dispatch(deletePostSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const fetchPosts = (posts) => {
    console.log(posts);
    return {
        type: FETCH_POST,
        posts
    }
};

export const fetchAllPosts = (dispatch) => {
    return () => {
        return axios.get(apiUrl)
            .then(response => {
                dispatch(fetchPosts(response.data));
            })
            .catch(error => {
                throw(error);
            });
    };
};