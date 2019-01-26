import React, { Component } from 'react';

class EditProjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: this.props.project
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
    console.log(`this.state.project: `, this.state.project);
    this.props.handleProjectDetailsSave(this.state.project);
  }

  handleCancel = () => {
    this.setState({
      project: this.props.project
    });

    this.props.handleProjectDetailsCancel();
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="form-buttons">
            <button
              onClick={this.handleCancel}
              type="button">
              Cancel
                        </button>
            <button
              className="edit-details"
              type="submit">
              Save
                        </button>
          </div>
          <div className="item-detail-group">
            <div className="item-detail">
              <label className="item-detail-label">Status:</label>
              <div className="item-detail-value">
                <select
                  value={this.state.project.project_status}
                  onChange={this.handleInputChange}
                  name="project_status"
                  className="item-detail-input"
                >
                  {this.props.statuses.map((status) => {
                    return (
                      <option
                        key={status}
                        value={status}
                        className="status"
                      >
                        {status.replace(/-/g, ' ')}
                      </option>
                    )
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="item-detail-group">
            <div className="item-detail">
              <label className="item-detail-label">Category:</label>
              <div className="item-detail-value">
                <input
                  type="text"
                  name="project_category"
                  onChange={this.handleInputChange}
                  value={this.state.project.project_category}
                  className="item-detail-input"
                />
              </div>
            </div>
          </div>

          <div className="item-detail-group">
            <div className="item-detail">
              <label className="item-detail-label">Due Date:</label>
              <input
                type="text"
                name="project_due_date"
                onChange={this.handleInputChange}
                value={this.state.project.project_due_date}
                className="item-detail-input"
              />
            </div>
            <div className="item-detail">
              <label className="item-detail-label">Actual End Date:</label>
              <input
                type="text"
                name="project_end_date"
                onChange={this.handleInputChange}
                value={this.state.project.project_end_date}
                className="item-detail-input"
              />
            </div>
          </div>

          <div className="item-detail-group">
            <div className="item-detail">
              <label className="item-detail-label">Assigned To:</label>

              <div className="item-detail-value">
                <select
                  value={this.state.project.project_assigned_to}
                  onChange={this.handleInputChange}
                  name="project_assigned_to"
                  className="item-detail-input"
                >
                  {this.props.teammembers.map((member) => {
                    return (
                      <option
                        key={member.member_id}
                        value={member.member_id}
                      >
                        {member.member_name}
                      </option>
                    )
                  })}
                </select>
              </div>
            </div>
            <div className="item-detail">
              <label className="item-detail-label">Assigned By:</label>
              <div className="item-detail-value">
                <select
                  value={this.state.project.project_assigned_by}
                  onChange={this.handleInputChange}
                  name="project_assigned_by"
                  className="item-detail-input"
                >
                  {this.props.teammembers.map((member) => {
                    return (
                      <option
                        key={member.member_id}
                        value={member.member_id}
                      >
                        {member.member_name}
                      </option>
                    )
                  })}
                </select>
              </div>
            </div>
          </div>

          <div className="item-detail-group">
            <div className="item-detail">
              <label className="item-detail-label">Resource Link:</label>
              <input
                type="text"
                name="project_resource_link"
                onChange={this.handleInputChange}
                value={this.state.project.project_resource_link}
                className="item-detail-input long-text link"
              />
            </div>
            <div className="item-detail">
              <label className="item-detail-label">Project Link:</label>
              <input
                type="text"
                name="project_final_link"
                onChange={this.handleInputChange}
                value={this.state.project.project_final_link}
                className="item-detail-input long-text link"
              />
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default EditProjectForm;