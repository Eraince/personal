import React from "react";
import { connect } from "react-redux";
import { selectProject } from "../actions";
import { Link } from "react-router-dom";

class ProjectList extends React.Component {
  renderList() {
    return this.props.projects.map(project => {
      return (
        <div onClick={() => this.props.selectProject(project)}>
          <Link to="/project">
            <div>{project.title}</div>
            <div>{project.description}</div>
          </Link>
        </div>
      );
    });
  }
  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { projects: state.projects };
};

export default connect(mapStateToProps, { selectProject })(ProjectList);
