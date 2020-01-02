import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  render() {
    return (
      <div>
        <Link to="/projects">
          <div>
            <h3>Return</h3>
          </div>
        </Link>
        <div>
          <h4>{this.props.selected.title}</h4>
          <h4>{this.props.selected.description}</h4>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { selected: state.selectedProject };
};

export default connect(mapStateToProps)(ProjectDetail);
