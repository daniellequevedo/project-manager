import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

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

// export default App;

// the connect function's job is to hook up the store to the app.
// the store is being passed to the connect function.
// connect will then return a function.
// we then call that function and pass it the parameter App
export default connect( store => ({store}) )(App);