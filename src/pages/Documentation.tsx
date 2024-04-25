import { Routes, Route, Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import DocsSidebar from "../components/DocsSidebar";
import { Routes as DocsRoutes } from "../docs";

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
          <Routes>
            <Route path="/">
              {/* Render routes for each category */}
              {DocsRoutes.map((routeGroup) => (
                <Route
                  key={routeGroup.slug}
                  path={`${routeGroup.slug}`}
                  element={
                    <>
                      <h1>{routeGroup.name}</h1>
                      <ul>
                        {routeGroup.routes.map((route) => (
                          <li key={route.slug}>
                            <Link to={`/docs${routeGroup.slug}${route.slug}`}>
                              <h3>{route.name}</h3>
                              <p>{route.desc}</p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  }
                />
              ))}
              {/* Individual Documentation Pages */}
              {DocsRoutes.map((routeGroup) =>
                routeGroup.routes.map((route) => (
                  <Route
                    key={route.slug}
                    path={`${routeGroup.slug}${route.slug}`}
                    element={<route.element />}
                  />
                )),
              )}
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Documentation;
