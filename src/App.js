import React, { Component } from 'react';
import './App.css';
import TasksPage from './containers/TasksPage';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <TasksPage />
      </div>
    );
  }
}

export default App;