import type React from "react";
import type { PageName } from "../../types/types";

interface NavLinkProps {
  title: string;
  onClick: () => void;
  activeView: PageName;
}

const NavLink: React.FC<NavLinkProps> = ({ title, onClick, activeView }) => {
  return (
    <div className={`${activeView === title ? "active-" : ""}nav-link`}>
      <p onClick={onClick}>{title}</p>
    </div>
  );
};

export default NavLink;
