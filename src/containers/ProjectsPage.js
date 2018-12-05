import React, { Component } from 'react';
import data from '../data/data';
import ProjectSummary from '../components/ProjectSummary';
import ProjectDetails from '../components/ProjectDetails';
import AddProjectForm from '../components/AddProjectForm';

class ProjectsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProject: null
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
    render() {
        return (
            <React.Fragment>
                <a href="#modal-add-project"><button className="btn-display-add-modal">Add Project</button></a>
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

                {console.log(this.state.selectedProject)}
                {this.state.selectedProject && <ProjectDetails 
                    selectedProject={this.state.selectedProject}
                />}

                <AddProjectForm />
            </React.Fragment>
        );
    }
}

export default ProjectsPage;