import React from "react";

import { PortfolioEntryList } from "@/content/PortfoilioEntries";
import type { PortfolioEntry, Skill } from "@/types/types";
import EntryCard from "@/components/EntryCard";

export function renderEntries(filter: Skill | ""): React.ReactNode[] {
  let entries: PortfolioEntry[] = PortfolioEntryList;
  if (filter !== "")
    entries = entries.filter((entry) => entry.skills.includes(filter));

  return entries.map((entry) => <EntryCard entry={entry} />);
}
