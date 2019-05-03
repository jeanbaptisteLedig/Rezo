// index.js

import { ADD_POST, DELETE_POST, FETCH_POST, UPDATE_POST } from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:5000/api/posts';

export const createPost = (post) => {
    return (dispatch) => {
        return axios.post(`${apiUrl}/add`, {id_user: post.user.id, body: post.body})
            .then(response => {
                dispatch(createPostSuccess({_id: response._id, id_user: post.user, body: post.body}))
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
            id: data._id,
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

export const updatePostSuccess = id => {
    return {
        type: UPDATE_POST,
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

export const updatePost = dispatch => {
    return (id) => {
        return axios.post(`${apiUrl}/update/${id}`)
            .then(response => {
                dispatch(updatePostSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            })
    }
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