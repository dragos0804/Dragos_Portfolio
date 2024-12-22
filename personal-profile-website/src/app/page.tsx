import About from "./sections/About";
import Hero from "./sections/Hero";
import Resume from "./sections/Resume";


export default function Home() {
  return (
    <>
      <Hero />
      <main id = "id">
        <About/>
        <Resume/>
      </main>
    </>
  );
}
