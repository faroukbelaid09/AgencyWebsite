"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./Navbar.module.css";
import MenuPanel from "./MenuPanel";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className={styles.navbar}>

                {/* Menu Button */}
                <motion.button
                    className={styles.menuBtn}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    onClick={() => setIsOpen(true)}
                >

                    {/* Icon */}
                    <motion.span
                        className={styles.icon}
                        variants={{
                            rest: { x: 0 },
                            hover: { x: 40, rotate: 180 }

                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 25
                        }}
                    >
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <circle cx="12" cy="12" r="12" fill="white" />

                            <path
                                d="M6 9H18M6 15H18"
                                stroke="#de0015"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </motion.span>

                    {/* Text */}
                    <motion.span
                        className={styles.label}
                        variants={{
                            rest: { opacity: 1, x: 0 },
                            hover: { opacity: 0, x: -10 }
                        }}
                        transition={{ duration: 0.2 }}
                    >
                        Menu
                    </motion.span>

                </motion.button>

                {/* Title */}
                <motion.h1 className={styles.Title}>
                    <span>Webly</span>
                </motion.h1>

                {/* Contact Button */}
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

            </nav>

            <MenuPanel isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
}