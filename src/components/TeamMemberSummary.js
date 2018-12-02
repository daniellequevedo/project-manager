import React from 'react';

const TeamMemberSummary = ({teamMember: {
        member_id, 
        member_name
    }}) => {
    return (
        <li className="list-item">
            <span>{member_name}</span>
        </li>
    );
}

export default TeamMemberSummary;