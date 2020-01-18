import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import "./ProjectDetail.css";

class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  renderVisual(project) {
    if (project.visual !== "") {
      return (
        <div className="visual gridItem">
          <img src={this.props.selected.visual} alt="visual" />
        </div>
      );
    } else {
      return (
        <div className="visual gridItem">
          <iframe
            title={project.title}
            src={project.video}
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      );
    }
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

        <div className="projectTitle gridItem">{this.props.selected.title}</div>

        {this.renderVisual(this.props.selected)}
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
        <div className="diagram gridItem">
          <img src={this.props.selected.diagram} alt="visual" />
        </div>
        {/* <div className="pics gridItem">{this.props.selected.diagram}</div> */}

        <div className="goal gridItem">
          {this.props.selected.goal}
          <a
            href={this.props.selected.detailLink}
            style={{ color: "#137309" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            here.
          </a>
        </div>
        <div className="github gridItem">Github</div>
        <div className="link gridItem">
          <a
            href={this.props.selected.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.selected.github}
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  var selectedProject;
  var projectName = props.location.pathname.slice(9);
  Object.entries(state.projects).forEach(([key, value]) => {
    if (value.title === projectName) {
      selectedProject = value;
    }
  });

  return { selected: selectedProject };
};

export default connect(mapStateToProps)(ProjectDetail);
