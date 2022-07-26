import styled from "styled-components";

const HeaderStyles = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: fit-content;

  align-items: left;

  gap: 40px;

  .top {
    display: flex;
    flex-direction: row;

    width: 100%;

    align-items: center;
    justify-content: space-between;

    .left {
      display: flex;
      flex-direction: row;

      width: fit-content;

      align-items: center;

      gap: 20px;

      img {
        border-radius: 50%;

        box-shadow: -5px -5px 10px #191919, 5px 5px 10px #131313;

        pointer-events: none;
      }

      .info {
        display: flex;
        flex-direction: column;

        width: fit-content;

        align-items: left;

        .name {
          display: flex;
          flex-direction: row;

          width: fit-content;

          gap: 10px;
        }
      }
    }

    .right {
      display: flex;
      flex-direction: row;

      align-items: center;

      gap: 20px;

      button,
      a {
        position: relative;

        ::after {
          top: -70%;
        }

        display: grid;
        place-items: center;

        width: 50px;
        height: 50px;

        outline: none;
        border: none;

        border-radius: 10px;

        cursor: pointer;

        background-color: transparent;

        transition: 0.15s ease;
        transition-property: background-color;

        :hover {
          background-color: var(--foreground);

          img {
            transform: scale(1.1);
          }
        }

        img {
          pointer-events: none;

          transition: 0.15s ease;
          transition-property: transform;

          pointer-events: none;
        }
      }
    }
  }

  .bottom {
    a {
      color: inherit;

      :hover img {
        transform: translateX(2px) translateY(-2px);
      }

      img {
        margin-left: 4px;

        transition: 0.15s ease;
        transition-property: transform;

        pointer-events: none;
      }
    }
  }

  @media (max-width: 500px) {
    .top {
      .left {
        gap: 10px;

        img {
          :first-child {
            width: 30px;
            height: 30px;
          }

          width: 16px;
          height: 16px;
        }
      }

      .right {
        gap: 4px;

        button,
        a {
          width: 30px;
          height: 30px;

          border-radius: 10px;

          img {
            :first-child {
              width: 12px;
              height: 12px;
            }

            width: 16px;
            height: 16px;
          }
        }
      }
    }
  }
`;

export default HeaderStyles;
