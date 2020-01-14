import { combineReducers } from "redux";

const projectsReducer = (projects = {}) => {
  return {
    bandollective: {
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/eraincecom.appspot.com/o/bandollective-crop.jpg?alt=media&token=e8c642fd-642e-465f-a2f2-c001f3c3ae2a",
      title: "Bandollective",
      collaborator: "None",
      date: "01/05/2019",
      brief: "A network-based collective band performance",
      visual: "",
      video: "https://player.vimeo.com/video/383433776",
      keywords: "Tone.js, Node.js, Socket.io",
      diagram: "",
      goal:
        "Being inspired by the modern and digitalized lifestyle people are living where individuals are gradually disconnected from the environment, Bandollective is designed to provide the trigger/platform to initiate connections among people and also among people and the physical environment.Detailed documentation is  ",
      github: "https://github.com/Eraince/net-music",
      detailLink: ""
    },
    singletruth: {
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/eraincecom.appspot.com/o/singleTruth.gif?alt=media&token=7cfa57cd-ac39-4071-83bf-15fc4af42084",
      title: "SingleTruth",
      collaborator: "None",
      date: "01/08/2020",
      brief: "A web-based interactive 3D space with multi-camera",
      visual:
        "https://firebasestorage.googleapis.com/v0/b/eraincecom.appspot.com/o/single.gif?alt=media&token=facac406-e4cd-4d2f-8803-17e393b1c1de",
      keywords: "Three.js",
      diagram: "",
      goal:
        "Coding in 3D space provides a surprising opportunity to reflect on real life. When constructing a scene, what really determines how the screen looks like is not how the objects are arranged but where the camera is positioned. In real life, our eyes are those cameras which construct the reality in our mind. SingleTruth is posing the question of whether the single truth exists through this interactive experience. Actual experience is ",
      github: "https://github.com/Eraince/Single-Truth",
      detailLink: "https://eraince.github.io/"
    },
    cubi: {
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/eraincecom.appspot.com/o/Screen%20Shot%202020-01-01%20at%204.24.38%20PM.png?alt=media&token=f13ef32e-5a93-44f4-a616-5b9e9a8d57dc",
      title: "Cubi",
      collaborator: "Lan Zhang",
      date: "10/05/2019",
      brief: "A unity music player and visualizer.",
      visual:
        "https://firebasestorage.googleapis.com/v0/b/eraincecom.appspot.com/o/cubiGif.gif?alt=media&token=00d22bcc-a4db-4f71-bc66-3ce7234ea7df",
      keywords: "Unity",
      diagram: "",
      goal:
        "To explore 3d music visualizer, Cubi is aiming to create a fun and interactive experience as a music player. The customization of how the cubes are positioned and colored is trying to provide a stage-like performance where cubes are acting as dancers.The actual experience can be found ",
      github: "https://github.com/Eraince/Cubi",
      detailLink: ""
    }
  };
};

const pageReducer = (page = "", action) => {
  if (action.type === "PAGE_SELECTED") {
    return action.payload;
  }
  return page;
};

export default combineReducers({
  projects: projectsReducer,
  selectedPage: pageReducer
});
