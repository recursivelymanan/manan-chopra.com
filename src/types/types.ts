export type PageName = "Home" | "Portfolio" | "Resume" | "Contact";

export type PortfolioEntryType = "Publication" | "Project" | "Presentation";

export type Skill =
  | "Python"
  | "R"
  | "Jupyter Notebook"
  | "Typescript"
  | "React"
  | "React-Native"
  | "Scientific Writing"
  | "Nextflow"
  | "Docker"
  | "AWS";

export type PortfolioEntry = {
  title: string;
  type: PortfolioEntryType;
  date: Date;
  description: string;
  skills: Skill[];
};
