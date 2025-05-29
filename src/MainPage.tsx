import { useState } from "react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";

import type { PageName } from "./types/types";
import ViewContainer from "./components/ViewContainer";
import NavBar from "./components/NavBar";

import styles from "./styles/MainPage.module.css";

const MainPage = () => {
  const [view, setView] = useState<PageName>("Home");

  return (
    <div className={styles.mainContainer}>
      <NavBar view={view} setView={setView} />
      <ViewContainer page={view} />
    </div>
  );
};

export default MainPage;
