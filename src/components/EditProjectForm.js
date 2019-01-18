import React, { Component } from 'react';

class EditProjectForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: this.props.project
        }
    }

    handleInputChange = e => {
        this.setState({
            project: {
                ...this.state.project,
                [e.target.name]: e.target.value
            }
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(`this.state.project: `, this.state.project);
        this.props.handleProjectDetailsSave(this.state.project);
    }

    handleCancel = () => {
        this.setState({
            project: this.props.project
        });

        this.props.handleProjectDetailsCancel();
    }

    render() {
        return (
            <React.Fragment>
                <h3>Edit Project Form</h3>
                <form onSubmit={this.handleSubmit}>
                    <button 
                        onClick={this.handleCancel}
                        type="button">
                        Cancel
                    </button>                 
                    <button 
                        className="edit-details"
                        type="submit">
                        Save
                    </button>                
                    <div className="item-detail-group">
                        <div className="item-detail">
                            <label className="item-detail-label">Category:</label>
                            <div className="item-detail-value">
                                <input 
                                    type="text"
                                    name="project_category"
                                    onChange={this.handleInputChange}
                                    value={this.state.project.project_category}
                                    className="item-detail-input" 
                                />
                            </div>
                        </div>
                    </div>

                    <div className="item-detail-group">
                        <div className="item-detail">
                            <label className="item-detail-label">Due Date:</label>
                            <input 
                                type="text"
                                name="project_due_date"
                                onChange={this.handleInputChange}
                                value={this.state.project.project_due_date}
                                className="item-detail-input"
                            />
                        </div>
                        <div className="item-detail">
                            <label className="item-detail-label">Actual End Date:</label>
                            <input 
                                type="text"
                                name="project_end_date"
                                onChange={this.handleInputChange}
                                value={this.state.project.project_end_date}
                                className="item-detail-input"
                            />
                        </div>                        
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

export default EditProjectForm;