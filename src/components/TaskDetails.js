import React from 'react';

const TaskDetails = (props) => {
    return (
        <div className="details-sidebar">
            <h3>{props.selectedTask.task_name}</h3>
            <span>Environment - Mac</span>
            <div className="item-detail-group">
                <div className="item-detail">
                    <span className="item-detail-label">Status</span>
                    <span className="item-detail-value in-process">In Process</span>
                </div>
            </div>
            <div className="item-detail-group">
                <div className="item-detail">
                    <span className="item-detail-label">Due Date</span>
                    <span className="item-detail-value">01-07-19</span>
                </div>
                <div className="item-detail">
                    <span className="item-detail-label">Actual End Date:</span>
                    <span className="item-detail-value">01-07-20</span>
                </div>
            </div>
            <div className="item-detail-group">
                <div className="item-detail">
                    <span className="item-detail-label">Assigned To:</span>
                    <span className="item-detail-value">Hatem</span>
                </div>
                <div className="item-detail">
                    <span className="item-detail-label">Assigned By:</span>
                    <span className="item-detail-value">Hal</span>
                </div>
            </div>
            <div className="item-detail-group">
                <div className="item-detail full-width">
                    <span className="item-detail-label">Description:</span>
                    <span className="item-detail-value">Should be a quick intro</span>
                </div>
            </div>
        </div>
    );
}

export default TaskDetails;