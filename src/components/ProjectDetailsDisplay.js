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
                        <span className="item-detail-label">Status:</span>
                        <span className={`item-detail-value status ${this.props.project.project_status}`}>
                            {this.props.project.project_status.replace(/-/g,' ')}
                        </span>
                    </div>
                </div>                
                <div className="item-detail-group">
                    <div className="item-detail">
                        <span className="item-detail-label">Category:</span>
                        <span className="item-detail-value long-text">
                            {this.props.project.project_category}
                        </span>
                    </div>
                </div>
                <div className="item-detail-group">
                    <div className="item-detail">
                        <span className="item-detail-label">Due Date:</span>
                        <span className="item-detail-value">
                            {this.props.project.project_due_date}
                        </span>
                    </div>
                    <div className="item-detail">
                        <span className="item-detail-label">Actual End Date:</span>
                        <span className="item-detail-value">
                            {this.props.project.project_end_date}
                        </span>
                    </div>                     
                </div>
            </React.Fragment>
        );
    }
}

export default ProjectDetailsDisplay;