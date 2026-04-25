import Hero from "./components/Hero";
import Services from "./components/Services";
import Works from "./components/Works";
import ClientReview from "./components/ClientReview"
import Process from "./components/Proccess"

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Works />
      <ClientReview />
      <Process/>
      <section style={{ height: "100vh", background: "#de0015" }} />
    </main>
  );
}