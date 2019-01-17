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

    handleProjectDetailsSave = project => {
        // add code here to save changes to project
            
            console.log(`project received from project edit form: `,project.project_name);

        let projectIndex = data.findIndex( dataProject => dataProject.project_id === project.project_id);
        

            console.log(`data[projectIndex]: `,data[projectIndex]);
        
        data[projectIndex] = project;
        
        

            console.log(`data[projectIndex]: `,data[projectIndex]);

        // data.find( dataProject => dataProject.project_id === project.project_id) = project;
        

        // data.find( dataProject => dataProject.project_id === project.project_id) = project

        this.setState({
            // editingProject: project,
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
                project={this.props.selectedProject}
                handleProjectDetailsSave={this.handleProjectDetailsSave}/> 
            : <ProjectDetailsDisplay
                project={this.props.selectedProject} 
                handleProjectDetailsEdit={this.handleProjectDetailsEdit}/>}

            <div className="item-detail-group">
                <div className="item-detail">
                    <span className="item-detail-label">Status:</span>
                    <span className={`item-detail-value status ${this.props.selectedProject.project_status}`}>
                        {this.props.selectedProject.project_status.replace(/-/g,' ')}
                    </span>
                </div>
            </div>
            <div className="item-detail-group">
                <div className="item-detail">
                    <span className="item-detail-label">Due Date:</span>
                    <span className="item-detail-value">
                        {this.props.selectedProject.project_due_date}
                    </span>
                </div>
                <div className="item-detail">
                    <span className="item-detail-label">Actual End Date:</span>
                    <span className="item-detail-value">
                        {this.props.selectedProject.project_end_date}
                    </span>
                </div>
            </div>
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