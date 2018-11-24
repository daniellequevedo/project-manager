import React from 'react';
import data from '../data/data';
import TaskSummary from '../components/TaskSummary';

function TasksPage() {
    return (
        <React.Fragment>
            <h1>Tasks</h1>
            <ul className="list">
                {data.map( (task) => {
                    return <TaskSummary key={task.task_id} task_name={task.task_name} task_due_date={task.task_due_date} />
                })}
            </ul>
        </React.Fragment>
    );
}

export default TasksPage;