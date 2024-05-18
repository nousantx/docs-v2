import { Functions } from "./functions";
import { Classes } from "./classes";
import { RouteGroup } from "../types/docsTypes";
export const Routes: RouteGroup[] = [
  {
    name: "Classes",
    desc: "Explore tenoxui types and properties usage examples for creating UI.",
    sub: (
      <>
        Explore <code className="primary">@tenoxui/property</code> usage and
        documentation for your project.
      </>
    ),
    slug: "/classes",
    routes: Classes,
  },
  {
    name: "Functions",
    desc: "All functions that can help you.",
    slug: "/functions",
    routes: Functions,
  },
];
