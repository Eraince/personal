import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import "./ProjectDetail.css";

class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  render() {
    return (
      <div className="detailContainer">
        <div className="return gridItem">
          <Link to="/projects">
            <div>Return</div>
          </Link>
        </div>
        <div className="pname gridItem">Project Name</div>

        <div className="name gridItem">{this.props.selected.title}</div>
        <div className="visual gridItem">Visual</div>
        <div className="col gridItem">Collaborator</div>
        <div className="collaborator gridItem">
          {this.props.selected.collaborator}
        </div>
        <div className="time gridItem">Date Finished</div>
        <div className="date gridItem">{this.props.selected.date}</div>
        <div className="shortDescription gridItem">Brief</div>
        <div className="intro gridItem">{this.props.selected.brief}</div>

        <div className="word gridItem">Technical Keywords</div>
        <div className="keys gridItem">{this.props.selected.keywords}</div>
        <div className="diagram gridItem">Technical Diagram</div>
        <div className="pics gridItem">{this.props.selected.diagram}</div>
        <div className="goal gridItem">Goal</div>
        <div className="goalDetail gridItem">{this.props.selected.goal}</div>
        <div className="github gridItem">Github</div>
        <div className="link gridItem">{this.props.selected.github}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  var selectedProject;
  var projectName = props.location.pathname.slice(9).toLowerCase();
  Object.entries(state.projects).forEach(([key, value]) => {
    if (key === projectName) {
      selectedProject = value;
    }
  });

  return { selected: selectedProject };
};

export default connect(mapStateToProps)(ProjectDetail);
