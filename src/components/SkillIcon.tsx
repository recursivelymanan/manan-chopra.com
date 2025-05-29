import React, { useState } from "react";
import { motion } from "framer-motion";

import { renderIcon } from "@/utils/iconRender";
import type { Skill } from "@/types/types";
import styles from "@/styles/PortfolioView.module.css";

interface SkillIconProps {
  iconName: Skill;
  onClick: () => void;
}

const SkillIcon: React.FC<SkillIconProps> = ({ iconName, onClick }) => {
  const icon: React.ReactNode = renderIcon(iconName, 35);
  const [hover, setHover] = useState<boolean>(false);

  return (
    <motion.div
      className={styles.icon}
      animate={{ scale: hover ? 1.4 : 1 }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      onClick={onClick}
    >
      {icon}
    </motion.div>
  );
};

export default SkillIcon;
