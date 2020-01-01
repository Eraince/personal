import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Intro from "./Intro";

import "./App.css";
import ProjectList from "./ProjectList";
import ProjectDetail from "./ProjectDetail";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={ProjectList} />
        <Route path="/about" exact component={Intro} />
        <Route path="/projects" exact component={ProjectList} />
        <Route path="/project" exact component={ProjectDetail} />
      </BrowserRouter>
      <Footer />
    </div>
  );
};
export default App;
