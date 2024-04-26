import React from "react";
import { NavLink, useLocation } from "react-router-dom";
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

  const [sidebar, setSidebar] = useState(true);
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  const sidebarPosition = sidebar ? "0" : "-100%"; // Toggle sidebar position
  useStyles(sidebar);

  return (
    <aside className="fx-15% relative">
      <ToggleButton
        toggleSidebar={toggleSidebar}
        className="btn d-[docs-sidebar-toggle] flex-center min-md-none"
      >
        <span className="tc-red ms-round">dashboard</span>
      </ToggleButton>
      <div
        className={`bg-[neutral-100] bg-red p-1rem position-[docs-position] t-[docs-top] l-${sidebarPosition}`}
      >
        <div className="flex-center relative min-md-none">
          <ToggleButton
            toggleSidebar={toggleSidebar}
            className="btn flex-center bg-none ml-auto d-[]"
          >
            <span className="tc-[neutral-900] ms-round text-sm">close</span>
          </ToggleButton>
        </div>
        <h3 className="text-2xl font-semibold tracking-tight min-md-none">
          TenoxUI v0.7
        </h3>

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
