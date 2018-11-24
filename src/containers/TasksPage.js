import React from 'react';
import data from '../data/data';
import TaskSummary from '../components/TaskSummary';

function TasksPage() {
    return (
        <React.Fragment>
            <h1>Tasks</h1>
            <ul className="list">
                {data.map( (project) => {
                    return project.project_tasks.map( (task) => {
                        return <TaskSummary 
                            key={task.task_id} 
                            task_name={task.task_name} 
                            task_due_date={task.task_due_date} 
                            project_name={project.project_name}
                        />
                    })

                })}
            </ul>
        </React.Fragment>
    );
}

// return <TaskSummary key={project.project_id} task_name={project.project_name} task_due_date={0} />

export default TasksPage;