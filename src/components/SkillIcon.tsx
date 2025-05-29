import React, { useState } from "react";
import { motion } from "framer-motion";

import { renderIcon } from "@/utils/iconRender";
import type { Skill } from "@/types/types";
import styles from "@/styles/PortfolioView.module.css";

interface SkillIconProps {
  iconName: Skill;
  setDisplayedPortfolioEntries: React.Dispatch<React.SetStateAction<string>>;
}

const SkillIcon: React.FC<SkillIconProps> = ({
  iconName,
  setDisplayedPortfolioEntries,
}) => {
  const icon: React.ReactNode = renderIcon(iconName);
  const [hover, setHover] = useState<boolean>(false);

  return (
    <motion.div
      className={styles.icon}
      animate={{ scale: hover ? 1.4 : 1 }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      onClick={() => setDisplayedPortfolioEntries(iconName)}
    >
      {icon}
    </motion.div>
  );
};

export default SkillIcon;
