import React, { Component } from 'react';
import data from '../data/data';
import ProjectSummary from '../components/ProjectSummary';

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
                            />
                        })}
                    </ul>
                </div>

                {console.log(this.state.selectedProject)}
            </React.Fragment>
        );
    }
}

export default ProjectsPage;