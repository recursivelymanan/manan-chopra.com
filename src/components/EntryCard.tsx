import React, { useState } from "react";
import { motion } from "framer-motion";

import styles from "@/styles/EntryCard.module.css";
import type { PortfolioEntry } from "@/types/types";
import { renderIcon } from "@/utils/iconRender";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface EntryCardProps {
  entry: PortfolioEntry;
}

const EntryCard: React.FC<EntryCardProps> = ({ entry }) => {
  const [hover, setHover] = useState<boolean>(false);
  const [repoLinkHover, setRepoLinkHover] = useState<boolean>(false);
  const [prodLinkHover, setProdLinkHover] = useState<boolean>(false);
  return (
    <motion.div
      className={styles.cardContainer}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      animate={{ scale: hover ? 1.05 : 1 }}
    >
      <div className={styles.link}>
        {entry.prodLink && (
          <FaExternalLinkAlt
            size={25}
            color={prodLinkHover ? "#007AFF" : "black"}
            onMouseEnter={() => setProdLinkHover(true)}
            onMouseLeave={() => setProdLinkHover(false)}
            onClick={() => window.open(entry.prodLink, "_blank")}
          />
        )}
        {entry.repoLink && (
          <FaGithub
            size={25}
            color={repoLinkHover ? "#007AFF" : "black"}
            onMouseEnter={() => setRepoLinkHover(true)}
            onMouseLeave={() => setRepoLinkHover(false)}
            onClick={() => window.open(entry.repoLink, "_blank")}
          />
        )}
      </div>
      <span className={styles.title}>{entry.title}</span>
      <span className={styles.type}>{entry.type.join(", ")}</span>
      <div className={styles.icons}>
        {entry.skills.map((skill) => renderIcon(skill, 30))}
      </div>
      <span className={styles.description}>{entry.description}</span>
    </motion.div>
  );
};

export default EntryCard;
