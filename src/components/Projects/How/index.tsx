import React, { useContext } from "react";

import { Language } from "../../../context/LanguageContext";

import HowStyles from "./styles";

import { Project } from "../../../pages/Project";

interface HowProps {
  project: Project;
}

function How({ project }: HowProps) {
  const { language } = useContext(Language);

  return (
    <HowStyles>
      <h2>{language === "en" ? "How I did it" : "Como eu fiz"}</h2>
      <h3 dangerouslySetInnerHTML={{ __html: language === "en" ? project?.how.en : project?.how.br }}></h3>
    </HowStyles>
  );
}

export default How;
