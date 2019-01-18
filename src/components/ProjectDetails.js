import React, { Component } from 'react';
import ProjectDetailsDisplay from './ProjectDetailsDisplay';
import EditProjectForm from './EditProjectForm';
import data from '../data/data';

class ProjectDetails extends Component {
// const ProjectDetails = (props) => {
    // return (

    constructor(props) {
        super(props);
        this.state = {
            editingProject: null,
            editProject: false,
        }
    }

    handleProjectDetailsEdit = () => {
        console.log(`editProject: true`);
        this.setState({
            // editingProject: this.props.selectedProject,
            editProject: true
        });
    }

    handleProjectDetailsSave = editProject => {
        
        data.map(project => (
            project.project_id === editProject.project_id
            ? Object.assign(project, editProject)
            : project
        ));

        this.setState({
            editProject: false
        });
    }

    handleProjectDetailsCancel = () => {
        this.setState({
            editProject: false
        });        
    }

    displayTeamMemberName = (member_id) => {
        return this.props.teammembers.filter( (member) => {
            return member.member_id === member_id;
        })[0].member_name;
    }

    render() {
        return (
        <div className="details-sidebar">
            <h3>{this.props.selectedProject.project_name}</h3>
            
            {this.state.editProject 
            ? <EditProjectForm 
                statuses={this.props.statuses}
                project={this.props.selectedProject}
                handleProjectDetailsSave={this.handleProjectDetailsSave}
                handleProjectDetailsCancel={this.handleProjectDetailsCancel}
                /> 
            : <ProjectDetailsDisplay
                project={this.props.selectedProject} 
                handleProjectDetailsEdit={this.handleProjectDetailsEdit}/>}

            <div className="item-detail-group">
                <div className="item-detail">
                    <span className="item-detail-label">Assigned To:</span>
                    <span className="item-detail-value long-text">
                        {this.displayTeamMemberName(this.props.selectedProject.project_assigned_to)}
                    </span>
                </div>
                <div className="item-detail">
                    <span className="item-detail-label">Assigned By:</span>
                    <span className="item-detail-value long-text">
                        {this.displayTeamMemberName(this.props.selectedProject.project_assigned_by)}
                    </span>
                </div>
            </div>
            <div className="item-detail-group">
                <div className="item-detail">
                    <span className="item-detail-label">Resource Link:</span>
                    <span className="item-detail-value long-text link">
                        {this.props.selectedProject.project_resource_link}
                    </span>
                    {this.props.selectedProject.project_resource_link 
                        ? <a href={this.props.selectedProject.project_resource_link} target="_blank">
                                <button>
                                    >
                                </button>
                            </a>
                        : null
                    }
                </div>
                <div className="item-detail">
                    <span className="item-detail-label">Project Link:</span>
                    <span className="item-detail-value long-text link">
                        {this.props.selectedProject.project_final_link}
                    </span>
                    {this.props.selectedProject.project_final_link 
                        ? <a href={this.props.selectedProject.project_final_link} target="_blank">
                                <button>
                                    >
                                </button>
                            </a>
                        : null
                    }
                </div>
            </div>
            <div className="item-detail-group">
                <div className="item-detail full-width">
                    <span className="item-detail-label">Description:</span>
                    <span className="item-detail-value paragraph">
                        {this.props.selectedProject.project_description}
                    </span>
                </div>
            </div>
            <div className="item-detail-group">
                <div className="item-detail full-width">
                    <span className="item-detail-label">Notes:</span>
                    <span className="item-detail-value paragraph">
                    {this.props.selectedProject.project_notes}
                    </span>
                </div>
            </div>                                                   
        </div>
        );
    }
}

export default ProjectDetails;