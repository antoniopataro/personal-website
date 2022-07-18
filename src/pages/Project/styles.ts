import styled from "styled-components";

const ProjectStyles = styled.main`
  display: flex;
  flex-direction: column;

  width: 100vw;
  min-height: 100vh;
  height: 100%;

  align-items: center;

  gap: 80px;
  padding: 160px 25vw;

  background-color: var(--background);

  .video {
    width: 100%;

    aspect-ratio: 16/9;

    border-radius: 10px;

    background-color: var(--foreground);

    pointer-events: none;
  }

  @media (max-width: 768px) {
    gap: 60px;
    padding: 60px 15vw;
  }
`;

export default ProjectStyles;
