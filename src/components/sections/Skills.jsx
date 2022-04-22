import React from "react";

import {
  Background,
  Body,
  Topic,
  Cards,
  Technologies,
} from "../styles/sections/SkillsStyles.jsx";

import BrushIcon from "../styles/svgs/card-icons/BrushIcon.svg";
import DevIcon from "../styles/svgs/card-icons/DevIcon.svg";
import ComputerIcon from "../styles/svgs/card-icons/ComputerIcon.svg";

import HTMLIcon from "../styles/svgs/technologies-icons/HTMLIcon.svg";
import CSSIcon from "../styles/svgs/technologies-icons/CSSIcon.svg";
import JavascriptIcon from "../styles/svgs/technologies-icons/JavascriptIcon.svg";
import ReactJSIcon from "../styles/svgs/technologies-icons/ReactJSIcon.svg";
import nodeJSIcon from "../styles/svgs/technologies-icons/nodeJSIcon.svg";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 250 });
  }, []);

  return (
    <Background id="skills">
      <Body>
        <Topic>
          <div className="topic">
            <h3 className="purple-element">/</h3>
            <h3>skills</h3>
          </div>
        </Topic>
        <Cards>
          <div id="designer-card" className="card" data-aos="fade-right">
            <div className="card-content">
              <img
                className="card-icon"
                src={BrushIcon}
                alt="Designer"
                width="30px"
                height="30px"
              />
              <h3>Designing projects.</h3>
              <h5 className="card-subtitle">Mainly for personal projects.</h5>
            </div>
          </div>
          <div
            id="frontend-card"
            className="card"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="card-content">
              <img
                className="card-icon"
                src={DevIcon}
                alt="Front-End Developer"
                width="30px"
                height="30px"
              />
              <h3>Front-End Development.</h3>
              <h5 className="card-subtitle">+20 Projects.</h5>
            </div>
          </div>
          <div
            id="backend-card"
            className="card"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="card-content">
              <img
                className="card-icon"
                src={ComputerIcon}
                alt="Back-End Developer"
                width="30px"
                height="30px"
              />
              <h3>Back-End Development.</h3>
              <h5 className="card-subtitle">Currently studying.</h5>
            </div>
          </div>
        </Cards>

        <Technologies>
          <div id="technologies-wrapper">
            <div className="technology-card">
              <img
                className="technology-icon"
                src={HTMLIcon}
                alt="HTML"
                width="50px"
                height="50px"
              />
              <h5>HTML</h5>
            </div>
            <div className="technology-card">
              <img
                className="technology-icon"
                src={CSSIcon}
                alt="CSS"
                width="50px"
                height="50px"
              />
              <h5>CSS</h5>
            </div>
            <div className="technology-card">
              <img
                className="technology-icon"
                src={JavascriptIcon}
                alt="Javascript"
                width="50px"
                height="50px"
              />
              <h5>Javascript</h5>
            </div>
            <div className="technology-card">
              <img
                className="technology-icon"
                src={ReactJSIcon}
                alt="ReactJS"
                width="50px"
                height="50px"
              />
              <h5>ReactJS</h5>
            </div>
            <div className="technology-card">
              <img
                className="technology-icon"
                src={nodeJSIcon}
                alt="nodeJS"
                width="50px"
                height="50px"
              />
              <h5>nodeJS</h5>
            </div>
          </div>
        </Technologies>
      </Body>
    </Background>
  );
}

export default Skills;
