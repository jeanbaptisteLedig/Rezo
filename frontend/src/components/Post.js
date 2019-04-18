// Post.js

import React from 'react';
import Moment from 'react-moment';
import 'moment/locale/fr';
import '../assets/css/Post.css';

const styles = {
    borderBottom: '3px solid #eee',
    background: '#FFFFFF',
    margin: '.75rem auto',
    padding: '.6rem 1rem',
    maxWidth: '500px',
    borderRadius: '7px'
};

export default({ post: { id_user, body, _id, date }, onDelete }) => {
    return (
        <div style={ styles }>
            <h4 class="username">{ id_user }</h4>
            <Moment fromNow locale="fr">{date}</Moment>
            <p>{ body }</p>
            <button className="btn btn-danger btn-sm" type="link" onClick={() => onDelete(_id)}>
                Remove
            </button>
            <button type="button" className="btn btn-outline-secondary btn-sm">Edit</button>
        </div>
    );
};