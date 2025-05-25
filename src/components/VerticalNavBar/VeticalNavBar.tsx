import type React from "react";
import type { PageName } from "../../types/types";
import NavLink from "../NavLink/NavLink";

interface VerticalNavBarProps {
  view: PageName;
  setView: React.Dispatch<React.SetStateAction<PageName>>;
}

const VerticalNavBar: React.FC<VerticalNavBarProps> = ({ view, setView }) => {
  return (
    <div>
      <NavLink
        title={"Home"}
        onClick={() => setView("Home")}
        activeView={view}
      />
      <NavLink
        title={"Portfolio"}
        onClick={() => setView("Portfolio")}
        activeView={view}
      />
      <NavLink
        title={"Resume"}
        onClick={() => setView("Resume")}
        activeView={view}
      />
      <NavLink
        title={"Contact"}
        onClick={() => setView("Contact")}
        activeView={view}
      />
    </div>
  );
};

export default VerticalNavBar;
