import React, { Component } from 'react';
import ProjectDetailsDisplay from './ProjectDetailsDisplay';
import EditProjectForm from './EditProjectForm';

class ProjectDetails extends Component {

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

    this.props.projects.map(project => (
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
    return this.props.teammembers.filter((member) => {
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
            teammembers={this.props.teammembers}
            handleProjectDetailsSave={this.handleProjectDetailsSave}
            handleProjectDetailsCancel={this.handleProjectDetailsCancel}
          />
          : <ProjectDetailsDisplay
            project={this.props.selectedProject}
            handleProjectDetailsEdit={this.handleProjectDetailsEdit}
            teammembers={this.props.teammembers}
            displayTeamMemberName={this.displayTeamMemberName}
          />}

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