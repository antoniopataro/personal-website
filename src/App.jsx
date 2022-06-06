import React, { useState, useEffect, createContext } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./sections/Header";
import Introduction from "./sections/Introduction";
import AboutMe from "./sections/AboutMe";
import Portfolio from "./sections/Portfolio";
import Footer from "./sections/Footer";

import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh; //

  align-items: center;

  padding-bottom: 100px;

  color: ${(props) => props.theme.defaultText};
  background-color: ${(props) => props.theme.background};

  transition: 0.15s ease;
  transition-property: background-color;
`;

import "./App.css";

export const ThemeContext = createContext();

const dark = {
  primary: "#676CDB",
  primaryShadow: "rgba(103, 108, 219, 0.15)",
  background: "#1E2023",
  foreground: "#303238",
  inactiveText: "#6f6f6f",
  defaultText: "#D9D9D9",
  highlightedText: "#FFF",
  imageFilter: "invert(50%)",
  hoveredImageFilter: "invert(100%)",
  extremeColor: "#000",
};
const light = {
  primary: "#676CDB",
  primaryShadow: "rgba(103, 108, 219, 0.15)",
  background: "#D9D9D9",
  foreground: "#FFF",
  inactiveText: "#6f6f6f",
  defaultText: "#1E2023",
  highlightedText: "#000",
  imageFilter: "invert(50%)",
  hoveredImageFilter: "invert(0%)",
  extremeColor: "#FFF",
};

function App() {
  useEffect(() => {
    AOS.init({
      duration: 150,
      offset: 250,
    });
  }, []);

  const [theme, setTheme] = useState(dark);

  function toggleTheme() {
    theme === dark ? setTheme(light) : setTheme(dark);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <AppContainer theme={theme}>
        <Header />
        <Introduction />
        <AboutMe />
        <Portfolio />
        <Footer />
      </AppContainer>
    </ThemeContext.Provider>
  );
}

export default App;
