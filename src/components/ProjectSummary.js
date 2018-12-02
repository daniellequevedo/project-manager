import React from 'react';

const ProjectSummary = ({project: {
        project_id,
        project_name
    },
    handleDisplayProjectDetails,
    isSelected}) => {

    return (
        <li className={`list-item` + `${isSelected ? ` ` + isSelected : ``}`}>
            <span>{project_name}</span>
            <button onClick={() => handleDisplayProjectDetails(project_id)}>
                {isSelected ? `<` : `>`}
            </button>
        </li>
    );
}

export default ProjectSummary