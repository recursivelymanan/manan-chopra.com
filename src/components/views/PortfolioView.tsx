import { useState } from "react";

import { PortfolioEntryList } from "@/content/PortfoilioEntries";
import type { PortfolioEntry } from "@/types/types";
import SkillsFilter from "../SkillsFilter";

const PortfolioView = () => {
  const [displayedPortfolioEntries, setDisplayedPortfolioEntries] =
    useState<string>("hello");

  return (
    <div>
      <SkillsFilter
        setDisplayedPortfolioEntries={setDisplayedPortfolioEntries}
      />
      <span>{displayedPortfolioEntries}</span>
    </div>
  );
};

export default PortfolioView;
