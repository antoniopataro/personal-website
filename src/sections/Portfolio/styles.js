import styled from "styled-components";

const PortfolioStyles = styled.section`
  display: flex;
  flex-direction: column;

  width: 60vw;

  gap: 60px;
  padding: 100px 0;

  #section-title {
    display: flex;
    flex-direction: row;

    align-items: center;

    gap: 20px;

    h4 {
      color: ${(props) => props.theme.inactiveText};
    }
  }

  #projects-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    width: 100%;

    gap: 60px;

    .project {
      display: flex;
      flex-direction: row;

      width: max-content;

      align-items: center;

      gap: 30px;

      .project-icon {
        display: grid;
        place-items: center;

        width: 80px;
        height: 80px;

        border-radius: 4px;

        background-color: ${(props) => props.theme.foreground};

        :hover {
          img {
            pointer-events: none;
            animation: shakeIcon 0.5s ease-in-out forwards;

            @keyframes shakeIcon {
              0% {
                transform: rotate(-5deg);
              }
              50% {
                transform: rotate(5deg);
              }
              100% {
                transform: rotate(0deg);
              }
            }
          }
        }
      }

      .project-info {
        display: flex;
        flex-direction: column;

        gap: 10px;

        h3 {
          font-weight: 500;
          color: ${(props) => props.theme.highlightedText};
        }

        a {
          display: flex;
          flex-direction: row;

          gap: 4px;

          font-weight: 400;
          text-decoration: none;

          color: ${(props) => props.theme.inactiveText};

          transition: 0.15s ease;
          transition-property: filter, color;

          :hover {
            color: ${(props) => props.theme.highlightedText};
          }

          :hover img {
            filter: ${(props) => props.theme.hoveredImageFilter};
            transform: translateX(2px) translateY(-2px);
          }
        }

        img {
          pointer-events: none;
          filter: ${(props) => props.theme.imageFilter};

          transition: 0.15s ease;
          transition-property: filter transform;
        }
      }
    }
  }

  #see-more-projects {
    display: flex;

    font-weight: 400;
    text-align: center;

    gap: 10px;
    margin: 0 auto;

    a {
      position: relative;

      margin-left: 0.25rem;
      color: ${(props) => props.theme.highlightedText};
    }

    img {
      pointer-events: none;
      filter: ${(props) => props.theme.imageFilter};
    }
  }

  @media (min-width: 1920px) {
    #projects-wrapper {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 768px) {
    padding: 50px 0;
  }
`;

export default PortfolioStyles;
