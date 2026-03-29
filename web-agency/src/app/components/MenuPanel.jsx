"use client";

import { motion, AnimatePresence } from "framer-motion";
import styles from "./MenuPanel.module.css";

export default function MenuPanel({ isOpen, setIsOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.panel}
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1]
          }}
        >

          {/* Close */}
          <button
            className={styles.close}
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>

          <motion.div
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
          >

            {/* Menu items */}
            <motion.ul className={styles.menu}>
              {["Home", "Work", "About"].map((item) => (
                <motion.li
                  key={item}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            {/* Contact Button */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
            >
              <motion.button
                className={styles.contactBtn}
                initial="rest"
                animate="rest"
                whileHover="hover"
              >
                {/* Background */}
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

                {/* Text */}
                <span className={styles.label}>Contact</span>
              </motion.button>
            </motion.div>

          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}