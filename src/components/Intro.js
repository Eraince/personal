import React from "react";
import * as THREE from "three";
import OrbitControls from "orbit-controls-es6";
import "./Intro.css";

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.contactRef = React.createRef();
    this.blankRef = React.createRef();
    this.mouseX = 0;
    this.mouseY = 0;
    this.sunglasses = [];
  }

  componentDidMount() {
    this.addThree();
  }

  onMousemove = e => {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;

    var top = this.contactRef.current.offsetTop;
    var left = this.contactRef.current.offsetLeft;
    var bottom = top + this.contactRef.current.offsetHeight;
    var right = left + this.contactRef.current.offsetWidth;

    if (
      this.mouseX >= left &&
      this.mouseX <= right &&
      this.mouseY >= top &&
      this.mouseY <= bottom
    ) {
      //console.log("here");
    }
  };
  addThree = () => {
    document.addEventListener("mousemove", this.onMousemove, false);

    // loader.load("resources/images/wall.jpg", texture => {
    //   const material = new THREE.MeshBasicMaterial({
    //     map: texture
    //   });
    //   const cube = new THREE.Mesh(geometry, material);
    //   scene.add(cube);
    //   cubes.push(cube); // add to our list of cubes to rotate
    // });

    var sceneBackground = new THREE.Color(1, 1, 1);
    var scene = new THREE.Scene();
    scene.background = sceneBackground;
    var camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 40;
    camera.position.y = 6;
    camera.lookAt(scene);
    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      this.canvasRef.current.clientWidth,
      this.canvasRef.current.clientHeight - 5
    );

    this.canvasRef.current.appendChild(renderer.domElement);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enabled = true;
    controls.maxDistance = 1500;
    controls.minDistance = 0;

    // add lighting

    {
      const color = 0xffffff;
      const intensity = 1;
      const light = new THREE.DirectionalLight(color, intensity);
      light.position.set(-1, 2, 4);
      scene.add(light);
    }

    {
      const color = 0x51eff5;
      const intensity = 1;
      const light = new THREE.DirectionalLight(color, intensity);
      light.position.set(1, -2, -4);
      scene.add(light);
    }

    // scene object

    const radiusTop = 5;
    const radiusBottom = 5;
    const height = 15;
    const radialSegments = 12;
    const geometry = new THREE.CylinderBufferGeometry(
      radiusTop,
      radiusBottom,
      height,
      radialSegments
    );

    var material = new THREE.MeshPhongMaterial({
      color: 0x99c359,
      flatShading: true
    });
    var face = new THREE.Mesh(geometry, material);
    face.position.set(0, -3, 0);
    scene.add(face);

    // -----------------------------

    var radius1 = 4;
    var hair1 = new THREE.Mesh(
      new THREE.IcosahedronBufferGeometry(radius1, 1),
      new THREE.MeshPhongMaterial({
        color: 0x137309,
        flatShading: true
      })
    );
    hair1.position.y = 7;
    scene.add(hair1);

    // ----------------------------

    var radius2 = 5;
    var hair2 = new THREE.Mesh(
      new THREE.IcosahedronBufferGeometry(radius2, 1),
      new THREE.MeshPhongMaterial({
        color: 0x137309,
        flatShading: true
      })
    );
    hair2.position.x = -5;
    hair2.position.y = 7;
    hair2.rotation.z = -50;
    scene.add(hair2);

    // -----------------------------
    var radius3 = 6;
    var hair3 = new THREE.Mesh(
      new THREE.IcosahedronBufferGeometry(radius3, 1),
      new THREE.MeshPhongMaterial({
        color: 0x137309,
        flatShading: true
      })
    );
    hair3.position.set(5, 7, 0);
    hair3.rotation.set(0, 10, 40);
    scene.add(hair3);

    // -----------------------------
    var radius4 = 3;
    var hair4 = new THREE.Mesh(
      new THREE.IcosahedronBufferGeometry(radius4, 1),
      new THREE.MeshPhongMaterial({
        color: 0x137309,
        flatShading: true
      })
    );
    hair4.position.set(0, 6, 6);
    hair4.rotation.set(0, 10, 40);
    scene.add(hair4);

    // ---------------
    var radius5 = 4;
    var hair5 = new THREE.Mesh(
      new THREE.IcosahedronBufferGeometry(radius5, 1),
      new THREE.MeshPhongMaterial({
        color: 0x137309,
        flatShading: true
      })
    );
    hair5.position.set(0, 6, -6);
    hair5.rotation.set(0, 10, 40);
    scene.add(hair5);

    // ----------------

    // suglasses

    const loader = new THREE.TextureLoader();
    loader.load("white-heart.png", texture => {
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.magFilter = THREE.NearestFilter;
      // texture.repeat.set(8, 8);
      var glassLeft = new THREE.Mesh(
        new THREE.BoxBufferGeometry(50, 50, 1),
        new THREE.MeshPhongMaterial({
          color: 0xffffff,
          map: texture
        })
      );
      glassLeft.position.set(-4, 1, 6);
      this.sunglasses.push(glassLeft);
      scene.add(glassLeft);
    });
    // var glassLeft = new THREE.Mesh(
    //   new THREE.BoxBufferGeometry(6, 2.5, 1),
    //   new THREE.MeshBasicMaterial({
    //     // color: 0x000000,
    //     map: texture
    //   })
    // );
    // glassLeft.position.set(-4, 1, 6);
    // this.sunglasses.push(glassLeft);
    // scene.add(glassLeft);

    var glassRight = new THREE.Mesh(
      new THREE.BoxBufferGeometry(6, 2.5, 1),
      new THREE.MeshPhongMaterial({
        color: 0x000000
      })
    );
    glassRight.position.set(4, 1, 6);
    this.sunglasses.push(glassRight);
    scene.add(glassRight);

    // --------mouth------

    const radius = 3;
    const tubeRadius = 0.5;
    const tubularSegments = 12;

    var mouth = new THREE.Mesh(
      new THREE.TorusBufferGeometry(
        radius,
        tubeRadius,
        4,
        tubularSegments,
        Math.PI * 0.75
      ),
      new THREE.MeshPhongMaterial({
        color: 0x000000
      })
    );
    mouth.position.set(0, -2, 6);
    mouth.rotation.set(0, 0, 60);
    scene.add(mouth);
    // ------------------

    var animate = function() {
      requestAnimationFrame(animate);
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
        <div className="favorite gridItem bold" ref={this.blankRef}></div>
        <div className="quote gridItem">
          “Care(for self, others, and the world) can be structured into the
          design of tools and eqiupment through 'presencing'.”
        </div>
        <div className="contact" ref={this.contactRef}>
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
            <a
              href="https://github.com/Eraince"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
          </div>
          <div className="gridItem">
            <a
              href="https://www.linkedin.com/in/peiyu-wang/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className="gridItem">
            <a
              href="https://medium.com/@wangp701"
              target="_blank"
              rel="noopener noreferrer"
            >
              medium
            </a>
          </div>
        </div>
        <div className="resume">
          <div className="gridItem bold">Resume</div>
          <div className="gridItem"></div>
        </div>
      </div>
    );
  }
}

export default Intro;
