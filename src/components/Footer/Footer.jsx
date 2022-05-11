import React from "react";

import { Body, Logo, SocialMedia } from "../../styles/FooterStyles.jsx";

import githubIcon from "../../assets/social-icons/githubIcon.svg";
import instagramIcon from "../../assets/social-icons/instagramIcon.svg";
import linkedinIcon from "../../assets/social-icons/linkedinIcon.svg";
import twitterIcon from "../../assets/social-icons/twitterIcon.svg";

function Footer() {
  return (
    <Body>
      <Logo>
        <h2 className="purple-element">&#60;</h2>
        <h2>antoniopataro</h2>
        <h2 className="purple-element">/&#62;</h2>
      </Logo>

      <SocialMedia>
        <a
          href="https://github.com/antoniopataro"
          target={"_blank"}
          rel="noreferrer"
        >
          <img
            src={githubIcon}
            className="social-media-icon"
            alt="Github"
            width="50px"
            height="50px"
          />
        </a>

        <a
          href="https://www.instagram.com/antoniopataro"
          target={"_blank"}
          rel="noreferrer"
        >
          <img
            src={instagramIcon}
            className="social-media-icon"
            alt="Instagram"
            width="50px"
            height="50px"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/antoniopataro"
          target={"_blank"}
          rel="noreferrer"
        >
          <img
            src={linkedinIcon}
            className="social-media-icon"
            alt="LinkedIn"
            width="50px"
            height="50px"
          />
        </a>

        <a
          href="https://twitter.com/antoniopataro"
          target={"_blank"}
          rel="noreferrer"
        >
          <img
            src={twitterIcon}
            className="social-media-icon"
            alt="Twitter"
            width="50px"
            height="50px"
          />
        </a>
      </SocialMedia>

      <h5 className="copyright">© 2022 Antônio Pataro</h5>
    </Body>
  );
}

export default Footer;
