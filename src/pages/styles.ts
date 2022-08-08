import styled from "styled-components";

const MainStyles = styled.main`
  display: flex;
  flex-direction: column;

  width: 100vw;
  min-height: 100vh;
  height: 100%;

  align-items: center;

  gap: 80px;
  padding: 160px 25vw;

  background-color: var(--background);

  ::before {
    content: "";
    pointer-events: none;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 100vw;
    height: 100vh;
    opacity: 0.1;
    background-image: url("/src/assets/bg-grid.svg");
  }

  @media (max-width: 768px) {
    gap: 60px;
    padding: 60px 15vw;
  }
`;

export default MainStyles;
