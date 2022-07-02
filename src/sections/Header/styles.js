import styled from "styled-components";

const HeaderStyles = styled.header`
  display: flex;
  flex-direction: row;

  width: 60vw;

  padding: 100px 0;

  align-items: center;
  justify-content: space-between;

  #header-left {
    display: flex;
    flex-direction: row;

    align-items: center;

    gap: 30px;

    font-size: 18px;
    font-weight: 400;

    button {
      height: 50px;
      width: 50px;

      border: none;
      border-radius: 4px;
      outline: none;

      cursor: pointer;

      background-color: ${(props) => props.theme.foreground};

      :hover img {
        filter: ${(props) => props.theme.hoveredImageFilter};
      }

      img {
        pointer-events: none;
        filter: ${(props) => props.theme.imageFilter};

        transition: 0.15s ease;
        transition-property: filter;
      }
    }

    #welcome-text {
      display: flex;
      flex-direction: row;

      align-items: center;

      gap: 4px;

      #waving-emoji {
        margin-right: 6px;

        animation: waving 1s ease-in-out infinite alternate;

        @keyframes waving {
          0% {
            transform: rotate(-10deg);
          }
          30% {
            transform: rotate(10deg);
          }
          60% {
            transform: rotate(0deg);
          }
        }
      }
    }
  }

  #header-right {
    display: flex;
    flex-direction: row;

    gap: 30px;

    font-size: 18px;

    a {
      font-weight: 400;

      text-decoration: none;
      color: ${(props) => props.theme.inactiveText};

      transition: 0.15s ease;
      transition-property: color;

      :hover {
        color: ${(props) => props.theme.highlightedText};
      }
    }
  }

  @media (max-width: 1152px) {
    #my-name-is {
      display: none;
    }
  }

  @media (max-width: 960px) {
    #header-left {
      #welcome-text {
        display: none;
      }
    }

    #header-right {
      width: 100%;

      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    padding: 50px 0;

    gap: 30px;

    #header-left {
      button {
        z-index: 2;

        bottom: 10vw;
        right: 10vw;

        margin: auto;
      }
    }
  }

  @media (max-width: 500px) {
    #header-right {
      flex-direction: column;

      align-items: center;
    }
  }
`;

export default HeaderStyles;
