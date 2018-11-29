import React from 'react';

const TaskDetails = (props) => {
    return (
        <div className="details-sidebar">
            <h3>{props.selectedTask.task_name}</h3>
        </div>
    );
}

export default TaskDetails;