import React, { useContext } from "react";

import { Language } from "../../../context/LanguageContext";

import AboutStyles from "./styles";

const en =
  "I started learning programming as a passionate self-taught. Four months after that, I started switching my college's course from Aerospace Engineering to Computer Science at UFMG.";
const br =
  "Eu comecei aprendendo programação como um autodidata apaixonado. Quatro meses depois, comecei a mudar o meu curso na faculdade de Engenharia Aeroespacial para Ciência da Computação na UFMG.";

function About() {
  const { language } = useContext(Language);

  return (
    <AboutStyles>
      <h2>{language === "en" ? "About me" : "Sobre"}</h2>
      <h3>
        {language === "en" ? en : br}
        <br />
        <br />
      </h3>
    </AboutStyles>
  );
}

export default About;
