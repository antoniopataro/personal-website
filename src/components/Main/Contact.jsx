import React, { useState, useEffect } from "react";

import {
  Body,
  ContactLeft,
  ContactFormContainer,
  ContactInput,
  ContactTextarea,
  SubmitButton,
} from "../../styles/ContactStyles.jsx";

import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameInputColor, setNameInputColor] = useState("#5F646E");
  const [emailInputColor, setEmailInputColor] = useState("#5F646E");
  const [messageInputColor, setMessageInputColor] = useState("#5F646E");

  const [sentStatus, setSentStatus] = useState("");

  const [isButtonDisabled, setIsButtonDisabled] = useState(
    name || email || message
  );

  useEffect(() => {
    AOS.init({ duration: 250 });
  }, []);

  const handleName = (e) => {
    e.target.value.length > 0
      ? setNameInputColor("#676cdb")
      : setNameInputColor("#5F646E");
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    e.target.value.includes("@") && e.target.value.includes(".")
      ? setEmailInputColor("#676cdb")
      : setEmailInputColor("#5F646E");
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    e.target.value.length > 0
      ? setMessageInputColor("#676cdb")
      : setMessageInputColor("#5F646E");
    setMessage(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (sentStatus === "sent!") {
      setIsButtonDisabled(true);
      setSentStatus("you already sent a message! ;)");
      return;
    }

    const data = { userName: name, userEmail: email, userMessage: message };
    sessionStorage.setItem("userContact", JSON.stringify(data));
    console.log("Data retrieved:", JSON.parse(sessionStorage.userContact));

    clearInputs();
    setSentStatus("sent!");
  }

  const clearInputs = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

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
          <div id="submit-div">
            <h4 className="purple-element">{sentStatus}</h4>
            <SubmitButton
              disabled={isButtonDisabled}
              type="submit"
              form="contact-form"
              onClick={(e) => handleSubmit(e)}
            >
              <h2>submit</h2>
            </SubmitButton>
          </div>
        </form>
      </ContactFormContainer>
    </Body>
  );
}

export default Contact;
