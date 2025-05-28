import type React from "react";
import { motion } from "framer-motion";
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
    <motion.div
      className={styles.navBar}
      initial={{ width: 60, height: 60 }}
      whileHover={{ width: 240, height: 60 }}
    >
      <div className={styles.buttonContainer}>
        <NavLink
          title={"Home"}
          onClick={() => setView("Home")}
          activeView={view}
          icon={<FaHome className={styles.icon} />}
        />
        <NavLink
          title={"Portfolio"}
          onClick={() => setView("Portfolio")}
          activeView={view}
          icon={<FaBriefcase className={styles.icon} />}
        />
        <NavLink
          title={"Resume"}
          onClick={() => setView("Resume")}
          activeView={view}
          icon={<IoDocumentText className={styles.icon} />}
        />
        <NavLink
          title={"Contact"}
          onClick={() => setView("Contact")}
          activeView={view}
          icon={<RiContactsBook2Fill className={styles.icon} />}
        />
      </div>
    </motion.div>
  );
};

export default NavBar;
