import About from "./components-sections/About";
import AlphaWarriorsLanding from "./components-sections/claude-demo";
import Hero from "./components-sections/Hero";
import LeadershipVoices from "./components-sections/LeadershipVoices";
import Navbar from "./components-sections/Navbar";
import Players from "./components-sections/Players";
import Stats from "./components-sections/Stats";

export default function Home() {
  return (
    <section>
      <div>
        <Navbar />
        <Hero />
        <Stats />
        <About />
        <Players />
        <LeadershipVoices />
      </div>
    </section>
  );
}
