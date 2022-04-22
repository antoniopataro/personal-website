import styled from "styled-components";

const Background = styled.section`
  width: 100%;

  background-color: #1f2632;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;

  max-width: clamp(1100px, 75vw, 1400px);
  height: fit-content;
  margin: 0 auto;

  padding: clamp(75px, 7.5vw, 150px) 5vw;
`;

const Topic = styled.div`
  .topic {
    display: flex;
    flex-direction: row;

    gap: 1%;

    color: #bfbfbf;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;

  width: 100%;

  padding: 100px 0;

  .card {
    width: clamp(120px, 27vw, 275px);
    height: 325px;
    border-radius: 15px;
  }

  #designer-card {
    background: #29313d;
  }
  #frontend-card {
    background: #676cdb;
  }
  #backend-card {
    background: #29313d;
  }

  .card-content {
    display: flex;
    flex-direction: column;

    height: 100%;

    justify-content: space-between;

    padding: 45px clamp(30px, 4vw, 45px);

    color: #fff;
  }

  .card-subtitle {
    color: #bfbfbf;
  }

  .card-icon {
    pointer-events: none;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

    gap: 2vh;

    .card {
      width: 100%;
      height: 200px;
      border-radius: 15px;
    }
  }
`;

const Technologies = styled.div`
  display: flex;
  flex-direction: row;

  pointer-events: none;

  max-width: clamp(1100px, 75vw, 1400px);

  height: 100%;

  justify-content: center;

  #technologies-wrapper {
    display: flex;
    flex-direction: row;

    width: 600px;

    justify-content: space-between;
  }

  .technology-card {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: space-between;

    gap: 20px;

    color: #5e646d;
  }

  .technology-icon {
    width: clamp(35px, 5vw, 50px);
  }
`;

export { Background, Body, Topic, Cards, Technologies };
