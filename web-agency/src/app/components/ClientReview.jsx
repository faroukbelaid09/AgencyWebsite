"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MoveLeft, MoveRight } from "lucide-react";
import styles from "./ClientReview.module.css";

export default function ClientReview() {
    const testimonials = [
        {
            text: "Its comprehensive suite of tools, user-friendly interface, and robust performance have significantly enhanced our productivity.",
            name: "Jack William",
            role: "CEO of MarketingPoint",
            rating: 5,
            avatar: "https://i.pravatar.cc/100?img=1",
        },
        {
            text: "An incredible platform that simplified our workflow and improved efficiency across the board.",
            name: "Sarah Johnson",
            role: "Product Manager",
            rating: 5,
            avatar: "https://i.pravatar.cc/100?img=2",
        },
        {
            text: "Great experience! The UI is clean and the performance is outstanding. Highly recommended for teams looking to scale efficiently and maintain quality workflows across departments.",
            name: "Michael Lee",
            role: "CTO",
            rating: 5,
            avatar: "https://i.pravatar.cc/100?img=3",
        },
    ];

    const [index, setIndex] = useState(0);

    const prev = () => {
        setIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const next = () => {
        setIndex((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, 4000);

        return () => clearInterval(interval);
    }, [index]);

    const current = testimonials[index];

    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* LEFT */}
                <div className={styles.left}>
                    <h1 className={styles.title}>
                        Our Customers Love What <span className={styles.SubTitle}>We Do</span>
                    </h1>

                    <p className={styles.description}>
                        Don’t just take our word for it—read what our customers
                        have to say about our products, service, and experience.
                        Be part of the community!
                    </p>

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
                        <span className={styles.label}>Get in touch →</span>
                    </motion.button>
                </div>

                {/* RIGHT */}
                <div className={styles.right}>

                    {/* Controls */}
                    <div className={styles.controls}>
                        <button onClick={prev} className={styles.navBtn}>
                            {/* <ChevronLeft /> */}
                            <MoveLeft />
                        </button>

                        <button onClick={next} className={styles.navBtn}>
                            <MoveRight />
                        </button>
                    </div>

                    {/* Card Wrapper */}
                    <div className={styles.cardWrapper}>
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -60 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div>
                                <div className={styles.quote}>“</div>
                                <p className={styles.text}>{current.text}</p>
                            </div>


                            <div className={styles.footer}>
                                <div className={styles.user}>
                                    <img
                                        src={current.avatar}
                                        alt={current.name}
                                        className={styles.avatar}
                                    />
                                    <div>
                                        <p className={styles.name}>{current.name}</p>
                                        <p className={styles.role}>{current.role}</p>
                                    </div>
                                </div>

                                <div className={styles.rating}>
                                    {Array.from({ length: current.rating }).map((_, i) => (
                                        <span key={i}>★</span>
                                    ))}
                                    <span className={styles.score}>
                                        {current.rating}.0
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Progress */}
                        <div className={styles.progress}>
                            {testimonials.map((_, i) => (
                                <div
                                    key={i}
                                    className={`${styles.dot} ${i === index ? styles.active : ""
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}