import React, { useContext } from "react";
import { ThemeContext } from "../../App";

import eCommerceIcon from "../../assets/projects-icons/eCommerceIcon.png";
import typerDevIcon from "../../assets/projects-icons/typerDevIcon.png";
import toDoListIcon from "../../assets/projects-icons/toDoListIcon.png";
import emojiSearcherIcon from "../../assets/projects-icons/emojiSearcherIcon.png";
import personalWebsiteIcon from "../../assets/projects-icons/personalWebsiteIcon.png";
import uiSnippetsIcon from "../../assets/projects-icons/uiSnippetsIcon.png";

import externalIcon from "../../assets/externalIcon.svg";

import PortfolioStyles from "./styles";

function Portfolio() {
  const { theme } = useContext(ThemeContext);

  return (
    <PortfolioStyles id="portfolio" theme={theme}>
      <div id="section-title">
        <h2>Portfolio</h2>
        <h4>Click on a project to test it out.</h4>
      </div>
      <div id="projects-wrapper">
        <div className="project">
          <a target="_blank" href="https://e-commerce-antoniopataro.vercel.app/" className="project-icon">
            <img src={eCommerceIcon} alt="E-Commerce Icon" width={40} />
          </a>
          <div className="project-info">
            <h3>E-Commerce</h3>
            <a target="_blank" href="https://github.com/antoniopataro/e-commerce">
              <h4>Code</h4>
              <img src={externalIcon} alt="Project's Repository" width={12} />
            </a>
          </div>
        </div>
        <div className="project">
          <a target="_blank" href="https://antoniopataro.github.io/typer-dev/" className="project-icon">
            <img src={typerDevIcon} alt="E-Commerce Icon" width={40} />
          </a>
          <div className="project-info">
            <h3>TyperDev</h3>
            <a target="_blank" href="https://github.com/antoniopataro/typer-dev">
              <h4>Code</h4>
              <img src={externalIcon} alt="Project's Repository" width={12} />
            </a>
          </div>
        </div>
        <div className="project">
          <a target="_blank" href="https://antoniopataro.github.io/emoji-searcher/" className="project-icon">
            <img src={emojiSearcherIcon} alt="Emoji Searcher Icon" width={40} />
          </a>
          <div className="project-info">
            <h3>Emoji Searcher</h3>
            <a target="_blank" href="https://github.com/antoniopataro/emoji-searcher">
              <h4>Code</h4>
              <img src={externalIcon} alt="Project's Repository" width={12} />
            </a>
          </div>
        </div>
        <div className="project">
          <a target="_blank" href="https://antoniopataro.github.io/todo-app/" className="project-icon">
            <img src={toDoListIcon} alt="To-Do Icon" width={40} />
          </a>
          <div className="project-info">
            <h3>To-Do List</h3>
            <a target="_blank" href="https://github.com/antoniopataro/todo-app">
              <h4>Code</h4>
              <img src={externalIcon} alt="Project's Repository" width={12} />
            </a>
          </div>
        </div>
        <div className="project">
          <a href="https://antoniopataro.dev/" className="project-icon">
            <img src={personalWebsiteIcon} alt="Personal Website Icon" width={40} />
          </a>
          <div className="project-info">
            <h3>Personal Website</h3>
            <a target="_blank" href="https://github.com/antoniopataro/personal-website">
              <h4>Code</h4>
              <img src={externalIcon} alt="Project's Repository" width={12} />
            </a>
          </div>
        </div>
        <div className="project">
          <a target="_blank" href="https://antoniopataro.github.io/ui-snippets/" className="project-icon">
            <img src={uiSnippetsIcon} alt="UI-Snippets Icon" width={40} />
          </a>
          <div className="project-info">
            <h3>UI-Snippets</h3>
            <a target="_blank" href="https://github.com/antoniopataro/ui-snippets">
              <h4>Code</h4>
              <img src={externalIcon} alt="Project's Repository" width={12} />
            </a>
          </div>
        </div>
      </div>
      <div id="see-more-projects">
        <h3>
          See more on{" "}
          <a target="_blank" href="https://github.com/antoniopataro?tab=repositories">
            {" "}
            my repositories
          </a>
          .
        </h3>
      </div>
    </PortfolioStyles>
  );
}

export default Portfolio;
