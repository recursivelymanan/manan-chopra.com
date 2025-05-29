import type React from "react";

import { FaDocker } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { IoDocumentText } from "react-icons/io5";
import NextflowLogo from "@/assets/images/nextflow.svg";
import SnakemakeLogo from "@/assets/images/snakemake.svg";
import PythonLogo from "@/assets/images/python.svg";
import JupyterLogo from "@/assets/images/jupyter.svg";
import RLogo from "@/assets/images/Rlogo.svg";
import AWSLogo from "@/assets/images/aws-color.svg";
import BashLogo from "@/assets/images/bash.svg";

import type { Skill } from "@/types/types";

export function renderIcon(iconName: Skill, iconSize: number): React.ReactNode {
  switch (iconName) {
    case "Python":
      return (
        <img
          src={PythonLogo}
          width={iconSize}
          height={iconSize}
          title="Python"
        />
      );
    case "R":
      return <img src={RLogo} width={iconSize} height={iconSize} title="R" />;
    case "Jupyter Notebook":
      return (
        <img
          src={JupyterLogo}
          width={iconSize}
          height={iconSize}
          title="Jupyter Notebook"
        />
      );
    case "Typescript":
      return (
        <SiTypescript size={iconSize} color="#327ac7" title="Typescript" />
      );
    case "React":
    case "React-Native":
      return (
        <RiReactjsFill size={iconSize + 10} color="#58c3db" title="React" />
      );
    case "Scientific Writing":
      return <IoDocumentText size={iconSize} title="Scientific Writing" />;
    case "Nextflow":
      return (
        <img
          src={NextflowLogo}
          width={iconSize - 3}
          height={iconSize - 3}
          title="Nextflow"
        />
      );
    case "Snakemake":
      return (
        <img
          src={SnakemakeLogo}
          width={iconSize}
          height={iconSize}
          title="Snakemake"
        />
      );
    case "Docker":
      return <FaDocker size={iconSize + 3} color="#1c62ed" title="Docker" />;
    case "AWS":
      return (
        <img
          src={AWSLogo}
          width={iconSize + 5}
          height={iconSize + 5}
          title="AWS"
        />
      );
    case "Bash":
      return (
        <img
          src={BashLogo}
          width={iconSize + 10}
          height={iconSize + 10}
          title="Bash"
        />
      );
  }
}
