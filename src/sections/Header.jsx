import React, { useContext } from "react";
import { ThemeContext } from "../App";

import themeIcon from "../assets/themeIcon.svg";

import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;

  width: 60vw;

  padding: 100px 0;

  align-items: center;
  justify-content: space-between;

  #header-left {
    display: flex;
    flex-direction: row;

    align-items: center;

    gap: 30px;

    font-size: 18px;
    font-weight: 400;

    button {
      height: 50px;
      width: 50px;

      border: none;
      border-radius: 4px;
      outline: none;

      cursor: pointer;

      background-color: ${(props) => props.theme.foreground};

      :hover img {
        filter: ${(props) => props.theme.hoveredImageFilter};
      }

      img {
        pointer-events: none;
        filter: ${(props) => props.theme.imageFilter};

        transition: 0.15s ease;
        transition-property: filter;
      }
    }

    #welcome-text {
      display: flex;
      flex-direction: row;

      align-items: center;

      gap: 4px;

      #waving-emoji {
        margin-right: 6px;

        animation: waving 1s ease-in-out infinite alternate;

        @keyframes waving {
          0% {
            transform: rotate(-10deg);
          }
          30% {
            transform: rotate(10deg);
          }
          60% {
            transform: rotate(0deg);
          }
        }
      }
    }
  }

  #header-right {
    display: flex;
    flex-direction: row;

    gap: 30px;

    font-size: 18px;

    a {
      font-weight: 400;

      text-decoration: none;
      color: ${(props) => props.theme.inactiveText};

      transition: 0.15s ease;
      transition-property: color;

      :hover {
        color: ${(props) => props.theme.highlightedText};
      }
    }
  }

  @media (max-width: 1152px) {
    #my-name-is {
      display: none;
    }
  }

  @media (max-width: 960px) {
    #header-left {
      #welcome-text {
        display: none;
      }
    }

    #header-right {
      width: 100%;

      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    #header-left {
      button {
        position: fixed;

        z-index: 2;

        bottom: 100px;
        left: 0;
        right: 0;

        margin: auto;

        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      }
    }
  }

  @media (max-width: 500px) {
    #header-right {
      flex-direction: column;

      align-items: center;
    }
  }
`;

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <HeaderContainer theme={theme}>
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
        <a href="#about-me-container">
          <h3>About me</h3>
        </a>
        <a href="#portfolio-container">
          <h3>Portfolio</h3>
        </a>
        <a href="#lets-connect-container">
          <h3>Let's Connect</h3>
        </a>
      </nav>
    </HeaderContainer>
  );
}

export default Header;
