import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../../App";

import linkedinIcon from "../../assets/social-icons/linkedinIcon.svg";
import githubIcon from "../../assets/social-icons/githubIcon.svg";
import instagramIcon from "../../assets/social-icons/instagramIcon.svg";
import copyToClipboardIcon from "../../assets/copyToClipboardIcon.svg";

import FooterStyles from "./styles";

function Footer() {
  const { theme } = useContext(ThemeContext);

  const [newToast, setNewToast] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalContainerStyles = {};
  const modalStyles = {};

  const handleKeyPress = (e) => {
    const key = e.key.toLowerCase();
    const ctrl = e.ctrlKey;

    if (isModalOpen && ctrl && key === "c") {
      copyEmail();
      return;
    }

    if (key === "c") {
      toggleModal();
      return;
    }

    if (isModalOpen && key === "escape") {
      setIsModalOpen(false);
      return;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  function copyEmail() {
    navigator.clipboard.writeText("antoniopatarodev@gmail.com");
    handleToast();
  }

  function handleToast() {
    setNewToast(true);

    setTimeout(() => {
      setNewToast(false);
    }, 2000);
  }

  if (isModalOpen) {
    modalContainerStyles.opacity = "1";
    modalContainerStyles.pointerEvents = "auto";

    modalStyles.opacity = 1;
    modalStyles.transform = `scale(1)`;
  }

  const toastStyles = {};

  if (newToast) {
    toastStyles.opacity = 1;
    toastStyles.transform = `translateY(-30px)`;
  }

  return (
    <FooterStyles id="lets-connect" theme={theme}>
      <div id="footer-cta-wrapper" data-aos="fade-in">
        <div id="footer-background-text">
          <h1>
            Let's
            <br /> Connect
          </h1>
        </div>
        <button id="footer-cta" onClick={() => toggleModal()}>
          <h4>Click here!</h4>
          <div id="cta-shortcut">
            <h4>Press</h4>
            <div id="shortcut">C</div>
          </div>
        </button>
      </div>
      <div id="description">
        <h4>
          <p>
            Build by{" "}
            <a target="_blank" href="https://www.linkedin.com/in/antoniopataro/">
              <span id="author">Antônio Pataro</span>
            </a>
            <br />
            <br />
            <span id="figma">You can press Ctrl + Q to toggle the theme.</span>
          </p>
        </h4>
      </div>
      <div id="modal-container" style={modalContainerStyles}>
        <div id="modal" style={modalStyles}>
          <h2>Let's Connect!</h2>
          <button id="close-modal-button" onClick={() => toggleModal()}>
            Close
          </button>
          <div id="social">
            <a target="_blank" href="https://github.com/antoniopataro">
              <img src={githubIcon} alt="Github" width={40} />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/antoniopataro/">
              <img src={linkedinIcon} alt="LinkedIn" width={40} />
            </a>
            <a target="_blank" href="https://www.instagram.com/antoniopataro/">
              <img src={instagramIcon} alt="Instagram" width={40} />
            </a>
          </div>
          <div id="send-me-an-email">
            <div id="e-mail-container">
              <div id="e-mail">
                <h4>antoniopatarodev@gmail.com</h4>
                <button onClick={copyEmail}>
                  <img src={copyToClipboardIcon} alt="" width={15} />
                </button>
              </div>
              <div id="e-mail-shortcut-container">
                <h4>Copy or press Ctrl + C</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="toast" style={toastStyles}>
        <h3>Copied to clipboard!</h3>
      </div>
    </FooterStyles>
  );
}

export default Footer;
