import { useState } from "react";

import type { Skill } from "@/types/types";
import SkillsFilter from "../SkillsFilter";
import { renderEntries } from "@/utils/filterEntries";
import styles from "@/styles/PortfolioView.module.css";

const PortfolioView = () => {
  const [displayFilter, setDisplayFilter] = useState<Skill | "">("");

  return (
    <div className={styles.portfoilioViewContainer}>
      {/* <div className={styles.filterOuterContainer}>
        <SkillsFilter setDisplayFilter={setDisplayFilter} />
      </div> */}
      <div className={styles.cardGrid}>{renderEntries(displayFilter)}</div>
    </div>
  );
};

export default PortfolioView;
