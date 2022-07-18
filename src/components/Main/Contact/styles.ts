import styled from "styled-components";

const ContactStyles = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: fit-content;

  align-items: left;

  gap: 40px;

  h2 {
    width: fit-content;
  }

  ul {
    display: flex;
    flex-direction: column;

    width: fit-content;

    gap: 10px;

    li {
      list-style: none;

      display: flex;
      flex-direction: row;

      width: fit-content;

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
`;

export default ContactStyles;
