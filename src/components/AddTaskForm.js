import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

class AddTaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            task: {
                task_name: '',
                task_status: 'in-consideration',
                task_due_date: '',
                task_end_date: '',
                task_assigned_to: this.props.teammembers[0].member_id,
                task_assigned_by: this.props.teammembers[0].member_id,
                task_description: '',
            },
            project_id: this.props.projects[0].project_id,
        }
    }

    handleInputChange = e => {
        this.setState({
            task: {
                ...this.state.task,
                [e.target.name]: e.target.value
            }
        });
    }

    // handleInputChange = e => {
    //     this.setState(prevState => ({
    //         task: {
    //             ...prevState.task,
    //             [e.target.name]: e.target.value
    //         }
    //     }));
    // }


    handleProjectInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        let submittedTask = this.state.task;
        let task = Object.assign({task_id: uuidv4()}, submittedTask);

        this.props.handleAddTaskSave(task, this.state.project_id);
        this.handleReset();
    }

    // handleReset = () => {
    //     this.setState({
    //         task: {
    //             task_name: '',
    //             task_status: 'in-consideration',
    //             task_due_date: '',
    //             task_end_date: '',
    //             task_assigned_to: '',
    //             task_assigned_by: '',
    //             task_description: '',                
    //         },
    //         project_id: this.props.projects[0].project_id,
    //     });
    // }

    handleReset = () => {
        this.setState({
            task: {
                ...this.state.task,
                task_name: '',
                task_status: 'in-consideration',
                task_due_date: '',
                task_end_date: '',
                task_assigned_to: this.props.teammembers[0].member_id,
                task_assigned_by: this.props.teammembers[0].member_id,
                task_description: '',  
            },
            project_id: this.props.projects[0].project_id,
        });
    }

    displayTeamMemberName = () => {
        return this.props.teammembers.map( (member) => {
            return (
                <option 
                    value={member.member_id}
                    key={member.member_id}
                >
                    {member.member_name}
                </option>
            )
        });
    }

    render() {
        return (
            <div className={`modal` + `${this.props.displayModal ? ` show` : ``}`}>
                <div className="modal-content">
                    <h2>Add Task</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="item-detail-group">
                            <div className="item-detail">
                                <label className="item-detail-label">Task Name:</label>
                                <div className="item-detail-value">
                                    <input 
                                        type="text"
                                        name="task_name"
                                        onChange={this.handleInputChange}
                                        value={this.state.task.task_name}
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
                                        value={this.state.task.task_status} 
                                        onChange={this.handleInputChange}
                                        name="task_status"
                                        className="item-detail-input"
                                    >
                                        {this.props.statuses.map( (status) => {
                                            return (
                                                <option 
                                                    key={status}
                                                    value={status} 
                                                    className="status"
                                                >
                                                    {status.replace(/-/g,' ')}
                                                </option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="item-detail">
                                <label className="item-detail-label">Project Name:</label>
                                <div className="item-detail-value">
                                    <select 
                                        value={this.state.project_id}
                                        onChange={this.handleProjectInputChange}
                                        name="project_id"
                                        className="item-detail-input"
                                    >
                                        {this.props.projects.map( (project) => {
                                            return <option 
                                                key={project.project_id} 
                                                value={project.project_id}>
                                                    {project.project_name}
                                                </option>
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="item-detail">
                                <label className="item-detail-label">Due Date:</label>
                                <div className="item-detail-value">
                                    <input 
                                        type="text"
                                        name="task_due_date"
                                        onChange={this.handleInputChange}
                                        value={this.state.task.task_due_date}
                                        className="item-detail-input" 
                                    />
                                </div>
                            </div>                                
                        </div>

                        <div className="item-detail-group">
                            <div className="item-detail">
                                <label className="item-detail-label">Assigned To:</label>
                                <div className="item-detail-value">
                                    <select
                                        className="item-detail-input"
                                        name="task_assigned_to"
                                        onChange={this.handleInputChange}
                                        value={this.state.task.task_assigned_to}
                                    >
                                        {this.displayTeamMemberName()}
                                    </select>
                                </div>
                            </div>
                            <div className="item-detail">
                                <label className="item-detail-label">Assigned By:</label>
                                <div className="item-detail-value">
                                    <select
                                        className="item-detail-input"
                                        name="task_assigned_by"
                                        onChange={this.handleInputChange}
                                        value={this.state.task.task_assigned_by}
                                    >
                                        {this.displayTeamMemberName()}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="item-detail-group">
                            <div className="item-detail full-width">
                                <label className="item-detail-label">Description:</label>
                                <div className="item-detail-value paragraph">
                                    <textarea 
                                        type="text"
                                        name="task_description"
                                        onChange={this.handleInputChange}
                                        value={this.state.task.task_description}
                                        className="item-detail-input" 
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button 
                                type="button"
                                onClick={this.props.handleCancelAddTaskForm}
                            >
                                Cancel
                            </button>
                            <button 
                                type="submit"
                            >
                                Add
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddTaskForm;