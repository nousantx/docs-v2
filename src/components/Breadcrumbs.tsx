import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useStyles } from "../hooks/useStyles";

const capitalizeFirstLetter = (str: string) => {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  // applying hooks whenever the url changes
  useStyles(location.pathname);

  return (
    <div className="flex-center jc-[tx_fs] gap-10px flex-wrap mb-2rem">
      <Link to="/" className="box-30px flex-center">
        <span className="ms-sharp fs-20px tc-[accent-500]">home</span>
      </Link>
      <span className="ms-sharp fs-16px tc-[neutral-700]">chevron_right</span>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        // last navlink will have last className
        // change the styles on /src/utils/style.ts
        const className = isLast ? "breadcrumb-link last" : "breadcrumb-link";
        const displayName = capitalizeFirstLetter(name);
        return (
          <React.Fragment key={name}>
            <NavLink className={className} to={routeTo}>
              {displayName}
            </NavLink>
            {!isLast && (
              <span className="ms-sharp fs-16px tc-[neutral-700]">
                chevron_right
              </span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
