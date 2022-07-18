import styled from "styled-components";

const TechnologiesStyles = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: fit-content;

  align-items: left;

  gap: 40px;

  h2 {
    width: fit-content;
  }

  ul {
    display: flex;
    flex-wrap: wrap;

    width: 100%;
    height: fit-content;

    align-items: center;
    justify-content: center;

    gap: 15px;
    padding: 40px 0;

    li {
      list-style: none;

      display: grid;
      place-items: center;

      height: fit-content;

      opacity: 0;

      img {
        height: fit-content;

        pointer-events: none;
      }
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default TechnologiesStyles;
