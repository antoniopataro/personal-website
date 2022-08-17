import styled from "styled-components";

const NotFoundStyles = styled.main`
  display: flex;
  flex-direction: column;

  width: 100vw;
  min-height: 100vh;
  height: 100%;

  gap: 80px;
  padding: 160px 25vw;

  background-color: var(--background);

  ::before {
    position: fixed;
    content: "";
    pointer-events: none;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 100vw;
    height: 100vh;
    opacity: 0.05;
    background-image: url("https://raw.githubusercontent.com/antoniopataro/personal-website/1bc8592e7607735a51f1488a8c55e281f1af80a1/src/assets/bg-grid.svg");
  }

  button {
    outline: none;
    border: none;

    display: grid;
    place-items: center;

    width: 50px;
    height: 50px;

    border-radius: 50%;

    box-shadow: -5px -5px 10px #191919, 5px 5px 10px #131313;

    cursor: pointer;

    background-color: var(--background);

    :hover {
      img {
        transform: translateX(-2px);
      }
    }

    img {
      pointer-events: none;

      transition: 0.15s ease;
      transition-property: transform;
    }
  }

  span {
    display: flex;
    flex-direction: column;

    align-items: center;

    gap: 40px;

    span {
      display: flex;
      flex-direction: row;

      gap: 4px;
    }
  }

  @media (max-width: 768px) {
    padding: 80px 10vw;
  }
`;

export default NotFoundStyles;
