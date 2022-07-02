import React, { useContext } from "react";
import { ThemeContext } from "../../App";

import externalIcon from "../../assets/externalIcon.svg";

import AboutMeStyles from "./styles";

function AboutMe() {
  const { theme } = useContext(ThemeContext);

  const currentDate = new Date();
  const startedStudying = new Date("03/08/2022");

  const daysStudying = Math.round((currentDate - startedStudying) / (1000 * 60 * 60 * 24));

  return (
    <AboutMeStyles id="about-me" theme={theme}>
      <div id="about-me-container">
        <h2>About Me</h2>
        <h3>
          <p>
            I’m a<span className="strong-purple"> self-taught web developer </span>
            who's
            <span className="strong-purple"> in love</span> with programming for{" "}
            <span className="strong-purple">{daysStudying} days</span>.
            <br />
            <br />
            I'm currently coursing Aerospace Engineering in college. However, I'm looking for a
            <span className="strong-purple"> professional opportunity</span> as a
            <span className="strong-purple"> developer</span> so I can change it to{" "}
            <span className="strong-purple">Computer Science.</span>
            <br />
            <br />
            You can find me on:
          </p>
        </h3>
        <div id="social-links">
          <a href="https://github.com/antoniopataro" target="_blank">
            <h4>Github</h4>
            <img src={externalIcon} alt="My Github profile." width={15} />
          </a>
          <a href="https://www.linkedin.com/in/antoniopataro/" target="_blank">
            <h4>LinkedIn</h4>
            <img src={externalIcon} alt="My LinkedIn profile." width={15} />
          </a>
          <a href="https://www.instagram.com/antoniopataro/" target="_blank">
            <h4>Instagram</h4>
            <img src={externalIcon} alt="My Instagram profile." width={15} />
          </a>
        </div>
      </div>
      <div id="stacks">
        <h2>Stacks</h2>
        <h3>
          <p>
            I started learning web development with
            <span className="strong-purple"> Javascript</span>, with which I learned{" "}
            <span className="strong-purple"> HTML</span> and
            <span className="strong-purple"> CSS</span>.
            <br />
            <br />
            After I felt confident enough, I dived into
            <span className="strong-purple"> ReactJS</span>, framework that was basically love at first sight for me.
            <br />
            <br />
            Currently I’m studying the basics of Back-End Development with
            <span className="strong-purple"> NodeJS</span> and <span className="strong-purple">MySQL</span> and creating
            projects with <span className="strong-purple">Typescript</span> sometimes.
          </p>
        </h3>
        <a href="https://antoniopataro.notion.site/Ant-nio-Pataro-8baa7d3f636a4b67a631e04db007cbb0" target="_blank">
          <h4>Resume</h4>
          <img src={externalIcon} alt="My Resume." width={15} />
        </a>
      </div>
    </AboutMeStyles>
  );
}

export default AboutMe;
