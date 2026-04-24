"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Palette } from "lucide-react";
import styles from "./Services.module.css";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Fast, modern, and scalable websites.",
      icon: Code,
    },
    {
      title: "App Development",
      description: "Custom apps built for performance.",
      icon: Smartphone,
    },
    {
      title: "Branding",
      description: "Clear, distinctive brand identities.",
      icon: Palette,
    },
  ];

  return (
    <section className={styles.section}>

      <div className={styles.container}>

        {/* LEFT */}
        <motion.div>
          <div className={styles.left}>
            <motion.h1 className={styles.title}>
              We create digital <span className={styles.SubTitle}>Products</span>
            </motion.h1>

            <motion.p className={styles.description}>
              We design and build refined digital experiences that combine clarity, performance, and timeless aesthetics.
            </motion.p>

            <motion.div >
              <button className={styles.button}>
                Get in touch →
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <div className={styles.cards}>
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                className={styles.card}
              >
                <div className={styles.iconWrap}>
                  <Icon className={styles.icon} />
                </div>

                <div>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDesc}>{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

    </section>
  );
}