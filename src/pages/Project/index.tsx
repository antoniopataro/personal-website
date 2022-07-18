import React, { useEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import Header from "../../components/Projects/Header";
import About from "../../components/Projects/About";
import How from "../../components/Projects/How";

import demoDona from "../../assets/project-videos/demo-dona.mp4";
import demoECommerce from "../../assets/project-videos/demo-e-commerce.mp4";
import demoEmojiSearcher from "../../assets/project-videos/demo-emoji-searcher.mp4";
import demoEmSuma from "../../assets/project-videos/demo-em-suma.mp4";
import demoJSCalculator from "../../assets/project-videos/demo-js-calculator.mp4";
import demoTyperDev from "../../assets/project-videos/demo-typer-dev.mp4";
import demoUISnippets from "../../assets/project-videos/demo-ui-snippets.mp4";

import ProjectStyles from "./styles";

export interface Project {
  path: string;
  title: string;
  about: {
    br: string;
    en: string;
  };
  how: {
    br: string;
    en: string;
  };
  code: string;
  demo: string;
  year: string;
}

import projects from "./projects.json";

function Project() {
  const navigate = useNavigate();
  const location = useLocation();

  const path = location.pathname.split("/")[location.pathname.split("/").length - 1];
  const project = projects.find((project) => project.path === path);

  useEffect(() => {
    if (!projects.find((project) => project.path === path)) {
      navigate("/not-found");
      return;
    }
    return;
  }, []);

  const handleVideo = () => {
    switch (project?.path) {
      case "dona":
        return demoDona;
      case "e-commerce":
        return demoECommerce;
      case "emoji-searcher":
        return demoEmojiSearcher;
      case "em-suma":
        return demoEmSuma;
      case "js-calculator":
        return demoJSCalculator;
      case "typer-dev":
        return demoTyperDev;
      case "ui-snippets":
        return demoUISnippets;
      default:
        return "";
    }
  };

  return (
    <ProjectStyles>
      <Header project={project as Project} />
      <video className="video" autoPlay loop>
        <source src={handleVideo()} type="video/mp4" />
      </video>
      <About project={project as Project} />
      <How project={project as Project} />
    </ProjectStyles>
  );
}

export default Project;
