import { combineReducers } from "redux";

const projectsReducer = (projects = {}) => {
  return {
    bandollective: {
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/eraincecom.appspot.com/o/bandollective-crop.jpg?alt=media&token=e8c642fd-642e-465f-a2f2-c001f3c3ae2a",
      title: "Bandollective",
      collaborator: "None",
      date: "05/01/2019",
      brief: "A network-based collective band performance",
      visual: "",
      video: "https://player.vimeo.com/video/383433776",
      keywords: "Tone.js, Node.js, Socket.io",
      diagram:
        "https://firebasestorage.googleapis.com/v0/b/eraincecom.appspot.com/o/bandollective-diagram.png?alt=media&token=1145b787-500c-49c7-86f8-1b1d40adbf72",
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
      diagram:
        "https://firebasestorage.googleapis.com/v0/b/eraincecom.appspot.com/o/single-diagram.png?alt=media&token=ec51a4a4-7d73-4e73-a1eb-6734bf17b69f",
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
      date: "05/10/2019",
      brief: "A unity music player and visualizer.",
      visual:
        "https://firebasestorage.googleapis.com/v0/b/eraincecom.appspot.com/o/cubiGif.gif?alt=media&token=00d22bcc-a4db-4f71-bc66-3ce7234ea7df",
      keywords: "Unity",
      diagram:
        "https://firebasestorage.googleapis.com/v0/b/eraincecom.appspot.com/o/cubi-diagram.png?alt=media&token=74f40312-a72b-4065-a73a-fab6bac20f65",
      goal:
        "To explore 3d music visualizer, Cubi is aiming to create a fun and interactive experience as a music player. The customization of how the cubes are positioned and colored is trying to provide a stage-like performance where cubes are acting as dancers.The actual experience can be found ",
      github: "https://github.com/Eraince/Cubi",
      detailLink: ""
    },
    firebaseDorkshop: {
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/eraincecom.appspot.com/o/firebase.gif?alt=media&token=d6687375-eed4-4bc1-8335-d595d081419f",
      title: "Firebase Dorkshop",
      collaborator: "None",
      date: "03/01/2019",
      brief:
        "A step by step dorkshop of integrating firebase in web app to store data.",
      visual:
        "https://firebasestorage.googleapis.com/v0/b/eraincecom.appspot.com/o/firebase.gif?alt=media&token=d6687375-eed4-4bc1-8335-d595d081419f",
      keywords: "Firebase, Javascript",
      diagram:
        "https://firebasestorage.googleapis.com/v0/b/eraincecom.appspot.com/o/firebase-diagram.png?alt=media&token=4be5fce3-cd8e-41fd-8214-44b89dcc1fb6",
      goal:
        "This dorkshop is designed to be an introduction of how to integrate Google Firebase into web app.The demo is built to provide a example case of using Firebase when working with data storage.The dorkshop post can be found ",
      github: "https://github.com/Eraince/firebase-pic-json",
      detailLink:
        "https://medium.com/@wangp701/how-to-build-a-drawing-web-app-with-firebase-storage-8811da7d2a48"
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
