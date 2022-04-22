import React from "react";

import {
  Body,
  AboutMeLeft,
  AboutMeRight,
} from "../styles/sections/AboutMeStyles.jsx";

function AboutMe() {
  return (
    <Body>
      <AboutMeLeft>
        <div className="topic">
          <h3 className="purple-element">/</h3>
          <h3>about me</h3>
        </div>
        <h1 id="about-me-title">Antônio Pataro</h1>
        <h4 id="about-me-subtitle">
          An aspiring developer, who found his passion in this field and
          constantly tries to improve his abilities implementing creative
          solutions to real-life problems.
        </h4>
      </AboutMeLeft>
      <AboutMeRight>
        <div id="scroll-for-more">
          <h2>scroll for more</h2>
        </div>
      </AboutMeRight>
    </Body>
  );
}

export default AboutMe;
