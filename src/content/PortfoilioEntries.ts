import type { PortfolioEntry } from "@/types/types";

export const PortfolioEntryList: PortfolioEntry[] = [
  {
    title: "RGC-iN Paper",
    type: ["npj Publication"],
    date: new Date(2023, 6),
    description:
      "Study outlining protocol for direct differentiation of retinal ganglion cells from human stem cells, and thorough bioinformatics analysis and validation of the generated cells, including both bulk and single-cell RNAseq.",
    skills: [
      "Python",
      "R",
      "Jupyter Notebook",
      "Bash",
      "Snakemake",
      "Scientific Writing",
    ],
    repoLink: "https://github.com/WahlinLab/Human_RGC-iN",
    prodLink: "https://www.nature.com/articles/s41536-023-00327-x",
  },
  {
    title: "NGS Bulk RNAseq Workflow",
    type: ["Nextflow Pipeline"],
    description:
      "Nextflow pipeline for processing of raw bulk RNAseq files with Docker containerization.",
    skills: ["Nextflow", "Docker", "AWS"],
    repoLink: "https://github.com/recursivelymanan/NGS-bulk-pipeline",
  },
  {
    title:
      "Validation of Organoid-Derived Photoreceptors through Single-Cell RNAseq",
    type: ["MS Thesis"],
    description:
      "Single-cell RNAseq analysis of induced human photoreceptor cells sorted from whole retinal organoids. Goal of the thesis was to validate the photoreceptor identity of these in vitro cells.",
    skills: ["Python", "Jupyter Notebook", "Bash", "Scientific Writing"],
    repoLink:
      "https://github.com/recursivelymanan/Validation-of-Human-Organoid-Derived-PRs",
  },
  {
    title: "RGC-iN Single-Cell RNAseq Poster",
    type: ["ARVO Presentation & Publication"],
    description:
      "Poster presentation on single-cell RNA sequencing analysis of induced retinal ganglion cells.",
    skills: ["Python", "Jupyter Notebook", "Bash", "Scientific Writing"],
    prodLink: "https://iovs.arvojournals.org/article.aspx?articleid=2798699",
  },

  {
    title: "RGC-iN RNAseq Poster ",
    type: ["ARVO Presentation & Publication"],
    description:
      "Poster presentation on early transcriptional dynamics of induced retinal ganglion cells.",
    skills: ["Python", "Jupyter Notebook", "Bash", "Scientific Writing"],
    prodLink: "https://iovs.arvojournals.org/article.aspx?articleid=2786985",
  },
  {
    title: "Retinal Organoid ATACseq Paper",
    type: ["Cells Publication"],
    description:
      "Study investigating cellular and molecular changes in developing, early-stage retinal organoids derived from human stem cells. Compared chromatin accessibility with gene transcription activity.",
    skills: ["Python", "Jupyter Notebook", "Scientific Writing"],
    repoLink:
      "https://github.com/WahlinLab/Retinal-Organoid-ATAC-RNAseq_Cells_2022",
    prodLink: "https://www.mdpi.com/2073-4409/11/21/3412",
  },

  {
    title: "Muller Glia Review Paper",
    type: ["Stem Cell Research Publication"],
    description:
      "Review article on the state of research in Muller glia driven regeneration.",
    skills: ["Scientific Writing"],
    prodLink: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10783479/",
  },
  {
    title: "manan-chopra.com",
    type: ["Website"],
    description:
      "Portfolio website to display my projects, publications, and experience.",
    skills: ["React", "Typescript"],
    repoLink: "https://github.com/recursivelymanan/manan-chopra.com",
  },

  {
    title: "Genedex",
    type: ["Mobile App"],
    description: "Mobile app for quick gene lookup.",
    skills: ["React-Native", "Typescript"],
    repoLink: "https://github.com/recursivelymanan/Genedex",
    prodLink: "https://apple.co/3Z4EcHV",
  },

  {
    title: "Crossworder",
    type: ["Project [In development]"],
    description: "Web app to make building crosswords easy.",
    skills: ["React", "Typescript"],
  },
];
