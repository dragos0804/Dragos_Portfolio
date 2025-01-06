import About from "./sections/About";
import Awards from "./sections/Awards";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";
import Skills from "./sections/Skills";


export default function Home() {
  return (
    <>
      <Hero />
      <main id = "id">
        <About/>
        <Education/>
        <Resume/>
        <Certifications/>
        <Awards />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
