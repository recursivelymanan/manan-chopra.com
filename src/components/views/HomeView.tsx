import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import styles from "./../../styles/View.module.css";

interface HomeViewProps {
  inHeader: boolean;
}

// Main HomeView React component
const HomeView: React.FC<HomeViewProps> = ({ inHeader }) => {
  const [index, setIndex] = useState<number>(0);

  const scrollText: string[] = [
    "Computational Biologist 👨🏽‍💻",
    "Molecular Biologist 🧬",
    "Scientific Writer 📝",
    "Data Scientist 🔢",
    "Web Developer 💻",
    "App Developer 📱",
  ];

  useEffect(() => {
    const interval = setInterval(
      () => {
        setIndex((prev) => (prev + 1) % scrollText.length);
      },
      inHeader ? 4000 : 2500
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={inHeader ? styles.viewContainerInHeader : styles.viewContainer}
    >
      <div
        className={
          inHeader ? styles.titleContainerInHeader : styles.titleContainer
        }
      >
        {!inHeader && (
          <span className={styles.title}>My name is Manan Chopra</span>
        )}
        <span className={inHeader ? styles.subtitleInHeader : styles.subtitle}>
          I am a{"AEIOU".includes(scrollText[index].charAt(0)) ? "n" : ""}
        </span>
        <motion.span
          key={index}
          className={inHeader ? styles.scrollTextInHeader : styles.scrollText}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{
            type: "tween",
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          {scrollText[index]}
        </motion.span>
      </div>
    </div>
  );
};

export default HomeView;
