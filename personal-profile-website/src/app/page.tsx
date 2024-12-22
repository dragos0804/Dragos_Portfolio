import About from "./sections/About";
import Education from "./sections/Education";
import Hero from "./sections/Hero";
import Resume from "./sections/Resume";


export default function Home() {
  return (
    <>
      <Hero />
      <main id = "id">
        <About/>
        <Education />
        <Resume/>
      </main>
    </>
  );
}
