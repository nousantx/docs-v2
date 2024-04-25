import { Functions } from "./functions";
import { Classes } from "./classes";
import { RouteGroup } from "../types/docsTypes";
export const Routes: RouteGroup[] = [
  {
    name: "Classes Documentation",
    slug: "/classes",
    routes: Classes,
  },
  {
    name: "Functions",
    slug: "/functions",
    routes: Functions,
  },
];
