import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useMeasure } from "@react-hookz/web";
import { Flex } from "@chakra-ui/react";

import type { PageName } from "../types/types";

import styles from "../styles/NavLink.module.css";

interface NavLinkProps {
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
  activeView: PageName;
}

const NavLink: React.FC<NavLinkProps> = ({
  title,
  icon,
  onClick,
  activeView,
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [measurements, ref] = useMeasure<HTMLDivElement>();
  const width = measurements ? measurements.width : 0;

  const transition = {
    type: "spring",
    stiffness: 50,
    damping: 10,
    duration: 0.05,
  };

  return (
    <motion.div
      className={
        activeView === title
          ? `${styles.activeButton} ${styles.button}`
          : styles.button
      }
      animate={{ width: isHover ? width + 0 : width }}
      onClick={onClick}
      onHoverStart={() => setIsHover((prev) => !prev)}
      onHoverEnd={() => setIsHover((prev) => !prev)}
      transition={transition}
    >
      <motion.div
        ref={ref}
        className={styles.absolute}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {isHover ? (
          <div className={styles.flexRow}>
            {icon}
            <p className={styles.text}>{title}</p>
          </div>
        ) : (
          icon
        )}
      </motion.div>
    </motion.div>
  );
};

export default NavLink;
