import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProject } from '../actions';
import data from '../data/data';

import ProjectSummary from '../components/ProjectSummary';
import ProjectDetails from '../components/ProjectDetails';
import AddProjectForm from '../components/AddProjectForm';
import { join } from 'path';

// how do i receive projects from App.js? Does this need to be a functional component?
class ProjectsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: this.props.projects,
            selectedProject: null,
            addProject: false,
        }
    }
    handleDisplayProjectDetails = (project_id) => {
        let selectedProject = data.filter ( (project) => {
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
        console.log("projects = ", data);
        data.push(savedProject);
        this.setState({addProject: false});
        console.log("projects = ", data);
    }

    handleDsplayAddProjectForm = () => {
        this.setState({addProject: true});
    }

    handleCancelAddProjectForm = () => {
        this.setState({addProject: false});
    }

    render() {
        return (
            <React.Fragment>
                <button className="btn-display-add-modal" onClick={this.handleDsplayAddProjectForm} >
                    Add Project
                </button>
                <div className={`summaries-list projects` + `${this.state.selectedProject ? ` sidebar-expanded` : ``}`}>
                    <div className="table-headers">
                        <h1>Projects</h1>
                    </div>
                    <ul className="list">
                        {data.map( (project) => {
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
                </div>

                {console.log("ProjectsPage.js: selectedProject: ", this.state.selectedProject)}
                {this.state.selectedProject && <ProjectDetails 
                    selectedProject={this.state.selectedProject}
                />}

                {console.log("this.props.projects[0] from App.js", this.state.projects)}

                <AddProjectForm 
                    handleAddProjectSave={this.handleAddProjectSave} 
                    handleCancelAddProjectForm={this.handleCancelAddProjectForm} 
                    displayModal={this.state.addProject} 
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