import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ProjectsPage from './containers/ProjectsPage';
import TasksPage from './containers/TasksPage';
import TeamMembersPage from './containers/TeamMembersPage';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="wrapper">
            <Header />
            <Switch>
              <Redirect exact from="/" to="/projects"/>
              <Route path="/projects" render={() => (<ProjectsPage />) }/>
              <Route path="/tasks" render={() => (<TasksPage />) }/>
              <Route path="/teammembers" render={() => (<TeamMembersPage />) }/>
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;