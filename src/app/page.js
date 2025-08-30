import AlphaWarriorsLanding from "./components-sections/claude-demo";
import Hero from "./components-sections/Hero";
import Navbar from "./components-sections/Navbar";

export default function Home() {
  return (
    <section>
      <div>
        <Navbar />
        <Hero />
        <AlphaWarriorsLanding />
      </div>
    </section>
  );
}
