"use client";

import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import basePath from "../utils/basePath";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.content}
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.12,
              delayChildren: 0.2
            }
          }
        }}
      >

        {/* Title */}
        <motion.h1 className={styles.title}>

          <span className={styles.line}>
            <motion.span
              className={styles.reveal}
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              We build
            </motion.span>
          </span>

          <span className={styles.line}>
            <motion.span
              className={styles.reveal}
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              digital experiences
            </motion.span>
          </span>

        </motion.h1>

        {/* Image */}
        <motion.div
          className={styles.imageWrapper}
          initial={{ y: 60, scale: 0.95, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <img src={`${basePath}/hero.jpg`} alt="work" />
          
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Websites, apps, and brand design for modern businesses.
        </motion.p>

        {/* CTA */}
        <motion.button
          className={styles.cta}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1 }
          }}
          transition={{ duration: 1, delay:0.8}}
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
          <span className={styles.label}>Get Started</span>
        </motion.button>

      </motion.div>
    </section>
  );
}