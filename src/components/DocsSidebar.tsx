import { NavLink, useLocation } from "react-router-dom";

const DocsSidebar: React.FC = () => {
  const location = useLocation();
  const isInDocs = location.pathname.startsWith("/docs");

  if (!isInDocs) {
    return null;
  }

  return (
    <div style={{ width: "200px", marginRight: "20px" }}>
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
