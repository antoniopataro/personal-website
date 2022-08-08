import React, { useState, useEffect, useContext } from "react";

import { useNavigate } from "react-router-dom";

import { Language } from "../../context/LanguageContext";

import leftArrow from "../../assets/leftArrow.svg";

import NotFoundStyles from "./styles";

const en = "You'll be redirected in:";
const br = "Você será redirecionado em:";

function NotFound() {
  const navigate = useNavigate();

  const { language } = useContext(Language);

  const [timer, setTimer] = useState(5);

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);

      return;
    }

    navigate("/");
  }, [timer]);

  return (
    <NotFoundStyles>
      <button className="left" onClick={() => navigate("/")}>
        <img src={leftArrow} alt="Back" width={12} />
      </button>
      <span>
        <h1>404</h1>
        <span>
          <h3>{language === "en" ? en : br}</h3>
          <h2>{timer}</h2>
        </span>
      </span>
    </NotFoundStyles>
  );
}

export default NotFound;
