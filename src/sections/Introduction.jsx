import React, { useContext } from "react";
import { ThemeContext } from "../App";

import profilePicture from "../assets/profilePicture.png";
import brazilFlag from "../assets/brazilFlag.png";

import styled from "styled-components";

const IntroductionContainer = styled.section`
  display: flex;
  flex-direction: column;

  width: 60vw;

  align-items: center;

  padding: 100px 0;

  #introduction-text {
    display: flex;
    flex-direction: column;

    align-items: center;

    text-align: center;

    transform: translateY(-50px);

    img {
      pointer-events: none;
      margin-top: 20px;
    }

    #subtitle {
      display: flex;
      flex-direction: row;

      align-items: center;

      gap: 4px;
    }
  }

  #profile-picture {
    pointer-events: none;

    border-radius: 50%;

    box-shadow: 0px 0px 150px 25px ${(props) => props.theme.primaryShadow};
  }

  #scroll-down {
    display: flex;
    flex-direction: row;

    align-items: center;

    gap: 10px;

    color: ${(props) => props.theme.inactiveText};

    #animated-scroll-stroke {
      position: relative;

      width: 15px;
      height: 20px;

      border-radius: 15px;

      border: 1px solid ${(props) => props.theme.inactiveText};

      #animate-scroll-center {
        position: absolute;

        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;

        width: 3px;
        height: 3px;

        border-radius: 5px;

        background-color: ${(props) => props.theme.inactiveText};

        animation: upAndDown alternate infinite 0.5s ease-out;

        @keyframes upAndDown {
          0% {
            transform: translateY(-3px);
          }
          100% {
            transform: translateY(3px);
          }
        }
      }
    }
  }

  @media (max-width: 1024px) {
    #profile-picture {
      box-shadow: 0px 0px 100px 15px ${(props) => props.theme.primaryShadow};
    }
  }
  @media (max-width: 425px) {
    #profile-picture {
      width: 200px;
      height: 200px;
      box-shadow: 0px 0px 50px 15px ${(props) => props.theme.primaryShadow};
    }
  } ;
`;

function Introduction() {
  const { theme } = useContext(ThemeContext);

  return (
    <IntroductionContainer theme={theme}>
      <img
        src={profilePicture}
        alt="Antônio Pataro"
        id="profile-picture"
        width={250}
      />
      <div id="introduction-text">
        <h1>Antônio Pataro</h1>
        <div id="subtitle">
          <h3>
            I'm a passionate{" "}
            <span className="strong-purple">Front-End Developer</span> from
            Brazil.
          </h3>{" "}
        </div>
        <img src={brazilFlag} alt="Brazil's Flag" width={20} />
      </div>
      <div id="scroll-down">
        <h4>Scroll for more</h4>
        <div id="animated-scroll-stroke">
          <div id="animate-scroll-center" />
        </div>
      </div>
    </IntroductionContainer>
  );
}

export default Introduction;
