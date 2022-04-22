import React from "react";

import { NavBar, NavBarItem } from "../styles/sections/HeaderStyles";

import { NavBarLinks } from "./NavBarLinks";

function Header() {
  return (
    <NavBar>
      <nav>
        <div id="navbar-left">
          {NavBarLinks.map((link) => {
            return (
              <a href={link.url} key={link.id}>
                <NavBarItem>
                  <h2>{link.text}</h2>
                </NavBarItem>
              </a>
            );
          })}
        </div>
      </nav>
      <div id="navbar-right" className="logo">
        <h2 className="purple-element">&#60;</h2>
        <h2>antoniopataro</h2>
        <h2 className="purple-element">/&#62;</h2>
      </div>
    </NavBar>
  );
}

export default Header;
