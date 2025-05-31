import React from "react";
import { FaHome, FaBriefcase, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";

import Resume from "@/assets/resume/chopra_manan_resume.pdf";
import type { PageName } from "../types/types";
import NavLink from "./NavLink";

import styles from "../styles/NavBar.module.css";

interface NavBarProps {
  view: PageName;
  setView: React.Dispatch<React.SetStateAction<PageName>>;
}

const NavBar: React.FC<NavBarProps> = ({ view, setView }) => {
  return (
    <div className={styles.buttonContainer}>
      <NavLink
        title={"Home"}
        onClick={() => setView("Home")}
        mobile={false}
        isActive={view === "Home"}
        icon={<FaHome className={styles.icon} />}
      />
      <NavLink
        title={"Portfolio"}
        onClick={() => setView("Portfolio")}
        mobile={false}
        isActive={view === "Portfolio"}
        icon={<FaBriefcase className={styles.icon} />}
      />
      <div className={styles.divider}></div>
      <a href={Resume} download="chopra_resume.pdf">
        <NavLink
          title={"Download Resume"}
          icon={<IoDocumentText className={styles.icon} />}
          mobile={false}
        />
      </a>

      <NavLink
        title={"GitHub"}
        onClick={() =>
          window.open("https://github.com/recursivelymanan", "_blank")
        }
        icon={<FaGithub className={styles.icon} />}
        mobile={false}
      />
      <NavLink
        title={"LinkedIn"}
        onClick={() =>
          window.open("https://linkedin.com/in/manan-chopra22", "_blank")
        }
        icon={<FaLinkedin className={styles.icon} />}
        mobile={false}
      />
      <NavLink
        title={"Google Scholar"}
        onClick={() =>
          window.open(
            "https://scholar.google.com/citations?user=Y4X6FpIAAAAJ&hl=en&oi=ao",
            "_blank"
          )
        }
        mobile={false}
        icon={<FaGoogleScholar className={styles.icon} />}
      />
    </div>
  );
};

export default NavBar;
