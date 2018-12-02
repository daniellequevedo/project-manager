import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import ProjectsPage from './containers/ProjectsPage';
import TasksPage from './containers/TasksPage';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <Switch>
            <Route exact path="/tasks" render={() => (<TasksPage />) }/>
            <Route path="/" render={() => (<ProjectsPage />) }/>
            <Route exact path="/projects" render={() => (<ProjectsPage />) }/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;