import React from 'react';

const ProjectDetails = (props) => {
    return (
        <div className="details-sidebar">
            <h3>{props.selectedProject.project_name}</h3>
            <div className="item-detail-group">
                <div className="item-detail">
                    <span className="item-detail-label">Status:</span>
                    <span className={`item-detail-value status ${props.selectedProject.project_status}`}>
                        {props.selectedProject.project_status.replace(/-/g,' ')}
                    </span>
                </div>
                <div className="item-detail">
                    <span className="item-detail-label">Category:</span>
                    <span className="item-detail-value">
                        {props.selectedProject.project_category}
                    </span>
                </div>
            </div>
            <div className="item-detail-group">
                <div className="item-detail">
                    <span className="item-detail-label">Due Date:</span>
                    <span className="item-detail-value">
                        {props.selectedProject.project_due_date}
                    </span>
                </div>
                <div className="item-detail">
                    <span className="item-detail-label">Actual End Date:</span>
                    <span className="item-detail-value">
                        {props.selectedProject.project_end_date}
                    </span>
                </div>
            </div>
            <div className="item-detail-group">
                <div className="item-detail">
                    <span className="item-detail-label">Assigned To:</span>
                    <span className="item-detail-value">
                        {props.selectedProject.project_assigned_to}
                    </span>
                </div>
                <div className="item-detail">
                    <span className="item-detail-label">Assigned By:</span>
                    <span className="item-detail-value">
                        {props.selectedProject.project_assigned_by}
                    </span>
                </div>
            </div>
            <div className="item-detail-group">
                <div className="item-detail">
                    <span className="item-detail-label">Resource Link:</span>
                    <span className="item-detail-value">
                        {props.selectedProject.project_resource_link}
                    </span>
                </div>
                <div className="item-detail">
                    <span className="item-detail-label">Project Linnk:</span>
                    <span className="item-detail-value">
                        {props.selectedProject.project_final_link}
                    </span>
                </div>
            </div>
            <div className="item-detail-group">
                <div className="item-detail full-width">
                    <span className="item-detail-label">Description:</span>
                    <span className="item-detail-value paragraph">
                        {props.selectedProject.project_description}
                    </span>
                </div>
            </div>
            <div className="item-detail-group">
                <div className="item-detail full-width">
                    <span className="item-detail-label">Notes:</span>
                    <span className="item-detail-value paragraph">
                    {props.selectedProject.project_notes}
                    </span>
                </div>
            </div>                                                   
        </div>
    );
}

export default ProjectDetails;