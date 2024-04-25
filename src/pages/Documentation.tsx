// Documentation.tsx

import React from "react";
import { Routes as DocsRoutes } from "../docs";
import { Route, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import DocsSidebar from "../components/DocsSidebar";

const Documentation: React.FC = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <DocsSidebar />
        {/* Content */}
        <div>
          {/* Breadcrumbs */}
          <Breadcrumbs />
          <Route
            path="/"
            element={
              <>
                <h1>Explore Documentation</h1>
                <Outlet />
              </>
            }
          >
            {/* Rendered for /docs/classes and /docs/functions */}
            {/* Individual Documentation Pages */}
            {DocsRoutes.map((routeGroup) =>
              routeGroup.routes.map((route) => (
                <Route
                  key={route.slug}
                  path={`/docs${routeGroup.slug}${route.slug}`}
                  element={<route.element />}
                />
              ))
            )}
          </Route>
        </div>
      </div>
    </>
  );
};

export default Documentation;
