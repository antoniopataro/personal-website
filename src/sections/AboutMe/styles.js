import styled from "styled-components";

const AboutMeStyles = styled.section`
  display: flex;
  flex-direction: row;

  width: 60vw;

  justify-content: space-between;

  gap: 100px;
  padding: 100px 0;

  h2 {
    width: fit-content;
  }

  #about-me-container {
    display: flex;
    flex-direction: column;

    width: calc(30vw - 50px);

    gap: 30px;

    #social-links {
      display: flex;
      flex-direction: column;

      width: fit-content;

      gap: 20px;

      a {
        display: flex;
        flex-direction: row;

        width: fit-content;

        gap: 4px;
        padding: 8px 20px;

        border-radius: 4px;

        text-decoration: none;

        color: ${(props) => props.theme.inactiveText};
        background-color: ${(props) => props.theme.foreground};

        transition: 0.15s ease;
        transition-property: color;

        h4 {
          font-weight: 500;
        }

        img {
          pointer-events: none;

          transition: 0.15s ease;
          transition-property: filter transform;

          filter: ${(props) => props.theme.imageFilter};
        }

        :hover {
          color: ${(props) => props.theme.highlightedText};

          img {
            filter: ${(props) => props.theme.hoveredImageFilter};
            transform: translateX(2px) translateY(-2px);
          }
        }
      }
    }
  }

  #stacks {
    display: flex;
    flex-direction: column;

    width: calc(30vw - 50px);

    gap: 30px;

    a {
      display: flex;
      flex-direction: row;

      width: fit-content;

      gap: 10px;
      padding: 8px 20px;

      border-radius: 4px;

      text-decoration: none;

      color: ${(props) => props.theme.inactiveText};
      background-color: ${(props) => props.theme.foreground};

      transition: 0.15s ease;
      transition-property: color;

      h4 {
        font-weight: 500;
      }

      img {
        pointer-events: none;

        transition: 0.15s ease;
        transition-property: filter transform;

        filter: ${(props) => props.theme.imageFilter};
      }

      :hover {
        color: ${(props) => props.theme.highlightedText};

        img {
          filter: ${(props) => props.theme.hoveredImageFilter};
          transform: translateX(2px) translateY(-2px);
        }
      }
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;

    #about-me-container,
    #stacks {
      width: 100%;

      #social-links {
        flex-direction: row;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 50px 0;
    gap: 50px;
    #about-me-container {
      h2 {
        width: 100%;
      }

      #social-links {
        flex-direction: column;
      }
    }
  }
`;

export default AboutMeStyles;
