import React, { useLayoutEffect } from "react";
import { Routes as DocsRoutes } from "../docs";
import { NavLink, useLocation } from "react-router-dom";
import { applyHovers } from "tenoxui";
import { styler } from "../utils/styler";
import Pages from "../pages";

const SidebarLinks: React.FC = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    styler();
    applyHovers({
      ".sidebar-route-link": [
        "tc-{neutral-600}",
        "tc-{neutral-900}",
        "tr-time-0.3s",
      ],
      ".sidebar-route-link.active": [
        "tc-{neutral-900} bc-{accent-500}",
        "tc-{neutral-900} bc-{accent-800}",
      ],
    });
  }, [location.pathname]);

  return (
    <div className="sidebar-group mt-1rem">
      {Pages.map((page) => (
        <NavLink
          key={page.slug}
          to={`/docs/${page.slug}`}
          className="text-base font-normal flex-center gap-4px jc-[flex-start] sidebar-link mb-8px"
        >
          <span className="text-nowrap">{page.title}</span>
        </NavLink>
      ))}
      {DocsRoutes.map((routeGroup, index) => (
        <div key={index}>
          <NavLink
            to={`/docs${routeGroup.slug}`}
            className="text-base font-medium flex-center gap-4px jc-[flex-start] sidebar-link"
          >
            <span className="text-nowrap">{routeGroup.name}</span>
            <span className="text-base ms-sharp tc-{accent-500}">
              arrow_drop_down
            </span>
          </NavLink>
          <ul className="mb-1rem list-none">
            {routeGroup.routes.map((route, index) => (
              <li key={index} className="p-0 tc-{neutral-600} mt-4px">
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
