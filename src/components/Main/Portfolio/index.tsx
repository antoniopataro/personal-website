import React, { useContext } from "react";

import { Language } from "../../../context/LanguageContext";

import { Link } from "react-router-dom";

import diagonalArrow from "../../../assets/diagonalArrow.svg";

import PortfolioStyles from "./styles";

import projects from "../../../pages/Project/projects.json";

function Portfolio() {
  const { language } = useContext(Language);

  return (
    <PortfolioStyles>
      <h2>{language === "en" ? "Portfolio" : "Portfólio"}</h2>
      <div className="projects">
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <h3>
                <span style={{ color: "var(--gray)" }}>{project.year}</span>{" "}
                <Link to={"/projects/" + project.path}>{project.title}</Link>
              </h3>
            </li>
          ))}
        </ul>
        <a href="https://github.com/antoniopataro?tab=repositories" target={"_blank"}>
          {language === "en" ? "See more projects..." : "Ver mais projetos..."}

          <img src={diagonalArrow} alt="External Link" width={12} />
        </a>
      </div>
    </PortfolioStyles>
  );
}

export default Portfolio;
