import { rgba } from "framer-motion";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <Hero/>
      
      {/* Section 2 */}
      <section style={{
        height: "100vh",
        background: "#d7d7d7"
      }} />

      {/* Section 3 */}
      <section style={{
        height: "100vh",
        background: "#de0015"
      }} />
    </main>
  );
}