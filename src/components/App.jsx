import React from "react";

import "../styles/App.css";

import Header from "./Header/Header.jsx";
import AboutMe from "./Main/AboutMe.jsx";
import Skills from "./Main/Skills.jsx";
import Contact from "./Main/Contact.jsx";
import Footer from "./Footer/Footer.jsx";

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
