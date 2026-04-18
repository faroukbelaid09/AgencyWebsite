"use client";

import worksData from "../data/workData";
import WorkCard from "./WorkCard";
import styles from "./Works.module.css";
import { motion } from "framer-motion";
import { useState } from 'react';

export default function Works() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className={styles.container}>
      <div className={styles.service_top_side}>

        {/* Title */}
        <motion.h2
          className={styles.title}
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0 }
          }}
        >
          Our Work
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className={styles.subtitle}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1 }
          }}
        >
          We build the next in commerce on Shopify. From strategy to design,
          development to retention, we've got you covered. 9+ years of experience,
          200+ stores launched, 60+ experts and we're your partner from discovery
          to launch and beyond.
        </motion.p>

        {/* CTA */}
        <motion.button
          className={styles.cta}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1 }
          }}
          transition={{ duration: 1, delay: 0.8 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover="hover"
        >
          <motion.span
            className={styles.bg}
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.08 }
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
              mass: 0.8
            }}
          />
          <span className={styles.label}>Work with us</span>
        </motion.button>
      </div>

      <div className={styles.service_bottom_side}>
        {worksData.map((work) => (
          <WorkCard
            key={work.id}
            work={work}
            active={activeCard === work.id}
            onClick={() =>
              setActiveCard(activeCard === work.id ? null : work.id)
            }
          />
        ))}
      </div>


    </div>
  );
}