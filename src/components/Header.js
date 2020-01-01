import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { selectPage } from "../actions";
import "./Header.css";

class Header extends React.Component {
  render() {
    const selected = this.props.selectedPage;
    const projectClass = selected === "projects" ? "active" : "";
    const aboutClass = selected === "about" ? "active" : "";
    return (
      <div className="headerContainer">
        <div
          className={projectClass + " headerItem"}
          style={{ gridColumnStart: 4, gridColumnEnd: 5 }}
          onClick={() => this.props.selectPage("projects")}
        >
          <Link to="/projects">PROJECTS</Link>
        </div>
        <div
          className={aboutClass + " headerItem"}
          style={{ gridColumnStart: 5, gridColumnEnd: 6 }}
          onClick={() => this.props.selectPage("about")}
        >
          <Link to="/about">ABOUT + CONTACT</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { selectedPage: state.selectedPage };
};

export default connect(mapStateToProps, { selectPage })(Header);
