import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { Language } from "../../../context/LanguageContext";

import leftArrow from "../../../assets/leftArrow.svg";
import diagonalArrow from "../../../assets/diagonalArrow.svg";

import languageIcon from "../../../assets/header/languageIcon.svg";

import HeaderStyles from "./styles";

import { Project } from "../../../pages/Project";

interface HeaderProps {
  project: Project;
}

function Header({ project }: HeaderProps) {
  const navigate = useNavigate();

  const { language, changeLanguage } = useContext(Language);

  return (
    <HeaderStyles>
      <div className="top">
        <button className="left" onClick={() => navigate("/")}>
          <img src={leftArrow} alt="Back" width={12} />
        </button>
        <div className="right">
          <button onClick={changeLanguage}>
            <img src={languageIcon} alt="Current Language" width={20} />
          </button>
        </div>
      </div>
      <div className="info">
        <h1>{project?.title}</h1>

        <span className="external">
          <a href={project?.code} target={"_blank"}>
            <h3>
              {language === "en" ? "Code" : "Código"}
              <img src={diagonalArrow} alt="External Link" width={12} />
            </h3>
          </a>
          <a href={project?.demo} target={"_blank"}>
            <h3>
              {language === "en" ? "Test it out" : "Demonstração"}
              <img src={diagonalArrow} alt="External Link" width={12} />
            </h3>
          </a>
        </span>
      </div>
    </HeaderStyles>
  );
}

export default Header;
