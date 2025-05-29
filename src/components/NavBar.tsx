import type React from "react";
import { FaHome, FaBriefcase } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { RiContactsBook2Fill } from "react-icons/ri";

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
        isActive={view === "Home"}
        icon={<FaHome className={styles.icon} />}
      />
      <NavLink
        title={"Portfolio"}
        onClick={() => setView("Portfolio")}
        isActive={view === "Portfolio"}
        icon={<FaBriefcase className={styles.icon} />}
      />
      <NavLink
        title={"Resume"}
        onClick={() => setView("Resume")}
        isActive={view === "Resume"}
        icon={<IoDocumentText className={styles.icon} />}
      />
      <NavLink
        title={"Contact"}
        onClick={() => setView("Contact")}
        isActive={view === "Contact"}
        icon={<RiContactsBook2Fill className={styles.icon} />}
      />
    </div>
  );
};

export default NavBar;
