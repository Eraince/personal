import { combineReducers } from "redux";

const projectsReducer = (projects = {}) => {
  return [
    {
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/eraincecom.appspot.com/o/bandollective-crop.jpg?alt=media&token=e8c642fd-642e-465f-a2f2-c001f3c3ae2a",
      title: "Bandollective",
      brief: "A network-based collective band performance",
      keywords: "Tone.js, Node.js, Socket.io"
    },
    {
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/eraincecom.appspot.com/o/Screen%20Shot%202020-01-01%20at%204.24.38%20PM.png?alt=media&token=f13ef32e-5a93-44f4-a616-5b9e9a8d57dc",
      title: "Cubi",
      brief: "A unity music player and visualizer.",
      keywords: "Unity"
    },
    {
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/eraincecom.appspot.com/o/Screen%20Shot%202020-01-01%20at%204.24.38%20PM.png?alt=media&token=f13ef32e-5a93-44f4-a616-5b9e9a8d57dc",
      title: "Cubi",
      brief: "A unity music player and visualizer.",
      keywords: "Unity"
    },
    {
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/eraincecom.appspot.com/o/Screen%20Shot%202020-01-01%20at%204.24.38%20PM.png?alt=media&token=f13ef32e-5a93-44f4-a616-5b9e9a8d57dc",
      title: "Cubi",
      brief: "A unity music player and visualizer.",
      keywords: "Unity"
    }
  ];
};

const detailReducer = (selectedProject = null, action) => {
  if (action.type === "PROJECT_SELECTED") {
    return action.payload;
  }

  return selectedProject;
};

const pageReducer = (page = "", action) => {
  if (action.type === "PAGE_SELECTED") {
    return action.payload;
  }
  return page;
};

export default combineReducers({
  projects: projectsReducer,
  selectedProject: detailReducer,
  selectedPage: pageReducer
});
