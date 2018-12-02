import React from 'react';

const ProjectSummary = ({project: {
        project_id,
        project_name
    },
    handleDisplayProjectDetails}) => {

    return (
        <li className="list-item">
            <span>{project_name}</span>
            <button onClick={() => handleDisplayProjectDetails(project_id)}>
                >
            </button>
        </li>
    );
}

export default ProjectSummary