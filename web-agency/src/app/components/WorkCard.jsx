"use client";

import { motion } from "framer-motion";
import styles from "./Works.module.css";

export default function WorkCard({ work }) {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.card_title}
        >
          {work.title}
        </motion.h1>

        <p className={styles.card_description}>{work.description}</p>

        <div className={styles.card_tags}>
          {work.tags.map((tag, i) => (
            <span key={i} className={styles.card_tag}>
              {tag}
            </span>
          ))}
        </div>

        <button className={styles.card_button}>View Project</button>
        
      </div>
    </div>
  );
}