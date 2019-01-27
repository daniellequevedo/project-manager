import React, { Component } from 'react';
import TaskNoteAddBtn from './TaskNoteAddBtn';
import TaskNoteForm from './TaskNoteForm';

class TaskNotesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task_notes_mode: "display",
    }
  }

  handleTaskNoteAdd = () => {
    this.setState({task_notes_mode: "add"});
  }

  handleTaskNoteAddCancel = () => {
    this.setState({task_notes_mode: "display"});
  }
  
  render() {
    return (
      <React.Fragment>
        {this.state.task_notes_mode === "display" && 
          <TaskNoteAddBtn 
            task_notes_mode={this.state.task_notes_mode}
            handleTaskNoteAdd={this.handleTaskNoteAdd}
          />
        }
        {this.state.task_notes_mode === "add" && 
          <TaskNoteForm 
            task_id={this.props.task_id} 
            task_notes_mode={this.state.task_notes_mode}
            handleTaskNoteAddCancel={this.handleTaskNoteAddCancel}
            />
          }
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