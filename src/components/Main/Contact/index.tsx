import React, { useContext } from "react";

import { Language } from "../../../context/LanguageContext";

import diagonalArrow from "../../../assets/diagonalArrow.svg";

import ContactStyles from "./styles";

const contacts = [
  { media: "Youtube", url: "https://www.youtube.com/channel/UC-L7leCzqLbmaAxtB1C9wyQ" },
  { media: "Github", url: "https://github.com/antoniopataro" },
  { media: "LinkedIn", url: "https://www.linkedin.com/in/antoniopataro/" },
  { media: "E-mail", url: "mailto:antoniopatarodev@gmail.com" },
];

function Contact() {
  const { language } = useContext(Language);

  return (
    <ContactStyles>
      <h2>{language === "en" ? "Contact" : "Contato"}</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <h3>
              <a href={contact.url} target={"_blank"}>
                {contact.media}
                <img src={diagonalArrow} alt="External Link" width={12} />
              </a>
            </h3>
          </li>
        ))}
      </ul>
    </ContactStyles>
  );
}

export default Contact;
