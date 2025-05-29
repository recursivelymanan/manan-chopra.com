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

import type { Skill } from "@/types/types";

const ICON_DIMENSION = 40;

export function renderIcon(iconName: Skill): React.ReactNode {
  switch (iconName) {
    case "Python":
      return (
        <img src={PythonLogo} width={ICON_DIMENSION} height={ICON_DIMENSION} />
      );
    case "R":
      return <img src={RLogo} width={ICON_DIMENSION} height={ICON_DIMENSION} />;
    case "Jupyter Notebook":
      return (
        <img src={JupyterLogo} width={ICON_DIMENSION} height={ICON_DIMENSION} />
      );
    case "Typescript":
      return <SiTypescript size={ICON_DIMENSION} color="#327ac7" />;
    case "React":
    case "React-Native":
      return <RiReactjsFill size={ICON_DIMENSION} color="#58c3db" />;
    case "Scientific Writing":
      return <IoDocumentText size={ICON_DIMENSION} />;
    case "Nextflow":
      return (
        <img
          src={NextflowLogo}
          width={ICON_DIMENSION}
          height={ICON_DIMENSION}
        />
      );
    case "Snakemake":
      return (
        <img
          src={SnakemakeLogo}
          width={ICON_DIMENSION}
          height={ICON_DIMENSION}
        />
      );
    case "Docker":
      return <FaDocker size={ICON_DIMENSION} color="#1c62ed" />;
    case "AWS":
      return (
        <img src={AWSLogo} width={ICON_DIMENSION} height={ICON_DIMENSION} />
      );
  }
}
