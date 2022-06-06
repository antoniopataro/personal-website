import React, { useContext } from "react";
import { ThemeContext } from "../App";

import externalIcon from "../assets/externalIcon.svg";

import styled from "styled-components";

const AboutMeContainer = styled.section`
  display: flex;
  flex-direction: row;

  width: 60vw;

  justify-content: space-between;

  gap: 100px;
  padding: 100px 0;

  h2 {
    width: fit-content;
  }

  #about-me {
    display: flex;
    flex-direction: column;

    width: calc(30vw - 50px);

    gap: 30px;

    #social-links {
      display: flex;
      flex-direction: column;

      width: fit-content;

      gap: 20px;

      a {
        display: flex;
        flex-direction: row;

        width: fit-content;

        gap: 10px;
        padding: 8px 20px;

        border-radius: 4px;

        text-decoration: none;

        color: ${(props) => props.theme.inactiveText};
        background-color: ${(props) => props.theme.foreground};

        transition: 0.15s ease;
        transition-property: color;

        h4 {
          font-weight: 500;
        }

        img {
          pointer-events: none;

          transition: filter 0.15s ease;

          filter: ${(props) => props.theme.imageFilter};
        }

        :hover {
          color: ${(props) => props.theme.highlightedText};

          img {
            filter: ${(props) => props.theme.hoveredImageFilter};
          }
        }
      }
    }
  }

  #stacks {
    display: flex;
    flex-direction: column;

    width: calc(30vw - 50px);

    gap: 30px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;

    #about-me,
    #stacks {
      width: 100%;

      #social-links {
        flex-direction: row;
      }
    }
  }

  @media (max-width: 768px) {
    #about-me {
      align-items: center;

      h2 {
        width: 100%;
      }

      #social-links {
        flex-direction: column;

        align-items: center;
      }
    }
  }
`;

function AboutMe() {
  const { theme } = useContext(ThemeContext);

  return (
    <AboutMeContainer id="about-me-container" theme={theme}>
      <div id="about-me" data-aos="fade-right">
        <h2>About Me</h2>
        <h3>
          <p>
            I’m a
            <span className="strong-purple"> self-taught web developer </span>
            who
            <span className="strong-purple"> fell in love</span> with
            programming.
            <br />
            <br />
            I'm currently coursing Aerospace Engineering in college. However,
            I'm looking for a
            <span className="strong-purple"> professional opportunity</span> as
            a<span className="strong-purple"> developer</span> so I can change
            it to <span className="strong-purple">Computer Science.</span>
            <br />
            <br />
            You can find me on:
          </p>
        </h3>
        <div id="social-links">
          <a href="https://github.com/antoniopataro" target="_blank">
            <h4>Github</h4>
            <img src={externalIcon} alt="My Github profile." width={12} />
          </a>
          <a href="https://www.linkedin.com/in/antoniopataro/" target="_blank">
            <h4>LinkedIn</h4>
            <img src={externalIcon} alt="My LinkedIn profile." width={12} />
          </a>
          <a href="https://www.instagram.com/antoniopataro/" target="_blank">
            <h4>Instagram</h4>
            <img src={externalIcon} alt="My Instagram profile." width={12} />
          </a>
        </div>
      </div>
      <div id="stacks" data-aos="fade-right">
        <h2>Stacks</h2>
        <h3>
          <p>
            I started learning web development with
            <span className="strong-purple"> Javascript</span>, with which I
            learned <span className="strong-purple"> HTML</span> and
            <span className="strong-purple"> CSS</span>.
            <br />
            <br />
            After I felt confident enough, I jumped onto
            <span className="strong-purple"> ReactJS</span>, framework that was
            basically love at first sight for me.
            <br />
            <br />
            Currently I’m studying the basics of Back-End Development with
            <span className="strong-purple"> NodeJS</span>, but my real passion
            is on Front-End.
          </p>
        </h3>
      </div>
    </AboutMeContainer>
  );
}

export default AboutMe;
