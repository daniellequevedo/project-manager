import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

const AddProjectForm = (props) => {

    let handleSubmit = e => {
        // console.log("e.target is: ", e.target);
        // console.log('hello!')
        e.preventDefault();

        let project = {
            project_id: uuidv4(),
            project_name: document.getElementById("project-name").value,
        };
        props.handleAddProjectSave(project);
        handleReset();
    }

    let handleReset = () => {
        document.getElementById("project-name").value = '';
    }

    return (
        <React.Fragment>
            <div id="target-add-project" className="target"></div>
            <div id="modal-add-project" className="modal">
                <div className="modal-content">
                    <h2>Add Project</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="item-detail">
                            <label className="item-detail-label">Project Name:</label>
                            <div className="item-detail-value">
                                <input 
                                    id="project-name"
                                    type="text" 
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

export default AddProjectForm;