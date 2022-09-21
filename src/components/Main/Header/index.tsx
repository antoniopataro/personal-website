import React, { useContext } from "react";

import { Language } from "../../../context/LanguageContext";

import profilePicture from "../../../assets/header/profilePicture.png";
import languageIcon from "../../../assets/header/languageIcon.svg";
import paperClipIcon from "../../../assets/header/paperClipIcon.svg";
import brFlag from "../../../assets/header/brFlag.png";

import diagonalArrow from "../../../assets/diagonalArrow.svg";

import HeaderStyles from "./styles";

const en =
  "I'm a Front-End Developer based in Brazil who's very into Design. I'm starting to create";
const br =
  "Eu sou um Desenvolvedor Front-End do Brasil que gosta muito de Design. Estou começando a fazer";

function Header() {
  const { language, changeLanguage } = useContext(Language);

  return (
    <HeaderStyles>
      <div className="top">
        <div className="left">
          <img src={profilePicture} alt="Antônio Pataro" width={50} />
          <div className="info">
            <span className="name">
              <h2>Antônio Pataro</h2>
              <img
                src={brFlag}
                alt={language === "en" ? "Brazil" : "Brasil"}
                width={16}
                height={16}
              />
            </span>
            <h4>
              {language === "en"
                ? "Software Developer"
                : "Desenvolvedor de Software"}
            </h4>
          </div>
        </div>
        <div className="right">
          <a
            data-title="Resume"
            href={
              language === "en"
                ? "https://www.notion.so/antoniopataro/Ant-nio-Pataro-8baa7d3f636a4b67a631e04db007cbb0"
                : "https://www.notion.so/antoniopataro/Ant-nio-Pataro-126155aad8474bd69333f5a58467b5ee"
            }
            target={"_blank"}
          >
            <img src={paperClipIcon} alt="Current Language" width={15} />
          </a>
          <button data-title="Language" onClick={changeLanguage}>
            <img src={languageIcon} alt="Current Language" width={20} />
          </button>
        </div>
      </div>
      <div className="bottom">
        <h3>
          {language === "en" ? en : br}{" "}
          <a
            href="https://www.youtube.com/channel/UC-L7leCzqLbmaAxtB1C9wyQ"
            target={"_blank"}
          >
            {language === "en" ? "videos" : "vídeos"}
            <img src={diagonalArrow} alt="External Link" width={12} />
          </a>
        </h3>
      </div>
    </HeaderStyles>
  );
}

export default Header;
