import styled from "styled-components";

const NavBar = styled.div`
  display: flex;
  flex-direction: row;

  max-width: clamp(1100px, 75vw, 1400px);
  width: 100%;
  margin: 0 auto;

  height: 100%;

  align-items: center;
  justify-content: space-between;

  padding: 10vh 5vw;

  #navbar-left {
    display: flex;
    flex-direction: row;
    gap: 100px;
  }

  #navbar-right {
    display: flex;
    flex-direction: row;

    height: 40px;

    align-items: center;

    gap: 5px;

    cursor: default;

    color: white;
  }

  @media (max-width: calc(768px - 1px)) {
    justify-content: center;
    a {
      display: none;
    }
  }
`;

const NavBarItem = styled.div`
  display: flex;
  flex-direction: row;

  height: 40px;

  align-items: center;

  gap: 30px;

  cursor: pointer;

  color: #bfbfbf;

  transition: color linear 0.1s;

  :hover {
    border-bottom: 2px solid #676cdb;
    color: #fff;
  }
`;

export { NavBar, NavBarItem };
