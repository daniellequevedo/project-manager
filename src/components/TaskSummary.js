import React from 'react';

const TaskSummary = ({task_name, task_due_date, project_name}) => {
    return (
        <li className="list-item">
            <span>{task_name}</span>
            <span>{task_due_date}</span>
            <span>{project_name}</span>
        </li>
    );
}

export default TaskSummary;