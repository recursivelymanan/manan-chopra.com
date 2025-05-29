import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMeasure } from "@react-hookz/web";
import { IoCloseCircle } from "react-icons/io5";

import styles from "@/styles/PortfolioView.module.css";
import { Skills, type PortfolioEntry } from "@/types/types";
import SkillIcon from "./SkillIcon";

interface SkillsFilterProps {
  setDisplayedPortfolioEntries: React.Dispatch<
    React.SetStateAction<PortfolioEntry[]>
  >;
}

const SkillsFilter: React.FC<SkillsFilterProps> = ({
  setDisplayedPortfolioEntries,
}) => {
  const [showIcons, setShowIcons] = useState<boolean>(false);
  const [closeButtonHover, setCloseButtonHover] = useState<boolean>(false);
  const [measure, ref] = useMeasure<HTMLDivElement>();
  const width = measure ? measure.width : 0;

  const transition = {
    type: "spring",
    stiffness: 50,
    damping: 10,
    duration: 0.05,
  };

  return (
    <motion.div
      className={styles.inlineContainer}
      animate={{ width: width }}
      transition={transition}
    >
      <motion.div
        ref={ref}
        className={styles.absolute}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <AnimatePresence>
          {!showIcons ? (
            <div
              className={styles.filterText}
              onClick={() => setShowIcons(true)}
            >
              <span className={styles.filterText}>Filter Options</span>
            </div>
          ) : (
            <motion.div
              className={styles.filterContainer}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4 }}
            >
              {Skills.map((skill) => (
                <SkillIcon key={skill} iconName={skill} />
              ))}
              <IoCloseCircle
                size={30}
                onClick={() => setShowIcons(false)}
                color={closeButtonHover ? "#f58495" : "black"}
                onMouseEnter={() => setCloseButtonHover(true)}
                onMouseLeave={() => setCloseButtonHover(false)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default SkillsFilter;
