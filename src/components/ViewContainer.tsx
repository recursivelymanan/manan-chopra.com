import type React from "react";
import { motion, AnimatePresence } from "framer-motion";

import type { PageName } from "../types/types";
import HomeView from "./views/HomeView";
import PortfolioView from "./views/PortfolioView";
import ResumeView from "./views/ResumeView";
import ContactView from "./views/ContactView";

interface ViewContainerProps {
  page: PageName;
}

const ViewContainer: React.FC<ViewContainerProps> = ({ page }) => {
  function renderView(): React.ReactNode {
    switch (page) {
      case "Home":
        return <HomeView inHeader={false} />;
      case "Portfolio":
        return <PortfolioView />;
      case "Resume":
        return <ResumeView />;
      case "Contact":
        return <ContactView />;
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        key={page}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
      >
        {renderView()}
      </motion.div>
    </AnimatePresence>
  );
};

export default ViewContainer;
