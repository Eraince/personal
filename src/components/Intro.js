import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="aboutContainer">
      <div className="name gridItem">Name</div>
      <div className="cn gridItem">Chinese</div>
      <div className="cnName gridItem">王培羽</div>
      <div className="en gridItem">English</div>
      <div className="enName gridItem">Eraince</div>
      <div className="portrait gridItem">Eraince</div>

      <div className="title gridItem">Title</div>
      <div className="job gridItem">Creative Technologist</div>
      <div className="about gridItem">About</div>
      <div className="brief gridItem">
        As a creative technologist, what I love about it is being able to create
        the magic and joyful moment. I believe technology is the extension of
        humanity and I am passionate about seeking every possible approach to
        creating inspiring and sincere experiences. FYI, I’m addicted to humor
        and broccoli.
      </div>
      <div className="favorite gridItem">Favorite Quote</div>
      <div className="quote gridItem">
        “We carry our homes within us which enables us to fly.”
      </div>
      <div className="contact">
        <div className="gridItem" style={{ gridRowStart: 1, gridRowEnd: 5 }}>
          Contact
        </div>
        <div className="gridItem">
          <a href="mailto: peiyu.wang@newschool.edu">email</a>
        </div>

        <div className="gridItem">
          <a href="https://github.com/Eraince">github</a>
        </div>
        <div className="gridItem">
          <a href="https://www.linkedin.com/in/peiyu-wang/">LinkedIn</a>
        </div>
        <div className="gridItem">
          <a href="https://medium.com/@wangp701">medium</a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
