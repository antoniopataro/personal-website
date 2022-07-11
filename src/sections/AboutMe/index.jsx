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
            I&apos;m a self-taught<span className="strong-purple"> Front-End Developer </span>
            who found his <span className="strong-purple">passion</span> in programming{" "}
            <span className="strong-purple">{daysStudying} days ago.</span>
            <br />
            <br />
            I'm currently changing my college's course from Aerospace Engineering to Computer Science and looking for my
            first <span className="strong-purple">professional opportunity.</span>
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
      <div id="technologies">
        <h2>Technologies</h2>
        <h3>
          <p>
            I started learning web development with <span className="strong-purple">Javascript</span>, with which I
            learned <span className="strong-purple">HTML and CSS.</span>
            <br />
            <br />
            After I felt confident enough, I dived into <span className="strong-purple">
              ReactJS and Typescript,
            </span>{" "}
            what was basically love at first sight for me.
            <br />
            <br />
            After a while, I mastered the <span className="strong-purple">MERN</span> stack, with{" "}
            <span className="strong-purple">NodeJS, Express and MongoDB.</span>
            <br />
            <br />
            Currently I&apos;m studying <span className="strong-purple">ReactNative.</span>
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
