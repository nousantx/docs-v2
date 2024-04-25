import { Link, NavLink, useLocation } from "react-router-dom";
import { useStyles } from "../utils/useStyles";

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // applying hooks whenever the url changes
  useStyles(location.pathname);

  return (
    <div className="flex-center bg-yellow jc-[flex-start] gap-1rem">
      <Link to="/" className="box-30px bg-red flex-center">
        <span className="ms-round fs-20px">home</span>
      </Link>
      <span className="ms-round fs-16px">chevron_right</span>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        // last navlink will have last className
        // change the styles on /src/utils/style.ts
        const className = isLast ? "breadcrumb-link last" : "breadcrumb-link";
        return (
          <>
            <NavLink key={name} className={className} to={routeTo}>
              {name}
            </NavLink>
            {!isLast && <span className="ms-round fs-16px">chevron_right</span>}
          </>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
