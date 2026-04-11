import { rgba } from "framer-motion";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Services/>
      {/* Section 2 */}
      
      <section style={{
        height: "100vh",
        background: "#4e1818"
      }} />

      {/* Section 3 */}
      <section style={{
        height: "100vh",
        background: "#de0015"
      }} />
    </main>
  );
}