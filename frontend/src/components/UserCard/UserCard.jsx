import React, { Component } from "react";

export class UserCard extends Component {
    render() {
        return (
            <div className="card card-user">
                <div className="content">
                    <img
                        className="avatar border-gray"
                        src={this.props.avatar}
                        alt="..."
                    />
                    <h4 className="title">
                        {this.props.name}
                        <br />
                        <small>{this.props.lastname}</small>
                    </h4>
                </div>
            </div>
        );
    }
}

export default UserCard;