import type React from "react";

import type { PageName } from "../types/types";
import HomeView from "./views/HomeView";
import PortfolioView from "./views/PortfolioView";
import ResumeView from "./views/ResumeView";
import ContactView from "./views/ContactView";

interface ViewContainerProps {
  page: PageName;
}

const ViewContainer: React.FC<ViewContainerProps> = ({ page }) => {
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
};

export default ViewContainer;
