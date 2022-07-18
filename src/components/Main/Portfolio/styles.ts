import styled from "styled-components";

const PortfolioStyles = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: fit-content;

  align-items: left;

  gap: 40px;

  h2 {
    width: fit-content;
  }

  .projects {
    display: flex;
    flex-direction: column;

    width: fit-content;

    align-items: left;

    gap: 10px;

    ul {
      display: flex;
      flex-direction: column;

      width: fit-content;

      li {
        list-style: none;

        width: fit-content;

        h3 {
          display: flex;
          flex-direction: row;

          width: fit-content;

          align-items: center;

          gap: 10px;
        }

        a {
          text-decoration: none;

          padding: 4px 8px;

          border-radius: 4px;

          color: inherit;
          background-color: transparent;

          transition: 0.15s ease;
          transition-property: background-color;

          :hover {
            background-color: var(--foreground);
          }
        }
      }
    }

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
`;

export default PortfolioStyles;
