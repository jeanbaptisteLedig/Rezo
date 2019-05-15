// Post.js

import React from 'react';
import Moment from 'react-moment';
import Emojione from 'emojione';
import { Link } from  'react-router-dom';
import 'moment/locale/fr';
import '../assets/css/Post.css';
Emojione.ascii = true;

const styles = {
    borderBottom: '3px solid #eee',
    background: '#FFFFFF',
    margin: '.75rem auto',
    padding: '.6rem 1rem',
    maxWidth: '500px',
    borderRadius: '7px'
};

export default({ post, onDelete, onUpdate }) => {
    function createMarkup() {
        return {__html: Emojione.toImage(post.body)};
    }

    return (
        <div style={ styles }>

            <Link className="username" to={`/profil/${post.id_user._id}`}><h4 className="username">{ post.id_user.name } { post.id_user.lastname }</h4></Link>
            <Moment fromNow locale="fr">{ post.date }</Moment>
            <div dangerouslySetInnerHTML={createMarkup()} className="body" />
            <button className="btn btn-danger btn-sm" type="link" onClick={() => onDelete(post._id)}>
                Remove
            </button>
            <button type="button" className="btn btn-outline-secondary btn-sm">Edit</button>
        </div>
    );
};