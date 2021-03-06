import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProject } from '../actions';

import ProjectSummary from '../components/ProjectSummary';
import ProjectDetails from '../components/ProjectDetails';
import AddProjectForm from '../components/AddProjectForm';
import { join } from 'path';

class ProjectsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProject: null,
            addProject: false,
        }
    }
    handleDisplayProjectDetails = (project_id) => {
        let selectedProject = this.props.projects.filter ( (project) => {
            return project.project_id === project_id;
        })[0];
        if (selectedProject === this.state.selectedProject) {
            this.setState({selectedProject: null});
        } else {
            this.setState({selectedProject});
        }
    }
    handleAddProjectSave = (project) => {
        let savedProject = Object.assign(project, {project_tasks: []});
        console.log("project from AddProjectForm: ", savedProject);
        this.props.projects.push(savedProject);
        this.setState({addProject: false});
    }

    handleDisplayAddProjectForm = () => {
        this.setState({addProject: true});
    }

    handleCancelAddProjectForm = () => {
        this.setState({addProject: false});
    }

    getProjectsByStatus = (status) => {
        return this.props.projects.filter( ({project_status}) => {
            return project_status === status;
        });
    }

    render() {
        let statuses = [
            "in-consideration",
            "approved",
            "in-process",
            "complete"
        ];

        return (
            <React.Fragment>
                <button className="btn-display-add-modal" onClick={this.handleDisplayAddProjectForm} >
                    Add Project
                </button>
                <div className={`summaries-list projects` + `${this.state.selectedProject ? ` sidebar-expanded` : ``}`}>
                    <div className="table-headers">
                        <h1>Projects</h1>
                    </div>
                    {statuses.map( (status) => {
                        return (
                            <React.Fragment key={status}>
                            <h3 className="status">{status.replace(/-/g,' ')}</h3>
                            <ul className="list">
                                {this.getProjectsByStatus(status).map( (project) => {
                                    return <ProjectSummary 
                                        key={project.project_id}
                                        project={project}
                                        handleDisplayProjectDetails={this.handleDisplayProjectDetails}
                                        isSelected={
                                            this.state.selectedProject
                                            ? (project.project_id === this.state.selectedProject.project_id ? "selected" : null)
                                            : null
                                        }
                                    />
                                
                                })}
                            </ul>
                            </React.Fragment>
                        )
                    })}
                </div>

                {console.log("ProjectsPage.js: selectedProject: ", this.state.selectedProject)}
                {this.state.selectedProject && <ProjectDetails 
                    statuses={statuses}
                    selectedProject={this.state.selectedProject}
                    teammembers={this.props.teammembers}
                    projects={this.props.projects}
                />}

                <AddProjectForm 
                    handleAddProjectSave={this.handleAddProjectSave} 
                    handleCancelAddProjectForm={this.handleCancelAddProjectForm} 
                    displayModal={this.state.addProject} 
                    statuses={statuses}
                    teammembers={this.props.teammembers}
                />

            </React.Fragment>
        );
    }
}

export default ProjectsPage;

// the connect function's job is to hook up the store to the app.
// the store is being passed to the connect function.
// connect will then return a function.
// we then call that function and pass it the parameter ProjectsPage
// export default connect( store => ({store}) )(ProjectsPage);

// export default connect(
//     mapStateToProps, mapDispatchToProps   
// )(ProjectsPage);