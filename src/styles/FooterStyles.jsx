import styled from "styled-components";

const Body = styled.section`
  display: flex;
  flex-direction: column;

  max-width: clamp(1100px, 75vw, 1400px);
  width: 100%;
  height: fit-content;
  margin: 0 auto;

  padding: 0 5vw;
  padding-top: 150px;
  padding-bottom: 2vh;

  align-items: center;

  gap: 50px;

  color: #bfbfbf;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;

  color: white;

  gap: 5px;
`;

const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;

  .social-media-icon {
    pointer-events: none;
    cursor: pointer;

    width: clamp(35px, 5vw, 50px);
  }
`;

export { Body, Logo, SocialMedia };
