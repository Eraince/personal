import { combineReducers } from "redux";

// const INITIAL_STATE = {
//   projects: [
//     { title: "Bandollective", description: "band" },
//     { title: "sonic Poem", description: "sonification" }
//   ],
//   selectedProject: null
// };

const projectsReducer = (projects = {}) => {
  return [
    { title: "Bandollective", description: "band" },
    { title: "sonic Poem", description: "sonification" }
  ];
};

const detailReducer = (selectedProject = null, action) => {
  if (action.type === "PROJECT_SELECTED") {
    return action.payload;
  }

  return selectedProject;
};

const pageReducer = (page = "projects", action) => {
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
