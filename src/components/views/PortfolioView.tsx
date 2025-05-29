import { useState } from "react";

import { PortfolioEntryList } from "@/content/PortfoilioEntries";
import type { PortfolioEntry } from "@/types/types";
import SkillsFilter from "../SkillsFilter";

const PortfolioView = () => {
  const [displayedPortfolioEntries, setDisplayedPortfolioEntries] =
    useState<PortfolioEntry[]>(PortfolioEntryList);

  return (
    <div>
      <SkillsFilter
        setDisplayedPortfolioEntries={setDisplayedPortfolioEntries}
      />
    </div>
  );
};

export default PortfolioView;
