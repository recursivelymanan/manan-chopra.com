export type PageName = "Home" | "Portfolio";

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
  | "AWS"
  | "Bash";

export const Skills: Skill[] = [
  "Python",
  "Jupyter Notebook",
  "R",
  "Bash",
  "Nextflow",
  "Snakemake",
  "Typescript",
  "React",
  "Docker",
  "AWS",
  "Scientific Writing",
];

export type PortfolioEntry = {
  title: string;
  type: string[];
  date?: Date;
  description: string;
  skills: Skill[];
  repoLink?: string;
  prodLink?: string;
};
