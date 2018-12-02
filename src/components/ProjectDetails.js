import React from 'react';

const ProjectDetails = (props) => {
    return (
        <div className="details-sidebar">
            <h3>{props.selectedProject.project_name}</h3>
            <div className="item-detail-group">
                <div className="item-detail">
                    <span className="item-detail-label">Status:</span>
                    <span className="item-detail-value">Approved</span>
                </div>
                <div className="item-detail">
                    <span className="item-detail-label">Category:</span>
                    <span className="item-detail-value">Environments</span>
                </div>
            </div>
            <div className="item-detail-group">
                <div className="item-detail">
                    <span className="item-detail-label">Due Date:</span>
                    <span className="item-detail-value">01-01-19</span>
                </div>
                <div className="item-detail">
                    <span className="item-detail-label">Actual End Date:</span>
                    <span className="item-detail-value">02-02-18</span>
                </div>
            </div>
            <div className="item-detail-group">
                <div className="item-detail">
                    <span className="item-detail-label">Assigned To:</span>
                    <span className="item-detail-value">Jim</span>
                </div>
                <div className="item-detail">
                    <span className="item-detail-label">Assigned By:</span>
                    <span className="item-detail-value">Dwight</span>
                </div>
            </div>
            <div className="item-detail-group">
                <div className="item-detail">
                    <span className="item-detail-label">Resource Link:</span>
                    <span className="item-detail-value">google.com</span>
                </div>
                <div className="item-detail">
                    <span className="item-detail-label">Project Linnk:</span>
                    <span className="item-detail-value">mysite.com</span>
                </div>
            </div>
            <div className="item-detail-group">
                <div className="item-detail full-width">
                    <span className="item-detail-label">Description:</span>
                    <span className="item-detail-value paragraph">
                        a bunch of words
                    </span>
                </div>
            </div>
            <div className="item-detail-group">
                <div className="item-detail full-width">
                    <span className="item-detail-label">Notes:</span>
                    <span className="item-detail-value paragraph">
                        Well umm...
                    </span>
                </div>
            </div>                                                   
        </div>
    );
}

export default ProjectDetails;