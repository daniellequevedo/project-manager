import React from 'react';

const TaskSummary = ({task_name, task_due_date}) => {
    return (
        <li className="list-item">
            <span>{task_name}</span>
            <span>{task_due_date}</span>
        </li>
    );
}

export default TaskSummary;