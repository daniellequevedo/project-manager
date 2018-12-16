import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

class AddProjectForm extends Component {
// const AddProjectForm = (props) => {

    constructor(props) {
        super(props);
        this.state = {
            project_name: '',
            project_status: 'in-consideration',
            project_category: '',
            project_due_date: '',
            project_end_date: '',
            project_assigned_to: '',
            project_assigned_by: '',
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
            project_assigned_to: '',
            project_assigned_by: '',
            project_resource_link: '',
            project_final_link: '',
            project_description: '',
            project_notes: '',                  
        });
    }

    render() {
        return (
            <React.Fragment>
                <div id="target-add-project" className="target"></div>
                <div id="modal-add-project" className="modal">
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
                                            <option value="in-consideration">In Consideration</option>
                                            <option value="approved">Approved</option>
                                            <option value="in-process">In Process</option>
                                            <option value="complete">Complete</option>
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
                                        <input 
                                            type="text"
                                            name="project_assigned_to"
                                            onChange={this.handleInputChange}
                                            value={this.state.project_assigned_to}
                                            className="item-detail-input" 
                                        />
                                    </div>
                                </div>
                                <div className="item-detail">
                                    <label className="item-detail-label">Assigned By:</label>
                                    <div className="item-detail-value">
                                        <input 
                                            type="text"
                                            name="project_assigned_by"
                                            onChange={this.handleInputChange}
                                            value={this.state.project_assigned_by}
                                            className="item-detail-input" 
                                        />
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
                                <a href="/projects" className="button">Cancel</a>
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