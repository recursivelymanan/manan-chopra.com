export type PageName = "Home" | "Portfolio" | "Resume" | "Contact";

export type PortfolioEntryType = "Publication" | "Project" | "Presentation";

export type StatusType = "in development" | "live" | "published";

export type Skill =
  | "Python"
  | "R"
  | "Jupyter Notebook"
  | "Typescript"
  | "React"
  | "React-Native"
  | "Scientific Writing"
  | "Nextflow"
  | "Snakemake"
  | "Docker"
  | "AWS";

export const Skills: Skill[] = [
  "Python",
  "R",
  "Jupyter Notebook",
  "Typescript",
  "React",
  "Scientific Writing",
  "Nextflow",
  "Snakemake",
  "Docker",
  "AWS",
];

export type PortfolioEntry = {
  title: string;
  type: PortfolioEntryType[];
  date?: Date;
  description: string;
  skills: Skill[];
  repoLink?: string;
  prodLink?: string;
  status?: "live";
};
