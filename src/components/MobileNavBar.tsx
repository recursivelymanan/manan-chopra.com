import React, { useState } from "react";
import { FaHome, FaBriefcase, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { motion } from "framer-motion";

import Resume from "@/assets/resume/chopra_manan_resume.pdf";
import type { PageName } from "@/types/types";
import NavLink from "./NavLink";

import styles from "../styles/MobileNavBar.module.css";
import { useMeasure } from "@react-hookz/web";

interface MobileNavBarProps {
  view: PageName;
  setView: React.Dispatch<React.SetStateAction<PageName>>;
}

const MobileNavBar: React.FC<MobileNavBarProps> = ({ view, setView }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [measurements, ref] = useMeasure<HTMLDivElement>();
  const height = measurements ? measurements.height : 0;

  const transition = {
    type: "spring",
    stiffness: 50,
    damping: 10,
    duration: 0.05,
  };

  return (
    <motion.div
      className={styles.mainContainer}
      animate={{ height: height }}
      transition={transition}
    >
      <motion.div
        ref={ref}
        className={styles.absolute}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className={styles.buttonContainer}>
          {isOpen ? (
            <div className={styles.buttonContainer}>
              <NavLink
                title={"Home"}
                onClick={() => {
                  setView("Home");
                  setIsOpen(false);
                }}
                mobile={true}
                isActive={view === "Home"}
                icon={<FaHome className={styles.icon} />}
              />
              <NavLink
                title={"Portfolio"}
                onClick={() => {
                  setView("Portfolio");
                  setIsOpen(false);
                }}
                mobile={true}
                isActive={view === "Portfolio"}
                icon={<FaBriefcase className={styles.icon} />}
              />
              <div className={styles.divider}></div>
              <a href={Resume} download="chopra_resume.pdf">
                <NavLink
                  title={"Download Resume"}
                  icon={<IoDocumentText className={styles.icon} />}
                  mobile={true}
                  onClick={() => setIsOpen(false)}
                />
              </a>
              <NavLink
                title={"GitHub"}
                onClick={() => {
                  window.open("https://github.com/recursivelymanan", "_blank");
                  setIsOpen(false);
                }}
                icon={<FaGithub className={styles.icon} />}
                mobile={true}
              />
              <NavLink
                title={"LinkedIn"}
                onClick={() => {
                  window.open(
                    "https://linkedin.com/in/manan-chopra22",
                    "_blank"
                  );
                  setIsOpen(false);
                }}
                icon={<FaLinkedin className={styles.icon} />}
                mobile={true}
              />
              <NavLink
                title={"Google Scholar"}
                onClick={() => {
                  window.open(
                    "https://scholar.google.com/citations?user=Y4X6FpIAAAAJ&hl=en&oi=ao",
                    "_blank"
                  );
                  setIsOpen(false);
                }}
                mobile={true}
                icon={<FaGoogleScholar className={styles.icon} />}
              />
            </div>
          ) : (
            <span
              className={styles.menuText}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              Menu
            </span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
  {
    /* {isOpen && (
        <div className={styles.buttonContainer}>
          <NavLink
            title={"Home"}
            onClick={() => {
              setView("Home");
              setIsOpen(false);
            }}
            mobile={true}
            isActive={view === "Home"}
            icon={<FaHome className={styles.icon} />}
          />
          <NavLink
            title={"Portfolio"}
            onClick={() => {
              setView("Portfolio");
              setIsOpen(false);
            }}
            mobile={true}
            isActive={view === "Portfolio"}
            icon={<FaBriefcase className={styles.icon} />}
          />
          <div className={styles.divider}></div>
          <a href={Resume} download="chopra_resume.pdf">
            <NavLink
              title={"Download Resume"}
              icon={<IoDocumentText className={styles.icon} />}
              mobile={true}
              onClick={() => setIsOpen(false)}
            />
          </a>

          <NavLink
            title={"GitHub"}
            onClick={() => {
              window.open("https://github.com/recursivelymanan", "_blank");
              setIsOpen(false);
            }}
            icon={<FaGithub className={styles.icon} />}
            mobile={true}
          />
          <NavLink
            title={"LinkedIn"}
            onClick={() => {
              window.open("https://linkedin.com/in/manan-chopra22", "_blank");
              setIsOpen(false);
            }}
            icon={<FaLinkedin className={styles.icon} />}
            mobile={true}
          />
          <NavLink
            title={"Google Scholar"}
            onClick={() => {
              window.open(
                "https://scholar.google.com/citations?user=Y4X6FpIAAAAJ&hl=en&oi=ao",
                "_blank"
              );
              setIsOpen(false);
            }}
            mobile={true}
            icon={<FaGoogleScholar className={styles.icon} />}
          />
        </div>
      )} */
  }
};

export default MobileNavBar;
