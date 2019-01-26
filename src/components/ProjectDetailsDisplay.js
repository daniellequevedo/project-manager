import React, { Component } from 'react';

class ProjectDetailsDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="form-buttons flex-end">
          <button
            className="edit-details"
            onClick={this.props.handleProjectDetailsEdit}>
            Edit
                    </button>
        </div>
        <div className="item-detail-group">
          <div className="item-detail">
            <span className="item-detail-label">Status:</span>
            <span className={`item-detail-value status ${this.props.project.project_status}`}>
              {this.props.project.project_status.replace(/-/g, ' ')}
            </span>
          </div>
        </div>
        <div className="item-detail-group">
          <div className="item-detail">
            <span className="item-detail-label">Category:</span>
            <span className="item-detail-value long-text">
              {this.props.project.project_category}
            </span>
          </div>
        </div>
        <div className="item-detail-group">
          <div className="item-detail">
            <span className="item-detail-label">Due Date:</span>
            <span className="item-detail-value">
              {this.props.project.project_due_date}
            </span>
          </div>
          <div className="item-detail">
            <span className="item-detail-label">Actual End Date:</span>
            <span className="item-detail-value">
              {this.props.project.project_end_date}
            </span>
          </div>
        </div>

        <div className="item-detail-group">
          <div className="item-detail">
            <span className="item-detail-label">Assigned To:</span>
            <span className="item-detail-value long-text">
              {this.props.displayTeamMemberName(this.props.project.project_assigned_to)}
            </span>
          </div>
          <div className="item-detail">
            <span className="item-detail-label">Assigned By:</span>
            <span className="item-detail-value long-text">
              {this.props.displayTeamMemberName(this.props.project.project_assigned_by)}
            </span>
          </div>
        </div>

        <div className="item-detail-group">
          <div className="item-detail">
            <span className="item-detail-label">Resource Link:</span>
            <span className="item-detail-value long-text link">
              {this.props.project.project_resource_link}
            </span>
            {this.props.project.project_resource_link
              ? <a href={this.props.project.project_resource_link} target="_blank">
                <button>
                  >
                </button>
              </a>
              : null
            }
          </div>
          <div className="item-detail">
            <span className="item-detail-label">Project Link:</span>
            <span className="item-detail-value long-text link">
              {this.props.project.project_final_link}
            </span>
            {this.props.project.project_final_link
              ? <a href={this.props.project.project_final_link} target="_blank">
                <button>
                  >
                </button>
              </a>
              : null
            }
          </div>
        </div>

        <div className="item-detail-group">
          <div className="item-detail full-width">
            <span className="item-detail-label">Description:</span>
            <span className="item-detail-value paragraph">
              {this.props.project.project_description}
            </span>
          </div>
        </div>
        <div className="item-detail-group">
          <div className="item-detail full-width">
            <span className="item-detail-label">Notes:</span>
            <span className="item-detail-value paragraph">
              {this.props.project.project_notes}
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProjectDetailsDisplay;