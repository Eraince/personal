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
          <img
            src={this.props.selected.visual}
            alt="visual"
            // style={{ width: 500 }}
          />
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

        <div className="name gridItem">{this.props.selected.title}</div>

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
        <div className="diagram gridItem">Technical Diagram</div>
        <div className="pics gridItem">{this.props.selected.diagram}</div>

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
  var projectName = props.location.pathname.slice(9).toLowerCase();
  Object.entries(state.projects).forEach(([key, value]) => {
    if (key === projectName) {
      selectedProject = value;
    }
  });

  return { selected: selectedProject };
};

export default connect(mapStateToProps)(ProjectDetail);

/* <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/383433776" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
<p><a href="https://vimeo.com/383433776">Bandollective - A network-based collective band performance</a> from <a href="https://vimeo.com/user89153756">Eraince</a></p> */
