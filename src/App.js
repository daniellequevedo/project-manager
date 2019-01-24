import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import ProjectsPage from './containers/ProjectsPage';
import TasksPage from './containers/TasksPage';
import TeamMembersPage from './containers/TeamMembersPage';

import data from './data/data';
import teammembers from './data/teammembers';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="wrapper">
            <Header />
            <Switch>
              <Redirect exact from="/" to="/projects"/>
              <Route path="/projects" render={() => (<ProjectsPage projects={data} teammembers={teammembers} />) }/>
              <Route path="/tasks" render={() => (<TasksPage projects={data} teammembers={teammembers} />) }/>
              <Route path="/teammembers" render={() => (<TeamMembersPage projects={data} teammembers={teammembers} />) }/>
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state
  }
}

// export default App;

export default connect(
  mapStateToProps
)(App);