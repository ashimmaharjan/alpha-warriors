import AlphaWarriorsLanding from "./components-sections/claude-demo";
import Hero from "./components-sections/Hero";
import Navbar from "./components-sections/Navbar";
import Stats from "./components-sections/Stats";

export default function Home() {
  return (
    <section>
      <div>
        <Navbar />
        <Hero />
        <Stats />
        <AlphaWarriorsLanding />
      </div>
    </section>
  );
}
