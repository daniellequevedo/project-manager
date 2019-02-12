import React, { Component } from 'react';

class TaskNoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note_message: '',
    }
  }

  handleInputChange = e => {
    this.setState({
      project: {
        ...this.state.project,
        [e.target.name]: e.target.value
      }
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleTaskNoteAddSave(this.state.note_message);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="item-detail-group task-note-form">
          <div className="item-detail full-width">
            <div className="form-buttons">
              <button 
                type="button"
                onClick={this.props.handleTaskNoteAddCancel}
              >
                Cancel
              </button>
              <button 
                type="submit"
              >
                Save
              </button>
            </div>
            <div className="item-detail-value paragraph">
              <textarea
                name="note_message"
                onChange={this.handleInputChange}
                value={this.state.note_message}
                placeholder="enter text here"
                className="item-detail-input"
              >
              </textarea>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default TaskNoteForm;