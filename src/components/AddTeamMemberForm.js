import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

class TeamMemberForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            member_name: '',
        }
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.member_name.trim()) {
            let submittedTeamMember = this.state;
            let teammember = Object.assign({member_id: uuidv4()}, submittedTeamMember);
            this.props.handleAddTeamMemberSave(teammember);
            this.handleReset();
        }
    }

    handleReset = () => {
        this.setState({
            member_name: '',
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className={`modal` + `${this.props.displayModal ? ` show` : ``}`}>
                    <div className="modal-content">
                        <h2>Add Team Member</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div className="item-detail-group">
                                <div className="item-detail">
                                    <label className="item-detail-label">Name:</label>
                                    <div className="item-detail-value">
                                        <input 
                                            type="text"
                                            name="member_name"
                                            onChange={this.handleInputChange}
                                            value={this.state.member_name}
                                            className="item-detail-input"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    onClick={this.props.handleCancelAddTeamMemberForm}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                >
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default TeamMemberForm;