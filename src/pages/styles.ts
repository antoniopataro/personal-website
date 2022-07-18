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

  @media (max-width: 768px) {
    gap: 60px;
    padding: 60px 15vw;
  }
`;

export default MainStyles;
