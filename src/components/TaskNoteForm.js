import React, { Component } from 'react';

class TaskNoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <form>
        <div className="item-detail-group task-note-form">
          <div className="item-detail full-width">
            <div className="form-buttons">
              <button 
                type="button"
                onClick={this.props.handleTaskNoteAddCancel}
              >
                Cancel
              </button>
              <button type="submit">Save</button>
            </div>
            <div className="item-detail-value paragraph">
              <textarea
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