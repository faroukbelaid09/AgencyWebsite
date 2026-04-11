"use client";

import { motion } from "framer-motion";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section className={styles.services}>

      <motion.div
        className={styles.content}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
      >

        {/* Title */}
        <motion.h2
          className={styles.title}
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0 }
          }}
        >
          We create digital products
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className={styles.subtitle}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1 }
          }}
        >
          Websites, apps, and brand identities that help businesses grow.
        </motion.p>

        {/* Cards */}
        <div className={styles.grid}>

          {[
            {
              title: "Web Development",
              desc: "Fast, modern, and scalable websites.",
              icon: "/web-dev.png"
            },
            {
              title: "App Development",
              desc: "Custom apps built for performance.",
              icon: "/app-dev.png"
            },
            {
              title: "Branding",
              desc: "Logos and identity that stand out.",
              icon: "/design.png"
            }
          ].map((service, i) => (
            <motion.div
              key={i}
              className={styles.card}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -8 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
            >
              {/* Icon */}
              <div className={styles.iconWrapper}>
                <img src={service.icon} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}

        </div>

      </motion.div>

    </section>
  );
}