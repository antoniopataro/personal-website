import React, { useState, useEffect, useContext } from "react";

import { useNavigate } from "react-router-dom";

import { Language } from "../../context/LanguageContext";

import leftArrow from "../../assets/leftArrow.svg";

import NotFoundStyles from "./styles";

const en = "I wasn't able to find the route you are looking for :(";
const br = "Não consegui encontrar a rota que você está procurando :(";

function NotFound() {
  const navigate = useNavigate();

  const { language } = useContext(Language);

  const [timer, setTimer] = useState(5);

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return;
    }
    return;
  }, [timer]);

  return (
    <NotFoundStyles>
      <button className="left" onClick={() => navigate("/")}>
        <img src={leftArrow} alt="Back" width={12} />
      </button>
      <span>
        <h1>404</h1>
        <h3>{language === "en" ? en : br}</h3>
      </span>
    </NotFoundStyles>
  );
}

export default NotFound;
