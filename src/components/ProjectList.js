import React from "react";
import { connect } from "react-redux";
import { selectProject } from "../actions";
import { Link } from "react-router-dom";

import "./ProjectList.css";

class ProjectList extends React.Component {
  renderList() {
    return Object.values(this.props.projects).map(project => {
      return (
        <div className="projectRow">
          <div className="gridItem thumbnail">
            <img src={project.thumbnail} alt="thumbnail" />
          </div>
          <div
            className="gridItem"
            onClick={() => this.props.selectProject(project)}
          >
            <Link to={`/project/${project.title}`}>
              <div>{project.title}</div>
            </Link>
          </div>
          <div className="gridItem">
            <div>{project.brief}</div>
          </div>
          <div className="gridItem">
            <div>{project.keywords}</div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="listContainer">
        <div className="gridItem key pic">Thumbnail</div>
        <div className="gridItem key">Project Name</div>
        <div className="gridItem key">Brief</div>
        <div className="gridItem key">Technical Keywords</div>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { projects: state.projects };
};

export default connect(mapStateToProps, { selectProject })(ProjectList);
