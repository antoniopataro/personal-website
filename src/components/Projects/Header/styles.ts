import styled from "styled-components";

const HeaderStyles = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: fit-content;

  gap: 40px;

  .top {
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    .left {
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

    .right {
      display: flex;
      flex-direction: row;

      align-items: center;

      gap: 20px;

      button {
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
        }

        img {
          pointer-events: none;
        }
      }
    }
  }

  .info {
    display: flex;
    flex-direction: row;

    width: 100%;

    align-items: center;
    justify-content: space-between;

    .external {
      display: flex;
      flex-direction: row;

      width: fit-content;

      align-items: center;

      gap: 20px;

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
  }

  @media (max-width: 550px) {
    .info {
      flex-direction: column;

      gap: 30px;
    }
  }
`;

export default HeaderStyles;
