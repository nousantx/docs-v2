import React, { useLayoutEffect } from "react";
import { Routes as DocsRoutes } from "../docs";
import { NavLink, useLocation } from "react-router-dom";
import { makeStyles } from "tenoxui";
import { styler } from "../utils/styler";

const SidebarLinks: React.FC = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    styler();
    makeStyles({
      ".sidebar-links": {
        "": "",
        a: "tc-inherit",
      },
      ".sidebar-group": {
        ".sidebar-link": "tc-[neutral-900]",
        ".sidebar-link.active": "tc-[accent-500]",
        ".sidebar-route-link": "tc-[neutral-600] bw-0 bc-transparent p-0",
        ".sidebar-route-link.active":
          "bs-solid bw-0 bw-left-1px pl-8px bc-[accent-500] tc-[neutral-900]",
      },
    });
  }, [location.pathname]);

  return (
    <div className="sidebar-links mt-2rem">
      {DocsRoutes.map((routeGroup) => (
        <div className="sidebar-group">
          <NavLink
            to={`/docs${routeGroup.slug}`}
            className="text-base font-medium flex-center gap-4px jc-start sidebar-link"
          >
            <span className="text-nowrap">{routeGroup.name}</span>
            <span className="text-base ms-sharp tc-[accent-500]">
              arrow_drop_down
            </span>
          </NavLink>
          <ul className="mb-1rem">
            {routeGroup.routes.map((route) => (
              <li className="p-0 tc-[neutral-600] mt-4px">
                <NavLink
                  to={`/docs${routeGroup.slug}${route.slug}`}
                  className="text-sm sidebar-route-link"
                >
                  {route.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SidebarLinks;
