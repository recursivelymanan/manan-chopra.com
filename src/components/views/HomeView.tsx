import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import styles from "./../../styles/View.module.css";

const HomeView = () => {
  const scrollText: string[] = [
    "Computational Biologist 👨🏽‍💻",
    "Molecular Biologist 🧬",
    "Scientific Writer 📝",
    "Data Scientist 🔢",
    "Web Developer 💻",
    "App Developer 📱",
  ];
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % scrollText.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.view}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>My name is Manan Chopra</span>
        <span className={styles.subtitle}>
          I am a{"AEIOU".includes(scrollText[index].charAt(0)) ? "n" : ""}
        </span>
        <motion.span
          key={index}
          className={styles.scrollText}
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
