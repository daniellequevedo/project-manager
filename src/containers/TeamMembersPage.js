import React, { Component } from 'react';
import teamMembers from '../data/teammembers';
import TeamMemberSummary from '../components/TeamMemberSummary';

class TeamMembersPage extends Component {
    render() {
        return (
            <div className="summaries-list team-members">
                <div className="table-headers">
                    <h1>Team Members</h1>
                </div>
                <ul className="list">
                    {teamMembers.map( (teamMember) => {
                        return <TeamMemberSummary 
                            key={teamMember.member_id}
                            teamMember={teamMember}
                        />
                    })}
                </ul>
            </div>
        );
    }
}

export default TeamMembersPage;