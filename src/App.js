import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import ProjectsPage from './containers/ProjectsPage';
import TasksPage from './containers/TasksPage';
import TeamMembersPage from './containers/TeamMembersPage';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => (<ProjectsPage />) }/>
            <Route path="/projects" render={() => (<ProjectsPage />) }/>
            <Route path="/tasks" render={() => (<TasksPage />) }/>
            <Route path="/teammembers" render={() => (<TeamMembersPage />) }/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;