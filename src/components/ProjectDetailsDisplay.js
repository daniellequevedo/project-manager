import React, { Component } from 'react';

class ProjectDetailsDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <h3>ProjectDetailsDisplay</h3>
                <button 
                    className="edit-details"
                    onClick={this.props.handleProjectDetailsEdit}>
                    Edit
                </button>
                <div className="item-detail-group">
                    <div className="item-detail">
                        <span className="item-detail-label">Category:</span>
                        <span className="item-detail-value long-text">
                            {this.props.project.project_category}
                        </span>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProjectDetailsDisplay;