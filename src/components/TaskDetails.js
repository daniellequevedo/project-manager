import React from 'react';

const TaskDetails = (props) => {
    return (
        <h1>{props.selectedTask.task_name}</h1>
    );
}

export default TaskDetails;