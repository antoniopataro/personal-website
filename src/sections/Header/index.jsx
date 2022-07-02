import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../App";

import themeIcon from "../../assets/themeIcon.svg";

import HeaderStyles from "./styles";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleKeyPress = (e) => {
    const key = e.key.toLowerCase();
    const ctrl = e.ctrlKey;

    if (ctrl && key === "q") {
      toggleTheme();
      return;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <HeaderStyles theme={theme}>
      <div id="header-left">
        <button onClick={() => toggleTheme()}>
          <img src={themeIcon} alt="Change Theme" width={20} />
        </button>
        <div id="welcome-text">
          <span id="waving-emoji">👋</span>
          <h3>Welcome!</h3>
          <span id="my-name-is">
            <h3>My name is Antônio Pataro.</h3>
          </span>
        </div>
      </div>
      <nav id="header-right">
        <a href="#about-me">
          <h3>About me</h3>
        </a>
        <a href="#portfolio">
          <h3>Portfolio</h3>
        </a>
        <a href="#lets-connect">
          <h3>Let's Connect</h3>
        </a>
      </nav>
    </HeaderStyles>
  );
}

export default Header;
