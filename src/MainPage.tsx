import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import type { PageName } from "./types/types";
import ViewContainer from "./components/ViewContainer";
import NavBar from "./components/NavBar";

import styles from "./styles/MainPage.module.css";
import { useWindowSize } from "@react-hookz/web";
import MobileNavBar from "./components/MobileNavBar";

const BREAKPOINT = 1050;

const MainPage = () => {
  const [view, setView] = useState<PageName>("Home");
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const { width } = useWindowSize();

  useEffect(() => {
    setIsMobile(width <= BREAKPOINT);
  }, [width]);

  return (
    <div className={styles.mainContainer}>
      <AnimatePresence mode="wait">
        <motion.div
          key={`${isMobile}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {isMobile ? (
            <MobileNavBar view={view} setView={setView} />
          ) : (
            <NavBar view={view} setView={setView} />
          )}
        </motion.div>
      </AnimatePresence>
      <ViewContainer page={view} />
    </div>
  );
};

export default MainPage;
