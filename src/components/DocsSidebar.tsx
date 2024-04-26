import { NavLink, useLocation } from "react-router-dom";
import { useStyles } from "../hooks/useStyles";

const DocsSidebar: React.FC = () => {
  const location = useLocation();
  const isInDocs = location.pathname.startsWith("/docs");
  if (!isInDocs) {
    return null;
  }

  useStyles();

  return (
    <div className="bg-[neutral-200] docs-sidebar">
      <h3>Documentation</h3>
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
  );
};

export default DocsSidebar;
