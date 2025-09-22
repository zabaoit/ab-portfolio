import { Element } from "react-scroll";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Skills from "../components/Skills";
import About from "../components/About";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
        <Element name="Home">
          <Hero />
        </Element>
      </header>
      <section>
        <Element name="Work">
          <Work />
        </Element>
        <Element name="Skills">
          <Skills />
        </Element>
        <Element name="About">
          <About />
        </Element>
        <Element name="Contact">
          <Contact />
        </Element>
      </section>
    </>
  );
};

export default Home;
