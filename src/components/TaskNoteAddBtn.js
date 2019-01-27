import React, { Component } from 'react';

class TaskNoteAddBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="form-buttons btn-add-task">
        <button
          type="button"
          onClick={this.props.handleTaskNoteAdd}
        >
          Add Note
        </button>
      </div>
    );
  }
}

export default TaskNoteAddBtn;