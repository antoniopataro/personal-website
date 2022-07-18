import React, { useContext } from "react";

import { Language } from "../../../context/LanguageContext";

import TechnologiesStyles from "./styles";

import htmlIcon from "../../../assets/technologies/htmlIcon.png";
import cssIcon from "../../../assets/technologies/cssIcon.png";
import javascriptIcon from "../../../assets/technologies/javascriptIcon.png";
import typescriptIcon from "../../../assets/technologies/typescriptIcon.png";
import reactJsIcon from "../../../assets/technologies/reactJsIcon.png";
import nextJsIcon from "../../../assets/technologies/nextJsIcon.png";
import nodeJsIcon from "../../../assets/technologies/nodeJsIcon.png";
import expressIcon from "../../../assets/technologies/expressIcon.png";
import mongoDbIcon from "../../../assets/technologies/mongoDbIcon.png";
import gitIcon from "../../../assets/technologies/gitIcon.png";
import figmaIcon from "../../../assets/technologies/figmaIcon.png";

const technologies = [
  { name: "HTML", img: htmlIcon },
  { name: "CSS", img: cssIcon },
  { name: "Javascript", img: javascriptIcon },
  { name: "Typescript", img: typescriptIcon },
  { name: "ReactJS", img: reactJsIcon },
  { name: "NextJS", img: nextJsIcon },
  { name: "NodeJS", img: nodeJsIcon },
  { name: "Express", img: expressIcon },
  { name: "MongoDB", img: mongoDbIcon },
  { name: "Git", img: gitIcon },
  { name: "Figma", img: figmaIcon },
];

const en1 =
  "First two months I learned Javascript, with which I learned HTML and CSS. After I felt confident enough, I dived into React and Typescript, what was basically love at first sight.";
const en2 =
  "Two months later, I was in touch with NextJS and already creating a project with NodeJS, Express and MongoDB.";
const en3 =
  "Currently I'm studying ReactNative and getting deeper in touch with the fundamentals of Back-End Development and Architecture.";

const br1 =
  "Nos primeiros dois meses, aprendi Javascript, tecnologia com a quala prendi HTML e CSS. Depois de eu me sentir confiante o suficiente, mergulhei no React e no Typescript, tecnologias que foram amor à primeira vista.";
const br2 =
  "Dois meses depois, eu estava entrando em contato com o NextJS e criando um projeto com NodeJS, Express e MongoDB.";
const br3 =
  "Atualmente estou estudando ReactNative e me aprofundando nos fundamentos do Desenvolvimento e da Arquitetura Back-End.";

function Technologies() {
  const { language } = useContext(Language);

  return (
    <TechnologiesStyles>
      <h2>{language === "en" ? "Technologies" : "Tecnologias"}</h2>
      <h3>
        {language === "en" ? en1 : br1}
        <br />
        <br />
        {language === "en" ? en2 : br2}
        <br />
        <br />
        {language === "en" ? en3 : br3}
      </h3>
      <ul>
        {technologies.map((technology, index) => (
          <li key={index} style={{ animation: `fadeIn .15s ${0.15 * index}s ease forwards` }}>
            <img title={technology.name} src={technology.img} alt={technology.name} width={30} height={30} />
          </li>
        ))}
      </ul>
    </TechnologiesStyles>
  );
}

export default Technologies;
