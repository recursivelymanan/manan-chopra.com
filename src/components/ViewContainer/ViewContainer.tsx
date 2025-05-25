import type React from "react";

import type { PageName } from "../../types/types";

import HomeView from "../views/HomeView/HomeView";
import PortfolioView from "../views/PortfolioView/PortfolioView";
import ResumeView from "../views/ResumeView/ResumeView";
import ContactView from "../views/ContactView/ContactView";

interface ViewContainerProps {
  page: PageName;
}

const ViewContainer: React.FC<ViewContainerProps> = ({ page }) => {
  switch (page) {
    case "Home":
      return <HomeView />;
    case "Portfolio":
      return <PortfolioView />;
    case "Resume":
      return <ResumeView />;
    case "Contact":
      return <ContactView />;
  }
};

export default ViewContainer;
