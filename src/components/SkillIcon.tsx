import React, { useState } from "react";
import { motion } from "framer-motion";
import { useMeasure } from "@react-hookz/web";

import { renderIcon } from "@/utils/iconRender";
import type { Skill } from "@/types/types";
import styles from "@/styles/PortfolioView.module.css";

interface SkillIconProps {
  iconName: Skill;
}

const SkillIcon: React.FC<SkillIconProps> = ({ iconName }) => {
  const icon: React.ReactNode = renderIcon(iconName);
  const [hover, setHover] = useState<boolean>(false);
  const [measurements, ref] = useMeasure<HTMLDivElement>();
  const width = measurements ? measurements.width : 0;

  const transition = {
    type: "spring",
    stiffness: 50,
    damping: 10,
    duration: 0.05,
  };

  return hover ? (
    <div className={styles.flexRow}>
      {icon}
      <span>{iconName}</span>
    </div>
  ) : (
    icon
  );
};

export default SkillIcon;
// { hover ? (
//          {icon}
//       <span>{iconName}</span>
//       ) : icon }
