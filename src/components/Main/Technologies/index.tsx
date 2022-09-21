import React, { useContext } from "react";

import { Language } from "../../../context/LanguageContext";

import TechnologiesStyles from "./styles";

import htmlIcon from "../../../assets/technologies/htmlIcon.png";
import cssIcon from "../../../assets/technologies/cssIcon.png";
import javascriptIcon from "../../../assets/technologies/javascriptIcon.png";
import typescriptIcon from "../../../assets/technologies/typescriptIcon.png";
import viteJsIcon from "../../../assets/technologies/viteJsIcon.png";
import vueIcon from "../../../assets/technologies/vueIcon.png";
import reactJsIcon from "../../../assets/technologies/reactJsIcon.png";
import reactNativeIcon from "../../../assets/technologies/reactNativeIcon.png";
import nextJsIcon from "../../../assets/technologies/nextJsIcon.png";
import dockerIcon from "../../../assets/technologies/dockerIcon.png";
import nodeJsIcon from "../../../assets/technologies/nodeJsIcon.png";
import expressIcon from "../../../assets/technologies/expressIcon.png";
import mongoDbIcon from "../../../assets/technologies/mongoDbIcon.png";
import postgreSQLIcon from "../../../assets/technologies/postgreSQLIcon.png";
import mySQLIcon from "../../../assets/technologies/mySQLIcon.png";
import prismaIcon from "../../../assets/technologies/prismaIcon.png";
import graphQLIcon from "../../../assets/technologies/graphQLIcon.png";
import gitIcon from "../../../assets/technologies/gitIcon.png";
import pythonIcon from "../../../assets/technologies/pythonIcon.png";
import figmaIcon from "../../../assets/technologies/figmaIcon.png";
import jestIcon from "../../../assets/technologies/jestIcon.png";
import vitestIcon from "../../../assets/technologies/vitestIcon.png";
import tailwindIcon from "../../../assets/technologies/tailwindIcon.png";

const technologies = [
  {
    name: "HTML",
    img: htmlIcon,
    url: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
  },
  { name: "CSS", img: cssIcon, url: "https://www.w3schools.com/css/" },
  {
    name: "Javascript",
    img: javascriptIcon,
    url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
  },
  {
    name: "Typescript",
    img: typescriptIcon,
    url: "https://www.typescriptlang.org/",
  },
  { name: "VueJS", img: vueIcon, url: "https://vuejs.org/" },
  { name: "ReactJS", img: reactJsIcon, url: "https://reactjs.org/" },
  {
    name: "React Native",
    img: reactNativeIcon,
    url: "https://reactnative.dev/",
  },
  { name: "NextJS", img: nextJsIcon, url: "https://nextjs.org/" },
  { name: "Docker", img: dockerIcon, url: "https://www.docker.com/" },
  { name: "NodeJS", img: nodeJsIcon, url: "https://nodejs.org/" },
  { name: "Express", img: expressIcon, url: "https://expressjs.com/" },
  { name: "MongoDB", img: mongoDbIcon, url: "https://www.mongodb.com/" },
  {
    name: "PostgreSQL",
    img: postgreSQLIcon,
    url: "https://www.postgresql.org/",
  },
  { name: "MySQL", img: mySQLIcon, url: "https://www.mysql.com/" },
  { name: "Prisma", img: prismaIcon, url: "https://www.prisma.io/" },
  { name: "GraphQL", img: graphQLIcon, url: "https://graphql.org/" },
  { name: "Git", img: gitIcon, url: "https://git-scm.com/" },
  { name: "Python", img: pythonIcon, url: "https://www.python.org/" },
  { name: "Figma", img: figmaIcon, url: "https://www.figma.com/" },
  { name: "Jest", img: jestIcon, url: "https://jestjs.io/" },
  { name: "Vitest", img: vitestIcon, url: "https://vitest.dev/" },
  { name: "TailwindCSS", img: tailwindIcon, url: "https://tailwindcss.com/" },
];

const en1 =
  "First two months I learned <code>Javascript</code>, with which I learned <code>HTML</code> and <code>CSS</code>. After I felt confident enough, I dived into <code>React</code> and <code>Typescript</code>, what was basically love at first sight.";
const en2 =
  "Two months later, I was in touch with <code>NextJS</code> and already creating a project with <code>NodeJS</code>, <code>Express</code> and <code>MongoDB</code>.";
const en3 =
  "Recently, I got confident with <code>React Native</code> and, now, I'm getting deeper in touch with Back-End Architecture and Cloud.";

const br1 =
  "Nos primeiros dois meses, aprendi <code>Javascript</code>, tecnologia com a qual aprendi <code>HTML</code> e <code>CSS</code>. Depois de me sentir confiante o suficiente, mergulhei no <code>React</code> e no <code>Typescript</code>, tecnologias que foram amor à primeira vista.";
const br2 =
  "Dois meses depois, eu estava entrando em contato com o <code>NextJS</code> e criando um projeto com <code>NodeJS</code>, <code>Express</code> e <code>MongoDB</code>.";
const br3 =
  "Recentemente peguei confiança com <code>React Native</code> e, agora, tenho me aprofundado em Arquitetura Back-End e Cloud.";

function Technologies() {
  const { language } = useContext(Language);

  return (
    <TechnologiesStyles>
      <h2>{language === "en" ? "Technologies" : "Tecnologias"}</h2>
      <h3>
        <span
          dangerouslySetInnerHTML={{ __html: language === "en" ? en1 : br1 }}
        ></span>
        <br />
        <br />
        <span
          dangerouslySetInnerHTML={{ __html: language === "en" ? en2 : br2 }}
        ></span>
        <br />
        <br />
        <span
          dangerouslySetInnerHTML={{ __html: language === "en" ? en3 : br3 }}
        ></span>
      </h3>
      <ul>
        {technologies.map((technology, index) => (
          <li
            key={index}
            style={{ animation: `fadeIn .15s ${0.15 * index}s ease forwards` }}
          >
            <a
              data-title={technology.name}
              href={technology.url}
              target={"_blank"}
            >
              <img
                src={technology.img}
                alt={technology.name}
                width={30}
                height={30}
              />
            </a>
          </li>
        ))}
      </ul>
    </TechnologiesStyles>
  );
}

export default Technologies;
