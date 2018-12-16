import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

class AddProjectForm extends Component {
// const AddProjectForm = (props) => {

    constructor(props) {
        super(props);
        this.state = {
            project_name: ''
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
            project_name: ''
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