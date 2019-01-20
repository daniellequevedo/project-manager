import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

class AddProjectForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            project_name: '',
            project_status: 'in-consideration',
            project_category: '',
            project_due_date: '',
            project_end_date: '',
            project_assigned_to: this.props.teammembers[0].member_id,
            project_assigned_by: this.props.teammembers[0].member_id,
            project_resource_link: '',
            project_final_link: '',
            project_description: '',
            project_notes: '', 
        }
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();

        let submittedProject = this.state;
        let project = Object.assign({project_id: uuidv4()}, submittedProject);

        this.props.handleAddProjectSave(project);
        this.handleReset();
    }

    handleReset = () => {
        this.setState({
            project_name: '',
            project_status: 'in-consideration',
            project_category: '',
            project_due_date: '',
            project_assigned_to: this.props.teammembers[0].member_id,
            project_assigned_by: this.props.teammembers[0].member_id,
            project_resource_link: '',
            project_final_link: '',
            project_description: '',
            project_notes: '',                  
        });
    }

    displayTeamMemberName = () => {
        return this.props.teammembers.map( (member) => {
            return (
                <option 
                    value={member.member_id}
                    key={member.member_id}
                >
                    {member.member_name}
                </option>
            )
        });
    }



    render() {
        return (
            <React.Fragment>
                <div id="modal-add-project" className={`modal` + `${this.props.displayModal ? ` show` : ``}`}>
                    <div className="modal-content">
                        <h2>Add Project</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div className="item-detail-group">    
                                <div className="item-detail">
                                    <label className="item-detail-label">Project Name:</label>
                                    <div className="item-detail-value">
                                        <input 
                                            type="text"
                                            name="project_name"
                                            onChange={this.handleInputChange}
                                            value={this.state.project_name}
                                            className="item-detail-input" 
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="item-detail-group">
                                <div className="item-detail">
                                    <label className="item-detail-label">Status:</label>
                                    <div className="item-detail-value">
                                        <select 
                                            value={this.state.project_status} 
                                            onChange={this.handleInputChange}
                                            name="project_status"
                                            className="item-detail-input"
                                        >
                                            {this.props.statuses.map( (status) => {
                                                return (
                                                    <option 
                                                        key={status}
                                                        value={status} 
                                                        className="status"
                                                    >
                                                        {status.replace(/-/g,' ')}
                                                    </option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div className="item-detail">
                                    <label className="item-detail-label">Category:</label>
                                    <div className="item-detail-value">
                                        <input 
                                            type="text"
                                            name="project_category"
                                            onChange={this.handleInputChange}
                                            value={this.state.project_category}
                                            className="item-detail-input" 
                                        />
                                    </div>
                                </div>
                                <div className="item-detail">
                                    <label className="item-detail-label">Due Date:</label>
                                    <div className="item-detail-value">
                                        <input 
                                            type="text"
                                            name="project_due_date"
                                            onChange={this.handleInputChange}
                                            value={this.state.project_due_date}
                                            className="item-detail-input" 
                                        />
                                    </div>
                                </div>                                
                            </div>

                            <div className="item-detail-group">
                                <div className="item-detail">
                                    <label className="item-detail-label">Assigned To:</label>
                                    <div className="item-detail-value">
                                        <select
                                            className="item-detail-input"
                                            name="project_assigned_to"
                                            onChange={this.handleInputChange}
                                            value={this.state.project_assigned_to}
                                        >
                                            {this.displayTeamMemberName()}
                                        </select>
                                    </div>
                                </div>
                                <div className="item-detail">
                                    <label className="item-detail-label">Assigned By:</label>
                                    <div className="item-detail-value">
                                        <select
                                            className="item-detail-input"
                                            name="project_assigned_by"
                                            onChange={this.handleInputChange}
                                            value={this.state.project_assigned_by}
                                        >
                                            {this.displayTeamMemberName()}
                                        </select>                                        
                                    </div>
                                </div>
                            </div>

                            <div className="item-detail-group">
                                <div className="item-detail">
                                    <label className="item-detail-label">Resource Link:</label>
                                    <div className="item-detail-value">
                                        <input 
                                            type="text"
                                            name="project_resource_link"
                                            onChange={this.handleInputChange}
                                            value={this.state.project_resource_link}
                                            className="item-detail-input" 
                                        />
                                    </div>
                                </div>
                                <div className="item-detail">
                                    <label className="item-detail-label">Project Link:</label>
                                    <div className="item-detail-value">
                                        <input 
                                            type="text"
                                            name="project_final_link"
                                            onChange={this.handleInputChange}
                                            value={this.state.project_final_link}
                                            className="item-detail-input" 
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="item-detail-group">
                                <div className="item-detail full-width">
                                    <label className="item-detail-label">Description:</label>
                                    <div className="item-detail-value paragraph">
                                        <textarea 
                                            type="text"
                                            name="project_description"
                                            onChange={this.handleInputChange}
                                            value={this.state.project_description}
                                            className="item-detail-input" 
                                        />
                                    </div>
                                </div>
                                <div className="item-detail full-width">
                                    <label className="item-detail-label">Notes:</label>
                                    <div className="item-detail-value paragraph">
                                        <textarea 
                                            type="text"
                                            name="project_notes"
                                            onChange={this.handleInputChange}
                                            value={this.state.project_notes}
                                            className="item-detail-input" 
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button 
                                    type="button"
                                    onClick={this.props.handleCancelAddProjectForm}
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

export default AddProjectForm;