import React from 'react';
import data from '../data/data';

function TasksPage() {
    return (
        <React.Fragment>
            <h1>Tasks</h1>
            <ul>
                {data.map( (task) => {
                    return <li>{task.task_name}<span>{task.task_due_date}</span></li>
                })}
            </ul>
        </React.Fragment>
    );
}

export default TasksPage;