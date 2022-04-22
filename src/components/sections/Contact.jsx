import React from "react";

import { useState } from "react";

import {
  Body,
  ContactLeft,
  ContactFormContainer,
  ContactInput,
  ContactTextarea,
  SubmitButton,
} from "../styles/sections/ContactStyles.jsx";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 250 });
  }, []);

  function handleName(e) {
    e.target.value.length > 0
      ? setNameInputColor("#676cdb")
      : setNameInputColor("#5F646E");

    setName(e.target.value);
  }
  function handleEmail(e) {
    e.target.value.includes("@")
      ? setEmailInputColor("#676cdb")
      : setEmailInputColor("#5F646E");

    setEmail(e.target.value);
  }
  function handleMessage(e) {
    e.target.value.length > 0
      ? setMessageInputColor("#676cdb")
      : setMessageInputColor("#5F646E");

    setMessage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const userInfo = { userName: name, userEmail: email, userMessage: message };

    sessionStorage.setItem("Name:", `${userInfo.userName}`);
    sessionStorage.setItem("E-mail:", `${userInfo.userEmail}`);
    sessionStorage.setItem("Message:", `${userInfo.userMessage}`);
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameInputColor, setNameInputColor] = useState("#5F646E");
  const [emailInputColor, setEmailInputColor] = useState("#5F646E");
  const [messageInputColor, setMessageInputColor] = useState("#5F646E");

  return (
    <Body id="contact">
      <ContactLeft data-aos="fade-left">
        <div>
          <div className="topic">
            <h3 className="purple-element">/</h3>
            <h3>contact</h3>
          </div>
        </div>
        <h1 id="contact-title">
          Let&apos;s <span className="purple-element">Conect</span>
        </h1>
        <h4 id="contact-subtitle">
          Hope you liked what you saw here. Wanna check out more of my work? Try
          spying this page’s footer! ;)
        </h4>
      </ContactLeft>

      <ContactFormContainer>
        <form id="contact-form">
          <div className="input-section" data-aos="fade-right">
            <label htmlFor="form-input-name">
              <h3>name</h3>
            </label>
            <ContactInput
              id="form-input-name"
              type="text"
              value={name}
              onChange={handleName}
              textcolor={nameInputColor}
            />
          </div>
          <div className="input-section" data-aos="fade-right">
            <label htmlFor="form-input-email">
              <h3>e-mail</h3>
            </label>
            <ContactInput
              id="form-input-email"
              type="email"
              value={email}
              onChange={handleEmail}
              textcolor={emailInputColor}
            />
          </div>
          <div className="input-section" data-aos="fade-right">
            <label htmlFor="form-input-message">
              <h3>message</h3>
            </label>
            <ContactTextarea
              id="form-input-message"
              type="text"
              value={message}
              onChange={handleMessage}
              textcolor={messageInputColor}
            />
          </div>
          <SubmitButton
            disabled={!name || !email || !message}
            type="submit"
            form="contact-form"
            onClick={handleSubmit}
          >
            <button>
              <h2>submit</h2>
            </button>
          </SubmitButton>
        </form>
      </ContactFormContainer>
    </Body>
  );
}

export default Contact;
