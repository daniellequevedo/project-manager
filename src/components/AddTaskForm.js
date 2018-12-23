import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

class AddTaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            task_name: '',
        }
    }

    handleInputChange = e => {

    }

    handleSubmit = e => {

    }

    handleReset = () => {

    }

    render() {
        return (
            <div className={`modal` + `${this.props.displayModal ? ` show` : ``}`}>
                <div className="modal-content">
                    <h2>Add Task</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="item-detail-group">
                            <div className="item-detail">
                                <label className="item-detail-label">Task Name:</label>
                                <div className="item-detail-value">
                                    <input 
                                        type="text"
                                        name="task_name"
                                        onChange={this.handleInputChange}
                                        value={this.state.task_name}
                                        className="item-detail-input"
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddTaskForm;