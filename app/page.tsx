import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Marquee from "./components/Marquee";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" role="main">
        <Hero />
        <div className="section-divider" role="separator" aria-hidden="true" />
        <Services />
        <div className="section-divider" role="separator" aria-hidden="true" />
        <Projects />
        <Marquee />
        <Skills />
        <div className="section-divider" role="separator" aria-hidden="true" />
        <About />
        <div className="section-divider" role="separator" aria-hidden="true" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
