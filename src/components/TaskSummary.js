import React from 'react';

const TaskSummary = ({task_name, task_due_date}) => {
    return (
        <li>{task_name}<span>{task_due_date}</span></li>
    );
}

export default TaskSummary;