import { Routes, Route, Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
// import DocsSidebar from "../components/DocsSidebar";
import { Routes as DocsRoutes } from "../docs";
import GetStarted from "../docs/get-started";
import DocsSidebar from "../components/DocsSidebar";

const Documentation: React.FC = () => {
  return (
    <>
      <div className="d-[docs-layout] flex-wrap">
        <DocsSidebar />
        <section className="main-content fx-70%">
          <div className="ph-2rem">
            <Breadcrumbs />
          </div>
          <Routes>
            <Route path="/">
              <Route path="get-started" element={<GetStarted />} />
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
                ))
              )}
            </Route>
          </Routes>
        </section>
        <div className="fx-15% on-this-page bg-none max-md-none">
          <h4 className="text-xl font-semibold tracking-tight">
            On this page
          </h4>
        </div>
      </div>
    </>
  );
};

export default Documentation;
