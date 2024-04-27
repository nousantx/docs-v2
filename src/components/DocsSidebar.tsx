import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useStyles } from "../hooks/useStyles";
import { ReactNode, useState } from "react";

type ToggleButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  toggleSidebar: any;
};

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  toggleSidebar,
  children,
  ...props
}) => {
  return (
    <button onClick={toggleSidebar} {...props}>
      {children}
    </button>
  );
};

const DocsSidebar: React.FC = () => {
  const location = useLocation();
  const isInDocs = location.pathname.startsWith("/docs");
  if (!isInDocs) {
    return null;
  }

  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  const sidebarPosition = sidebar ? "0" : "-100%"; // Toggle sidebar position
  useStyles(sidebar);

  return (
    <aside className="fx-15% relative z-1000">
      <ToggleButton
        toggleSidebar={toggleSidebar}
        className="btn d-[docs-sidebar-toggle] flex-center min-md-none position-fixed t-0 pv-1rem pl-2rem bg-[neutral-100]"
      >
        <p className="flex-center text-base tc-[neutral-900] gap-6px">
          <span className="ms-sharp text-md">sort</span>
          <span className="font-medium">TenoxUI</span>
        </p>
      </ToggleButton>
      <div
        className={`bg-[neutral-100] ph-2rem pv-1rem position-[docs-position] t-0 mt-5px l-${sidebarPosition} h-100vh pt-2rem`}
      >
        <div className="flex flex-center relative gap-2rem">
          <Link to="/" className="min-md-none">
            <header className="flex ai-center">
              <p className="flex-center text-base">
                <span className="font-medium">TenoxUI</span>
              </p>
            </header>
          </Link>
          <ToggleButton
            toggleSidebar={toggleSidebar}
            className="btn min-md-none"
          >
            <span className="tc-[neutral-900] ms-round text-sm">close</span>
          </ToggleButton>
        </div>

        {/* Button to toggle sidebar */}
        <ul>
          <li>
            <NavLink to="/docs/classes">Classes</NavLink>
          </li>
          <ul>
            {/* Add link to Flex Docs */}
            <li>
              <NavLink to="/docs/classes/flexbox">Flex Docs</NavLink>
            </li>
          </ul>
          <li>
            <NavLink to="/docs/functions">Functions</NavLink>
          </li>
          <ul>
            {/* Add link to UseClass Docs */}
            <li>
              <NavLink to="/docs/functions/use-class">UseClass Docs</NavLink>
            </li>
          </ul>
        </ul>
      </div>
    </aside>
  );
};

export default DocsSidebar;
