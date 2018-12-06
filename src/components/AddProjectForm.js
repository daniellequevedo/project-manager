import React from 'react';

const AddProjectForm = () => {
    return (
        <React.Fragment>
            <div id="target-add-project" className="target"></div>
            <div id="modal-add-project" className="modal">
                <div class="modal-content">
                    <h2>Add Project</h2>
                    <form>
                        <div className="item-detail">
                            <label className="item-detail-label">Project Name:</label>
                            <div className="item-detail-value">
                                <input type="text" className="item-detail-input" />
                            </div>
                        </div>
                    </form>
                    <div className="modal-footer">
                        <a href="/projects" className="button">Cancel</a>
                        <button>Add</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default AddProjectForm;