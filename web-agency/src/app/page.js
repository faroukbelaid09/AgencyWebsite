import Hero from "./components/Hero";
import Services from "./components/Services";
import Works from "./components/Works";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Works />

      <section style={{ height: "100vh", background: "#4e1818" }} />
      <section style={{ height: "100vh", background: "#de0015" }} />
    </main>
  );
}