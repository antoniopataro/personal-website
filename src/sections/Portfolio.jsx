import React, { useContext } from "react";
import { ThemeContext } from "../App";

import eCommerceIcon from "../assets/projects-icons/eCommerceIcon.png";
import toDoListIcon from "../assets/projects-icons/toDoListIcon.png";
import emojiSearcherIcon from "../assets/projects-icons/emojiSearcherIcon.png";
import personalWebsiteIcon from "../assets/projects-icons/personalWebsiteIcon.png";
import uiSnippetsIcon from "../assets/projects-icons/uiSnippetsIcon.png";

import externalIcon from "../assets/externalIcon.svg";

import styled from "styled-components";

const PortfolioContainer = styled.section`
  display: flex;
  flex-direction: column;

  width: 60vw;

  gap: 60px;
  padding: 100px 0;

  #section-title {
    display: flex;
    flex-direction: row;

    align-items: center;

    gap: 20px;

    h4 {
      color: ${(props) => props.theme.inactiveText};
    }
  }

  #projects-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    width: 100%;

    gap: 60px;

    .project {
      display: flex;
      flex-direction: row;

      width: max-content;

      align-items: center;

      gap: 30px;

      .project-icon {
        display: grid;
        place-items: center;

        width: 80px;
        height: 80px;

        border-radius: 4px;

        background-color: ${(props) => props.theme.foreground};

        :hover {
          img {
            pointer-events: none;
            animation: shakeIcon 0.5s ease-in-out forwards;

            @keyframes shakeIcon {
              0% {
                transform: rotate(-5deg);
              }
              50% {
                transform: rotate(5deg);
              }
              100% {
                transform: rotate(0deg);
              }
            }
          }
        }
      }

      .project-info {
        display: flex;
        flex-direction: column;

        gap: 10px;

        h3 {
          font-weight: 500;
          color: ${(props) => props.theme.highlightedText};
        }

        a {
          display: flex;
          flex-direction: row;

          gap: 10px;

          font-weight: 400;
          text-decoration: none;

          color: ${(props) => props.theme.inactiveText};

          transition: 0.15s ease;
          transition-property: filter, color;

          :hover {
            color: ${(props) => props.theme.highlightedText};
          }

          :hover img {
            filter: ${(props) => props.theme.hoveredImageFilter};
          }
        }

        img {
          pointer-events: none;
          filter: ${(props) => props.theme.imageFilter};
        }
      }
    }
  }

  #see-more-projects {
    display: flex;

    font-weight: 400;
    text-align: center;

    margin: 0 auto;

    a {
      position: relative;

      margin-left: 0.25rem;
      color: ${(props) => props.theme.highlightedText};
    }
  }

  @media (min-width: 1920px) {
    #projects-wrapper {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 768px) {
    padding: 50px 0;
  }
`;

function Portfolio() {
  const { theme } = useContext(ThemeContext);

  return (
    <PortfolioContainer id="portfolio-container" theme={theme}>
      <div id="section-title">
        <h2>Portfolio</h2>
        <h4>Click on a project to test it out.</h4>
      </div>
      <div id="projects-wrapper">
        <div className="project">
          <a
            target="_blank"
            href="https://antoniopataro.github.io/e-commerce-app/"
            className="project-icon"
          >
            <img src={eCommerceIcon} alt="Emoji Searcher Icon" width={40} />
          </a>
          <div className="project-info">
            <h3>E-Commerce</h3>
            <a
              target="_blank"
              href="https://github.com/antoniopataro/e-commerce-app"
            >
              <h4>Code</h4>
              <img src={externalIcon} alt="Project's Repository" width={12} />
            </a>
          </div>
        </div>
        <div className="project">
          <a
            target="_blank"
            href="https://antoniopataro.github.io/todo-app/"
            className="project-icon"
          >
            <img src={toDoListIcon} alt="Emoji Searcher Icon" width={40} />
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
          <a
            target="_blank"
            href="https://antoniopataro.github.io/emoji-searcher/"
            className="project-icon"
          >
            <img src={emojiSearcherIcon} alt="Emoji Searcher Icon" width={40} />
          </a>
          <div className="project-info">
            <h3>Emoji Searcher</h3>
            <a
              target="_blank"
              href="https://github.com/antoniopataro/emoji-searcher"
            >
              <h4>Code</h4>
              <img src={externalIcon} alt="Project's Repository" width={12} />
            </a>
          </div>
        </div>
        <div className="project">
          <a href="" className="project-icon">
            <img
              src={personalWebsiteIcon}
              alt="Personal Website Icon"
              width={40}
            />
          </a>
          <div className="project-info">
            <h3>Personal Website</h3>
            <a
              target="_blank"
              href="https://github.com/antoniopataro/personal-website"
            >
              <h4>Code</h4>
              <img src={externalIcon} alt="Project's Repository" width={12} />
            </a>
          </div>
        </div>
        <div className="project">
          <a
            target="_blank"
            href="https://antoniopataro.github.io/ui-snippets/"
            className="project-icon"
          >
            <img src={uiSnippetsIcon} alt="Emoji Searcher Icon" width={40} />
          </a>
          <div className="project-info">
            <h3>UI-Snippets</h3>
            <a
              target="_blank"
              href="https://github.com/antoniopataro/ui-snippets"
            >
              <h4>Code</h4>
              <img src={externalIcon} alt="Project's Repository" width={12} />
            </a>
          </div>
        </div>
      </div>
      <div id="see-more-projects">
        <h3>
          See more on{" "}
          <a
            target="_blank"
            href="https://github.com/antoniopataro?tab=repositories"
          >
            {" "}
            my repositories
          </a>
          .
        </h3>
      </div>
    </PortfolioContainer>
  );
}

export default Portfolio;
