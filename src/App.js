import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import TasksPage from './containers/TasksPage';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <Route exact path="/tasks" render={() => (<TasksPage />) } />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;