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
