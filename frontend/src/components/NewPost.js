// NewPost.js

import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {Input} from "reactstrap";

class NewPost extends React.Component {

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.props.user.id && this.state.content.trim()) {
            this.props.onAddPost(this.state);
            this.handleReset();
        }
    };

    handleReset = () => {
        this.setState({
            id_user: this.props.user.id,
            content: ''
        });
    };

    toggle = () => {
        this.setState({
            openEditor: this.state.content.length > 0 ? true : !this.state.openEditor
        });
    };

    constructor(props) {
        super(props);

        this.state = {
            id_user: this.props.user.id,
            content: '',
            openEditor: false
        };
    }


    render() {
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <h3>Créer une publication</h3>
                    <div className="form-group">
                        <Input
                            name="content"
                            type={"textarea"}
                            rows={this.state.openEditor ? 3 : 1}
                            placeholder={"Que voulez-vous nous raconter aujourd'hui ?"}
                            validate={{required: true}}
                            onChange={ this.handleInputChange }
                            value={ this.state.content }
                            onBlur={this.toggle} onFocus={this.toggle}/>
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