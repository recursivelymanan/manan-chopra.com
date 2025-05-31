import React, { useState } from "react";
import { motion } from "framer-motion";

import { useMeasure } from "@react-hookz/web";

import styles from "../styles/NavLink.module.css";

interface NavLinkProps {
  title: string;
  icon: React.ReactNode;
  mobile: boolean;
  onClick?: () => void;
  isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({
  title,
  icon,
  mobile,
  onClick,
  isActive,
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

  return mobile ? (
    <div className={styles.mobileButton} onClick={onClick}>
      <div className={styles.mobileRow}>
        {icon}
        <p className={styles.text}>{title}</p>
      </div>
    </div>
  ) : (
    <motion.div
      className={styles.button}
      animate={{ width: width }}
      onClick={onClick}
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      transition={transition}
    >
      <motion.div
        ref={ref}
        className={styles.absolute}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {isHover || isActive ? (
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
