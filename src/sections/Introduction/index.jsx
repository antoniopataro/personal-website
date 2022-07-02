import React, { useContext } from "react";
import { ThemeContext } from "../../App";

import profilePicture from "../../assets/profilePicture.png";
import brazilFlag from "../../assets/brazilFlag.png";

import IntroductionStyles from "./styles";

function Introduction() {
  const { theme } = useContext(ThemeContext);

  return (
    <IntroductionStyles theme={theme}>
      <img src={profilePicture} alt="Antônio Pataro" id="profile-picture" width={250} />
      <div id="introduction-text">
        <h1>Antônio Pataro</h1>
        <h3>
          I'm a passionate <span className="strong-purple">Front-End Developer</span> from Brazil.
          <img src={brazilFlag} alt="Brazil's Flag" width={20} />
        </h3>{" "}
      </div>
      <div id="scroll-down">
        <h4>Scroll for more</h4>
        <div id="animated-scroll-stroke">
          <div id="animate-scroll-center" />
        </div>
      </div>
    </IntroductionStyles>
  );
}

export default Introduction;
