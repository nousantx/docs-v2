import { Functions } from "./functions";
import { Classes } from "./classes";
import { RouteGroup } from "../types/docsTypes";
export const Routes: RouteGroup[] = [
  {
    name: "Classes",
    desc: "Explore all types and classes you can use with tenoxui.",
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
