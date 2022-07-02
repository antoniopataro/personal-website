import styled from "styled-components";

const FooterStyles = styled.footer`
  display: grid;
  place-items: center;

  width: 60vw;

  align-items: center;
  justify-content: center;

  gap: 100px;
  padding: 100px 0;

  #footer-cta-wrapper {
    position: relative;

    display: flex;

    width: 60vw;
    height: 200px;

    align-items: center;
    justify-content: center;

    #footer-background-text {
      position: absolute;

      z-index: 0;

      background-image: linear-gradient(90deg, rgba(30, 32, 35, 0.25) 0%, rgba(217, 217, 217, 1) 100%);

      text-align: center;
      line-height: 100px;

      cursor: default;
      pointer-events: none;

      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    #footer-cta {
      display: flex;
      flex-direction: row;

      z-index: 1;

      width: clamp(200px, 40%, 350px);

      align-items: center;
      justify-content: space-between;

      padding: 20px 30px;

      border: none;
      border-radius: 4px;
      outline: none;

      font-family: "Inter", sans-serif;
      font-weight: 500;

      cursor: pointer;

      transform: translateY(5px);

      color: ${(props) => props.theme.highlightedText};
      background-color: ${(props) => props.theme.extremeColor};

      animation: scaleCtaOut 0.15s ease-in-out forwards;

      :hover {
        animation: scaleCtaIn 0.15s ease-in-out forwards;
      }

      @keyframes scaleCtaIn {
        from {
          transform: translateY(5px) scale(1);
        }
        to {
          transform: translateY(5px) scale(1.025);
        }
      }

      @keyframes scaleCtaOut {
        from {
          transform: translateY(5px) scale(1.025);
        }
        to {
          transform: translateY(5px) scale(1);
        }
      }

      :hover #cta-shortcut {
        color: ${(props) => props.theme.highlightedText};
      }

      #cta-shortcut {
        display: flex;
        flex-direction: row;

        align-items: center;

        gap: 10px;

        color: ${(props) => props.theme.inactiveText};

        transition: color 0.15s ease;

        #shortcut {
          display: grid;
          place-items: center;

          width: 30px;
          height: 30px;

          border-radius: 4px;

          background-color: ${(props) => props.theme.background};
        }
      }
    }
  }

  #description {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    width: 100%;

    text-align: center;

    a {
      color: ${(props) => props.theme.inactiveText};
    }

    #author {
      color: ${(props) => props.theme.highlightedText};
    }

    #figma {
      color: ${(props) => props.theme.inactiveText};
    }
  }

  #modal-container {
    position: fixed;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;

    pointer-events: none;
    opacity: 0;

    z-index: 2;

    width: 100vw;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.5);

    transition: 0.15s ease;
    transition-property: opacity;

    #modal {
      position: absolute;

      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;

      opacity: 0;
      transform: scale(0.95);

      display: flex;
      flex-direction: column;

      width: 600px;
      height: 400px;

      align-items: center;
      justify-content: space-between;

      padding: 60px 0;

      border-radius: 4px;

      background-color: ${(props) => props.theme.foreground};

      transition: 0.15s ease;
      transition-property: opacity transform;

      #close-modal-button {
        position: absolute;

        top: 20px;
        right: 20px;

        height: fit-content;
        width: fit-content;

        border: none;
        outline: none;

        font-family: "Inter", sans-serif;
        font-weight: 500;

        cursor: pointer;

        color: ${(props) => props.theme.inactiveText};
        background-color: transparent;

        transition: 0.15s ease;
        transition-property: color;

        :hover {
          color: ${(props) => props.theme.highlightedText};
        }
      }

      #social {
        display: flex;
        flex-direction: row;

        gap: 20px;

        a img {
          filter: ${(props) => props.theme.imageFilter};

          transition: 0.15s ease;
          transition-property: filter;

          :hover {
            filter: ${(props) => props.theme.hoveredImageFilter};
          }
        }
      }

      #send-me-an-email {
        display: flex;
        flex-direction: column;

        width: 100%;

        align-items: center;

        gap: 20px;

        #e-mail-container {
          display: flex;
          flex-direction: column;

          align-items: center;

          gap: 10px;

          #e-mail {
            display: flex;
            flex-direction: row;

            align-items: center;
            gap: 10px;

            padding: 8px 12px;

            border-radius: 4px;

            cursor: default;

            color: ${(props) => props.theme.inactiveText};
            background-color: ${(props) => props.theme.background};

            transition: 0.15s ease;
            transition-property: color;

            :hover {
              color: ${(props) => props.theme.highlightedText};

              button {
                background-color: ${(props) => props.theme.foreground};
              }

              button img {
                filter: ${(props) => props.theme.hoveredImageFilter};
              }
            }

            button {
              display: grid;
              place-items: center;

              width: 30px;
              height: 30px;

              transform: translateX(4px);

              border: none;
              outline: none;

              cursor: pointer;

              border-radius: 4px;

              background-color: transparent;
              transition-property: background-color;

              img {
                filter: ${(props) => props.theme.imageFilter};

                transition: 0.15s ease;
                transition-property: filter;
              }
            }
          }

          #e-mail-shortcut-container {
            display: flex;
            flex-direction: row;

            align-items: center;

            gap: 5px;

            color: ${(props) => props.theme.inactiveText};

            h4 {
              font-size: clamp(12px, 1vw, 14px);
            }
          }
        }
      }
    }
  }

  #toast {
    position: fixed;

    z-index: 3;

    display: grid;
    place-items: center;

    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;

    width: fit-content;

    padding: 16px 24px;

    border-radius: 4px;

    color: ${(props) => props.theme.text};
    background: ${(props) => props.theme.extremeColor};

    opacity: 0;

    transform: translateY(30px);
    overflow: hidden;

    transition: 0.15s ease;
    transition-property: opacity, transform;
  }

  @media (max-width: 1200px) {
    #footer-cta-wrapper {
      #footer-cta {
        padding: 10px 15px;
      }
    }
  }

  @media (max-width: 768px) {
    #modal-container {
      #modal {
        width: calc(100vw - 30px);
        height: 50vh;
      }
    }
  }
`;

export default FooterStyles;
