import { Element } from "react-scroll";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Skills from "../components/Skills";
import About from "../components/About";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Element name="Home">
        <Hero />
      </Element>
      <Element name="Work">
        <Work />
      </Element>
      <Element name="Skills">
        <Skills />
      </Element>
      <Element name="About">
        <About />
      </Element>
    </div>
  );
};

export default Home;
