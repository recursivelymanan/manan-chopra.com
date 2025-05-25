import { useState } from "react";

import type { PageName } from "./types/types";

import ViewContainer from "./components/ViewContainer/ViewContainer";
import VerticalNavBar from "./components/VerticalNavBar/VeticalNavBar";

const MainPage = () => {
  const [view, setView] = useState<PageName>("Home");

  return (
    <div>
      <ViewContainer page={view} />
      <VerticalNavBar view={view} setView={setView} />
    </div>
  );
};

export default MainPage;
