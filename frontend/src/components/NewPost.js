// NewPost.js

import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class NewPost extends React.Component {
    state = {
        id_user: this.props.user.id,
        body: ''
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.props.user.id && this.state.body.trim()) {
            this.props.onAddPost(this.state);
            this.handleReset();
        }
    };

    handleReset = () => {
        this.setState({
            id_user: this.props.user.id,
            body: ''
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <h3>Créer une publication</h3>
                    <div className="form-group">
                        <textarea
                            cols="1"
                            rows="3"
                            placeholder="Que voulez-vous nous raconter aujourd'hui ?"
                            className="form-control"
                            name="body"
                            onChange={ this.handleInputChange }
                            value={ this.state.body }>
                        </textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-outline-primary">Add Post</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.auth.user
});

export default withRouter(connect(mapStateToProps)(NewPost));