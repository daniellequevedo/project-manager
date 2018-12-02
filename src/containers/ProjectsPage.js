import React, { Component } from 'react';
import data from '../data/data';

class ProjectsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProject: null
        }
    }
    handleDisplayProjectDetails = () => {

    }
    render() {
        return (
            <React.Fragment>
                <div className={`summaries-list` + `${this.state.selectedProject ? ` sidebar-expanded` : ``}`}>
                    <div className="table-headers">
                        <h1>Projects</h1>
                    </div>
                    <ul className="list">
                        <li>VS Code</li>
                        <li>Git</li>
                        <li>Tic-Tac-Toe</li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default ProjectsPage;