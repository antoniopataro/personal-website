import styled from "styled-components";

const Body = styled.div`
  display: flex;
  flex-direction: row;

  max-width: clamp(1100px, 75vw, 1400px);
  width: 100%;
  height: fit-content;
  margin: 0 auto;

  padding: clamp(75px, 7.5vw, 150px) 5vw;

  gap: 5vw;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

    gap: 10vh;
  }
`;

const ContactLeft = styled.div`
  color: #bfbfbf;
  width: 50%;

  h1 {
    display: flex;
    flex-direction: column;
  }

  .topic {
    display: flex;
    flex-direction: row;

    gap: 1%;
  }

  #contact-title {
    color: #fff;
    padding-top: 75px;
    line-height: 112px;
  }

  #contact-subtitle {
    margin-top: 20px;
    color: #bfbfbf;
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;

    h1 {
      display: flex;
      flex-direction: row;

      gap: 2%;
    }

    #contact-subtitle {
      width: 75%;
    }
  }

  @media (max-width: 375px) {
    h1 {
      display: flex;
      flex-direction: column;
    }
    #contact-title {
      color: #fff;
      padding-top: 75px;
      line-height: 64px;
    }
  }
`;

const ContactFormContainer = styled.div`
  color: #bfbfbf;

  width: 50%;

  #contact-form {
    display: flex;
    flex-direction: column;

    gap: 50px;

    width: 100%;

    .input-section {
      display: flex;
      flex-direction: column;

      h3 {
        padding-left: 30px;
      }
      gap: 30px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  #submit-div {
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;
  }
`;

const ContactInput = styled.input`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 18px;

  width: 100%;
  height: 70px;

  padding: 0 30px;

  border: none;

  background: #1f2632;
  border-radius: 15px;

  color: ${(props) => props.textcolor};

  :focus {
    outline: none;
  }
`;

const ContactTextarea = styled.textarea`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 35px;

  width: 100%;
  height: 140px;

  padding: 15px 30px;

  border: none;
  resize: none;

  background: #1f2632;
  border-radius: 15px;

  color: ${(props) => props.textcolor};
  :focus {
    outline: none;
  }
`;

const SubmitButton = styled.button`
  position: relative;
  display: flex;

  width: fit-content;
  margin-right: 30px;

  justify-content: right;

  border: none;

  background-color: transparent;

  color: #bfbfbf;

  cursor: pointer;

  transition: color linear 0.1s;

  :hover {
    border-bottom: 2px solid #676cdb;
    color: #fff;
  }
`;

export {
  Body,
  ContactLeft,
  ContactFormContainer,
  ContactInput,
  ContactTextarea,
  SubmitButton,
};
