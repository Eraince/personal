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
        <div style={{ gridColumnStart: 2, gridColumnEnd: 3 }}>
          {/* <img
            src="icon.png"
            alt="icon"
            style={{ width: 60, textAlign: `center` }}
          /> */}
        </div>
        <div
          className="headerItem"
          style={{ gridColumnStart: 4, gridColumnEnd: 5 }}
        >
          <p
            className={projectClass}
            onClick={() => this.props.selectPage("projects")}
          >
            <Link to="/projects">Projects</Link>
          </p>
        </div>
        <div
          className="headerItem"
          style={{ gridColumnStart: 5, gridColumnEnd: 6 }}
        >
          <p
            className={aboutClass + " wrapper"}
            onClick={() => this.props.selectPage("about")}
          >
            <Link to="/about">About + Contact</Link>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  var location = window.location.pathname.slice(1);
  if (location.includes("project") || location === "") {
    location = "projects";
  }
  return { selectedPage: location };
};

export default connect(mapStateToProps, { selectPage })(Header);
