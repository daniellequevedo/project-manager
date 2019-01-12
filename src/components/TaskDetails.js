import React, { Component } from 'react';

class TaskDetails extends Component {
// const TaskDetails = (props) => {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    displayTeamMemberName = (member_id) => {
        return this.props.teammembers.filter( (member) => {
            return member.member_id === member_id;
        })[0].member_name;
    }

    render() {
        return (
            <div className="details-sidebar">
                <h3>{this.props.selectedTask.task_name}</h3>
                <span>{this.props.selectedProject.project_name}</span>
                <div className="item-detail-group">
                    <div className="item-detail">
                        <span className="item-detail-label">Status</span>
                        <span className={`item-detail-value status ${this.props.selectedTask.task_status}`}>
                            {this.props.selectedTask.task_status.replace(/-/g,' ')}
                        </span>
                    </div>
                </div>
                <div className="item-detail-group">
                    <div className="item-detail">
                        <span className="item-detail-label">Due Date</span>
                        <span className="item-detail-value">
                            {this.props.selectedTask.task_due_date}
                        </span>
                    </div>
                    <div className="item-detail">
                        <span className="item-detail-label">Actual End Date:</span>
                        <span className="item-detail-value">
                            {this.props.selectedTask.task_end_date}
                        </span>
                    </div>
                </div>
                <div className="item-detail-group">
                    <div className="item-detail">
                        <span className="item-detail-label">Assigned To:</span>
                        <span className="item-detail-value long-text">
                            {this.props.selectedTask.task_assigned_to}
                        </span>
                    </div>
                    <div className="item-detail">
                        <span className="item-detail-label">Assigned By:</span>
                        <span className="item-detail-value long-text">
                            {this.props.selectedTask.task_assigned_by}
                        </span>
                    </div>
                </div>
                <div className="item-detail-group">
                    <div className="item-detail full-width">
                        <span className="item-detail-label">Description:</span>
                        <span className="item-detail-value paragraph">
                            {this.props.selectedTask.task_description}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskDetails;