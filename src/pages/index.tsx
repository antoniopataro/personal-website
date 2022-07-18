import About from "../components/Main/About";
import Header from "../components/Main/Header";
import Contact from "../components/Main/Contact";
import Portfolio from "../components/Main/Portfolio";
import Technologies from "../components/Main/Technologies";

import MainStyles from "./styles";

import "../global.css";

function Main() {
  return (
    <MainStyles>
      <Header />
      <About />
      <Technologies />
      <Portfolio />
      <Contact />
    </MainStyles>
  );
}

export default Main;
