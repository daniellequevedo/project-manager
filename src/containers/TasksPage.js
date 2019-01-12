import React, { Component } from 'react';
import data from '../data/data';
import teammembers from '../data/teammembers';
import TaskSummary from '../components/TaskSummary';
import TaskDetails from '../components/TaskDetails';
import AddTaskForm from '../components/AddTaskForm';

class TasksPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTask: null,
            selectedProject: null,
            addTask: false,
        }
    }

    handleDisplayTaskDetails = (task_id, project_id) => {        
        let selectedProject = data.filter( (project) => {
            return project.project_id === project_id;
        })[0];
        let selectedTask = selectedProject.project_tasks.filter( (task) => {
            return task.task_id === task_id;
        })[0];
        console.log(
            "function selectedProject: ", selectedProject, 
            "function selectedTask: ", selectedTask
        );
        
        if (selectedTask === this.state.selectedTask) {
            this.setState({
                selectedTask: null, 
                selectedProject: null
            });
        } else {
            this.setState({
                selectedTask: selectedTask, 
                selectedProject: selectedProject
            });
        }
 
    }

    handleAddTaskSave = (task, project_id) => {
        console.log(`adding task: `, task);
        console.log(`to project id: `, project_id);

        let projectIndex = data.findIndex( project => project.project_id === project_id);
        console.log(data[projectIndex]);
        data[projectIndex].project_tasks.push(task);

        this.setState({addTask: false});
    }

    handleDisplayAddTaskForm = () => {
        this.setState({addTask: true});
    }

    handleCancelAddTaskForm = () => {
        this.setState({addTask: false});
    }

    render() {
        let statuses = [
            "in-consideration",
            "approved",
            "in-process",
            "complete"
        ];

        return (
            <React.Fragment>
                <button 
                    className="btn-display-add-modal"
                    onClick={this.handleDisplayAddTaskForm}
                >
                    Add Task
                </button>
                <div className={`summaries-list tasks` + `${this.state.selectedTask ? ` sidebar-expanded` : ``}`}>
                    <div className="table-headers">
                        <h1>Tasks</h1>
                        <span>Due Date</span>
                        <span>Project Name</span>
                    </div>
                    <ul className="list">
                        {data.map( (project) => {
                            return project.project_tasks.map( (task) => {
                                return <TaskSummary 
                                    key={task.task_id} 
                                    task={task} 
                                    project_name={project.project_name}
                                    project_id={project.project_id}
                                    handleDisplayTaskDetails={this.handleDisplayTaskDetails}
                                    isSelected={
                                        this.state.selectedTask 
                                        ? (task.task_id === this.state.selectedTask.task_id ? "selected" : null) 
                                        : null
                                    }
                                />
                            })
                        })}
                    </ul>
                </div>

                {console.log(
                    "state selectedTask: ", this.state.selectedTask
                )}

                {console.log(
                    "state selectedProject: ", this.state.selectedProject
                )}

                {this.state.selectedTask && 
                    <TaskDetails 
                        selectedTask={this.state.selectedTask}
                        selectedProject={this.state.selectedProject}
                        teammembers={teammembers}
                    />
                }

                <AddTaskForm 
                    handleAddTaskSave={this.handleAddTaskSave}
                    handleCancelAddTaskForm={this.handleCancelAddTaskForm}
                    displayModal={this.state.addTask}
                    statuses={statuses}
                    teammembers={teammembers}
                />
            </React.Fragment>
        );
    }
}


export default TasksPage;