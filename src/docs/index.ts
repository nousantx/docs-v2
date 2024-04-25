import { Functions } from "./functions";
import { Classes } from "./classes";
import { RouteGroup } from "../types/docsTypes";

export const Routes: RouteGroup[] = [
  {
    slug: "/classes",
    routes: Classes,
  },
  {
    slug: "/functions",
    routes: Functions,
  },
];
