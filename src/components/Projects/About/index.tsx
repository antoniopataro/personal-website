import React, { useContext } from "react";

import { Language } from "../../../context/LanguageContext";

import AboutStyles from "./styles";

import { Project } from "../../../pages/Project";

interface AboutProps {
  project: Project;
}

function About({ project }: AboutProps) {
  const { language } = useContext(Language);

  return (
    <AboutStyles>
      <h2>{language === "en" ? "About this project" : "Sobre esse projeto"}</h2>
      <h3 dangerouslySetInnerHTML={{ __html: language === "en" ? project?.about.en : project?.about.br }}></h3>
    </AboutStyles>
  );
}

export default About;
