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
      // editingProject: selectedProject,
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
    const {
      selectedProject
    } = this.props;

    return (
      <div className="details-sidebar">
        <h3>{selectedProject.project_name}</h3>

        {this.state.editProject
          ? <EditProjectForm
            statuses={this.props.statuses}
            project={selectedProject}
            teammembers={this.props.teammembers}
            handleProjectDetailsSave={this.handleProjectDetailsSave}
            handleProjectDetailsCancel={this.handleProjectDetailsCancel}
          />
          : <ProjectDetailsDisplay
            project={selectedProject}
            handleProjectDetailsEdit={this.handleProjectDetailsEdit}
            teammembers={this.props.teammembers}
            displayTeamMemberName={this.displayTeamMemberName}
          />}

      </div>
    );
  }
}

export default ProjectDetails;