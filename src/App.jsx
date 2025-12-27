import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import About from "./sections/About";
import Navbar from "./components/NavBar";
import SmoothScrollWrapper from "./components/SmoothScrollWrapper";

const App = () => (
  <SmoothScrollWrapper>
    <Navbar />
    <Hero />
    <About />
    <ShowcaseSection />
    <Experience />
    <Skills />
    <Contact />
    <Footer />
  </SmoothScrollWrapper>
);

export default App;
