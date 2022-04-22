import React from "react";

import "./App.css";

import Header from "./components/sections/Header.jsx";
import AboutMe from "./components/sections/AboutMe.jsx";
import Skills from "./components/sections/Skills.jsx";
import Contact from "./components/sections/Contact.jsx";
import Footer from "./components/sections/Footer.jsx";

function App() {
  return (
    <main className="App" id="about-me">
      <Header></Header>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
}

export default App;
