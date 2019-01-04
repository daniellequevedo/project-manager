import React, { Component } from 'react';
import teamMembers from '../data/teammembers';
import TeamMemberSummary from '../components/TeamMemberSummary';
import AddTeamMemberForm from '../components/AddTeamMemberForm';

class TeamMembersPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addTeamMember: false,            
        }
    }

    handleAddTeamMemberSave = (teammember) => {
        teamMembers.push(teammember);
        this.setState({addTeamMember: false});
    }

    handleDisplayAddTeamMemberForm = () => {
        this.setState({addTeamMember: true});
    }

    handleCancelAddTeamMemberForm = () => {
        this.setState({addTeamMember: false});
    }


    render() {
        return (
            <React.Fragment>
            <button
                className="btn-display-add-modal"
                onClick={this.handleDisplayAddTeamMemberForm}
            >
                Add Team Member
            </button>
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

            <AddTeamMemberForm 
                handleAddTeamMemberSave={this.handleAddTeamMemberSave}
                handleCancelAddTeamMemberForm={this.handleCancelAddTeamMemberForm}
                displayModal={this.state.addTeamMember}
            />
            </React.Fragment>
        );
    }
}

export default TeamMembersPage;