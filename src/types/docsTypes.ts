import { ReactElement } from "react";

export interface RouteGroup {
  name: string;
  sub?: string | ReactElement;
  desc: string;
  slug: string;
  routes: Route[];
}

export interface Route {
  name: string;
  desc: string;
  slug: string;
  icon?: string;
  element: any;
}

export interface DocsRoutes {
  Routes: RouteGroup[];
}
