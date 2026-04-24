import Hero from "./components/Hero";
import Services from "./components/Services";
import Works from "./components/Works";
import ClientReview from "./components/ClientReview"

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Works />
      <ClientReview />
      
      {/* <section style={{ height: "100vh", background: "#faf8f7" }} /> */}
      <section style={{ height: "100vh", background: "#de0015" }} />
    </main>
  );
}