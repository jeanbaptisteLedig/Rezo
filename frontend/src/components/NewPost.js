// NewPost.js

import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {Input} from "reactstrap";
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

class NewPost extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id_user: this.props.user.id,
            body: '',
            openEditor: false
        };
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    addEmoji = (e) => {
        //console.log(e.unified)
        if (e.unified.length <= 5){
            let emojiPic = String.fromCodePoint(`0x${e.unified}`);
            this.setState({
                body: this.state.body + emojiPic
            })
        }else {
            let sym = e.unified.split('-');
            let codesArray = [];
            sym.forEach(el => codesArray.push('0x' + el));
            //console.log(codesArray.length)
            //console.log(codesArray)  // ["0x1f3f3", "0xfe0f"]
            let emojiPic = String.fromCodePoint(...codesArray);
            this.setState({
                body: this.state.body + emojiPic
            })
        }
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.props.user.id && this.state.body.trim()) {
            this.props.onAddPost({
                body: this.state.body,
                user: this.props.user
            });
            this.handleReset();
        }
    };

    handleReset = () => {
        this.setState({
            id_user: this.props.user.id,
            body: '',
            openEditor: false
        });
    };

    toggle = () => {
        this.setState({
            openEditor: this.state.body.length > 0 ? true : !this.state.openEditor
        });
    };

    render() {
        let button = null;
        if (this.state.openEditor) {
            button = (
                <div className={"form-group action-buttons"}>
                    <span
                        className={"clickable cancel-action"}
                        onClick={this.cancel}>
                        Annuler
                    </span>
                    <button
                        type="submit"
                        className="float-right btn btn-outline-primary"
                        disabled={this.state.body.length === 0}>
                        Publier
                    </button>
                </div>
            );
        }

        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <h3>Créer une publication</h3>
                    <div className="form-group">
                        <Input
                            name="body"
                            type={"textarea"}
                            rows={this.state.openEditor ? 3 : 1}
                            placeholder={"Que voulez-vous nous raconter aujourd'hui ?"}
                            validate={{required: true}}
                            onChange={ this.handleInputChange }
                            value={ this.state.body }
                            onBlur={this.toggle} onFocus={this.toggle}
                        />
                        <Picker
                            title='Pick your emoji…'
                            emoji='point_up'
                            emojiSize={20}
                            showPreview={false}
                            onSelect={this.addEmoji}
                        />
                    </div>
                    {button}
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.auth.user
});

export default withRouter(connect(mapStateToProps)(NewPost));