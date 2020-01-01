export const selectProject = project => {
  return {
    type: "PROJECT_SELECTED",
    payload: project
  };
};

export const selectPage = page => {
  return {
    type: "PAGE_SELECTED",
    payload: page
  };
};
