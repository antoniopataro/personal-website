import styled from "styled-components";

const Body = styled.section`
  display: flex;
  flex-direction: row;

  max-width: clamp(1100px, 75vw, 1400px);
  width: 100%;
  height: clamp(500px, 50vw, 700px);
  margin: 0 auto;

  padding: 0 5vw;
  padding-bottom: clamp(75px, 7.5vw, 150px);

  justify-content: space-between;
`;

const AboutMeLeft = styled.div`
  display: flex;
  flex-direction: column;

  width: fit-content;

  align-items: left;
  justify-content: center;

  .topic {
    display: flex;
    flex-direction: row;

    width: 100%;

    gap: 1%;
    color: #bfbfbf;
  }

  #about-me-title {
    padding-top: 75px;
    color: white;
    width: fit-content;
  }

  #about-me-subtitle {
    width: 100%;
    color: #bfbfbf;
  }
`;

const AboutMeRight = styled.div`
  display: flex;
  align-items: flex-end;

  text-align: right;

  white-space: nowrap;

  #scroll-for-more {
    color: #bfbfbf;
    cursor: default;
  }

  @media (max-width: calc(768px - 1px)) {
    display: none;
  }
`;

export { Body, AboutMeLeft, AboutMeRight };
