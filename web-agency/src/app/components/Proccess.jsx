"use client";

import styles from "./Process.module.css";
import { Search, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    desc: "We understand your business and goals."
  },
  {
    icon: PenTool,
    title: "Design",
    desc: "We craft modern and intuitive experiences."
  },
  {
    icon: Code,
    title: "Build",
    desc: "We develop fast and scalable products."
  },
  {
    icon: Rocket,
    title: "Launch",
    desc: "We deliver and help you grow."
  }
];

export default function Process() {
  return (
    <section className={styles.process}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>4 SIMPLE STEPS</span>
          <h2>Effortless Process, Continuous Supply</h2>
        </div>

        <div className={styles.grid}>
          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <div key={i} className={styles.card}>
                <div className={styles.icon}>
                  <Icon size={20} />
                </div>

                <span className={styles.index}>
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}