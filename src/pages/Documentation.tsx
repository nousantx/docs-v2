import React, { useState, useLayoutEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import { Routes as DocsRoutes } from "../docs";
import DocsSidebar from "../components/DocsSidebar";
import Meta from "../components/Helmet";
import { styler } from "../utils/styler";
import Pages from ".";
import Section from "../components/Section";

interface Heading {
  text: string;
  id: string;
  level: number;
}

const Documentation: React.FC = () => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const location = useLocation();
  const extractHeadingsWithIds = () => {
    const mainContent = document.querySelector(".main-content");
    if (!mainContent) return;
    const headingTags = mainContent.querySelectorAll(
      "h1[id], h2[id], h3[id], h4[id], p[id]"
    );
    const extractedHeadings = Array.from(headingTags).map((heading) => ({
      text: (heading as HTMLElement).innerText, // Type assertion to HTMLElement
      id: heading.id,
      level: parseInt((heading as HTMLElement).tagName.charAt(1)), // Type assertion to HTMLElement
    }));
    setHeadings(extractedHeadings);
  };

  useLayoutEffect(() => {
    styler();
    extractHeadingsWithIds();
  }, [location]);

  // Rendering logic for the "On this page" section
  const renderOnThisPageSection = () => {
    if (headings.length === 0) {
      return (
        <>
          <p className="text-lg font-medium tc-[neutral-800]">
            Nothing to show
          </p>
        </>
      );
    } else {
      return (
        <>
          <p className="text-lg font-medium tc-[neutral-800]">On this page</p>
          <ul className="border bw-left-2px bc-[neutral-400] pl-1rem pv-8px mt-0.5rem">
            {headings.map((heading, index) => (
              <li key={index} className="text-base font-light">
                <a href={`#${heading.id}`} className="tc-[neutral-700]">
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </>
      );
    }
  };

  return (
    <>
      <div className="d-[docs-layout]">
        <DocsSidebar />
        <article className="main-content fx-70% h-mn-100vh pt-4rem">
          <Routes>
            <Route path="/">
              {/* <Route path="get-started" element={<GetStarted />} /> */}
              {/* <Route path="/cli" element={<CLI />} /> */}
              {Pages.map((page, index) => (
                <Route
                  key={index}
                  path={page.slug}
                  element={
                    <>
                      <Meta
                        title={page.title || "Docs"}
                        desc={
                          page.desc || "Explore tenoxui documentation page."
                        }
                      />
                      <div className="ph-2rem pt-2rem">
                        <Breadcrumbs pageTitle={page.title} />
                        <div className="min-lg-none mb-2rem bg-[neutral-200] p-1rem br-2px shadow-md">
                          {renderOnThisPageSection()}
                        </div>
                      </div>
                      {page.element}
                    </>
                  }
                />
              ))}
              {DocsRoutes.map((routeGroup) => (
                <Route
                  key={routeGroup.slug}
                  path={`${routeGroup.slug}`}
                  element={
                    <>
                      <Meta title={routeGroup.name} desc={routeGroup.desc} />
                      <Section className="pt-2rem">
                        <Breadcrumbs />
                        <h1>{routeGroup.name}</h1>
                        <p className="mt-0">{routeGroup.desc}</p>
                        <div className="w-full mt-1.5rem flex-wrap jc-center ai-stretch gap-1rem">
                          {routeGroup.routes.map((route) => (
                            <Link
                              key={route.slug}
                              to={`/docs${routeGroup.slug}${route.slug}`}
                              className="fx-250px bg-[neutral-200] p-1.5rem br-4px tc-[neutral-900] flex-center gap-1rem shadow-md"
                            >
                              {/* <span className="ms-sharp text-xl tc-[accent-500]">
                                {route.icon || "book"}
                              </span> */}
                              <header>
                                <span className="ms-sharp text-3xl tc-[accent-500] mb-8px">
                                  {route.icon || "book"}
                                </span>
                                <h2 id="route-group" className="text-lg">
                                  {route.name}
                                </h2>
                                <p className="text-sm tc-[neutral-700]">
                                  {route.desc}
                                </p>
                              </header>
                              <span className="ms-sharp text-base tc-[accent-500] ml-auto">
                                {/* chevron_right */}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </Section>
                    </>
                  }
                />
              ))}
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
        </article>
        <div className="fx-15% h-100vh max-lg-none position-[docs-position] t-4rem pt-2rem">
          {renderOnThisPageSection()}
        </div>
      </div>
    </>
  );
};

export default Documentation;
