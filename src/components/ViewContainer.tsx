import type React from "react";
import { motion, AnimatePresence } from "framer-motion";

import type { PageName } from "../types/types";
import HomeView from "./views/HomeView";
import PortfolioView from "./views/PortfolioView";

import styles from "../styles/ViewContainer.module.css";

interface ViewContainerProps {
  page: PageName;
}

const ViewContainer: React.FC<ViewContainerProps> = ({ page }) => {
  function renderView(): React.ReactNode {
    switch (page) {
      case "Home":
        return (
          <div className={styles.viewContainer}>
            <HomeView />
          </div>
        );
      case "Portfolio":
        return (
          <div className={styles.viewContainer}>
            <PortfolioView />
          </div>
        );
    }
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={page}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
      >
        {renderView()}
      </motion.div>
    </AnimatePresence>
  );
};

export default ViewContainer;
