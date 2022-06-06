import React, { useState, useContext } from "react";
import { ThemeContext } from "../App";

import styled from "styled-components";

const FooterContainer = styled.footer`
  display: grid;
  place-items: center;

  width: 60vw;

  align-items: center;
  justify-content: center;

  gap: 100px;
  padding: 100px 0;

  #footer-cta-wrapper {
    position: relative;

    display: flex;

    width: 60vw;
    height: 200px;

    align-items: center;
    justify-content: center;

    #footer-background-text {
      position: absolute;

      z-index: 0;

      background-image: linear-gradient(
        90deg,
        rgba(30, 32, 35, 0.25) 0%,
        rgba(217, 217, 217, 1) 100%
      );

      text-align: center;
      line-height: 100px;

      cursor: default;
      pointer-events: none;

      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    #footer-cta {
      display: flex;
      flex-direction: row;

      z-index: 1;

      width: clamp(200px, 40%, 350px);

      align-items: center;
      justify-content: space-between;

      padding: 20px 30px;

      border: none;
      border-radius: 4px;
      outline: none;

      font-family: "Inter", sans-serif;
      font-weight: 500;

      cursor: pointer;

      transform: translateY(5px);

      color: ${(props) => props.theme.highlightedText};
      background-color: ${(props) => props.theme.extremeColor};

      animation: scaleCtaOut 0.15s ease-in-out forwards;

      :hover {
        animation: scaleCtaIn 0.15s ease-in-out forwards;
      }

      @keyframes scaleCtaIn {
        from {
          transform: translateY(5px) scale(1);
        }
        to {
          transform: translateY(5px) scale(1.025);
        }
      }

      @keyframes scaleCtaOut {
        from {
          transform: translateY(5px) scale(1.025);
        }
        to {
          transform: translateY(5px) scale(1);
        }
      }

      :hover #cta-shortcut {
        color: ${(props) => props.theme.highlightedText};
      }

      #cta-shortcut {
        display: flex;
        flex-direction: row;

        align-items: center;

        gap: 10px;

        color: ${(props) => props.theme.inactiveText};

        transition: color 0.15s ease;

        #shortcut {
          display: grid;
          place-items: center;

          width: 30px;
          height: 30px;

          border-radius: 4px;

          background-color: ${(props) => props.theme.background};
        }
      }
    }
  }

  #description {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    width: 100%;

    text-align: center;

    a {
      color: ${(props) => props.theme.inactiveText};
    }

    #author {
      color: ${(props) => props.theme.highlightedText};
    }

    #figma {
      color: ${(props) => props.theme.inactiveText};
    }
  }

  #modal-container {
    position: fixed;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;

    pointer-events: none;
    opacity: 0;

    z-index: 2;

    width: 100vw;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.5);

    transition: 0.15s ease;
    transition-property: opacity;

    #modal {
      position: absolute;

      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;

      opacity: 0;
      transform: scale(0.95);

      display: flex;

      width: 600px;
      height: 400px;

      border-radius: 4px;

      background-color: ${(props) => props.theme.foreground};

      transition: 0.15s ease;
      transition-property: opacity transform;

      button {
        position: absolute;

        top: 20px;
        right: 20px;

        height: fit-content;
        width: fit-content;

        border: none;
        outline: none;

        font-family: "Inter", sans-serif;
        font-weight: 500;

        cursor: pointer;

        color: ${(props) => props.theme.inactiveText};
        background-color: transparent;

        transition: 0.15s ease;
        transition-property: color;

        :hover {
          color: ${(props) => props.theme.highlightedText};
        }
      }
    }
  }

  @media (max-width: 1200px) {
    #footer-cta-wrapper {
      #footer-cta {
        padding: 10px 15px;
      }
    }
  }
`;

function Footer() {
  const { theme } = useContext(ThemeContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalContainerStyles = {};
  const modalStyles = {};

  if (isModalOpen) {
    modalContainerStyles.opacity = "1";
    modalContainerStyles.pointerEvents = "auto";

    modalStyles.opacity = 1;
    modalStyles.transform = `scale(1)`;
  }

  return (
    <FooterContainer id="lets-connect-container" theme={theme}>
      <div id="footer-cta-wrapper" data-aos="fade-in">
        <div id="footer-background-text">
          <h1>
            Let's
            <br /> Connect
          </h1>
        </div>
        <button id="footer-cta" onClick={() => setIsModalOpen(true)}>
          <h4>Get in Touch</h4>
          <div id="cta-shortcut">
            <h4>Press</h4>
            <div id="shortcut">C</div>
          </div>
        </button>
      </div>
      <div id="description">
        <h4>
          <p>
            Build by <span id="author">Antônio Pataro</span>
            <br />
            <br />
            <span id="figma">
              This page's{" "}
              <a
                href="https://www.figma.com/file/cibaFLJNSHOa8dKKn3V9Mo/Personal-Website?node-id=272%3A31"
                target="_blank"
              >
                Figma
              </a>
            </span>
            .
          </p>
        </h4>
      </div>
      <div id="modal-container" style={modalContainerStyles}>
        <div id="modal" style={modalStyles}>
          <button onClick={() => setIsModalOpen(false)}>Close</button>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;
