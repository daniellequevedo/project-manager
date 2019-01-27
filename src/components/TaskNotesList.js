import React, { Component } from 'react';

class TaskNotesList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="form-buttons task-notes-form-buttons">
          <button>Add Note</button>
        </div>
        <ul className="list">
        {this.props.notes.map((note) => {
          return <li 
              key={note.note_id}
              className="task-note"
            >
              <span className="task-note-author">{this.props.displayTeamMemberName(note.note_author_id)}</span>
              <span className="task-note-creation-date">{note.note_created_at}</span>
              <span className="task-note-message">{note.note_message}</span>
            </li>
        })}
        </ul>
      </React.Fragment>
    );
  }
}

export default TaskNotesList;