import React from "react";
import * as THREE from "three";
import "./Intro.css";

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.addThree();
  }

  addThree = () => {
    var sceneBackground = new THREE.Color(1, 1, 1);
    var scene = new THREE.Scene();
    scene.background = sceneBackground;
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(
      this.canvasRef.current.clientWidth,
      this.canvasRef.current.clientHeight
    );

    this.canvasRef.current.appendChild(renderer.domElement);
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;
    var animate = function() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  };
  render() {
    return (
      <div className="aboutContainer">
        <div className="name gridItem bold">Name</div>
        <div className="cn gridItem">Chinese</div>
        <div className="cnName gridItem">王培羽</div>
        <div className="en gridItem">English</div>
        <div className="enName gridItem">Eraince Wang</div>

        {/* portrait renderer */}
        <div className="portrait" ref={this.canvasRef}></div>
        {/* ------------------------------------- */}

        <div className="title gridItem bold">Title</div>
        <div className="job gridItem">Creative Technologist</div>
        <div className="about gridItem bold">About</div>
        <div className="brief gridItem">
          As a creative technologist, what I love about it is being able to
          create the magic and joyful moment. I believe technology is the
          extension of humanity and I am passionate about seeking every possible
          approach to creating inspiring and sincere experiences. FYI, I’m
          addicted to humor and broccoli.
        </div>
        <div className="favorite gridItem bold"></div>
        <div className="quote gridItem">
          “We carry our homes within us which enables us to fly.”
        </div>
        <div className="contact">
          <div
            className="gridItem bold"
            style={{ gridRowStart: 1, gridRowEnd: 5 }}
          >
            Contact
          </div>
          <div className="gridItem">
            <a href="mailto: peiyu.wang@newschool.edu">
              peiyu.wang@newschool.edu
            </a>
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
  }
}

export default Intro;
