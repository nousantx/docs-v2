export interface RouteGroup {
  name: string;
  desc: string;
  slug: string;
  routes: Route[];
}

export interface Route {
  name: string;
  desc: string;
  slug: string;
  icon?: string;
  element: React.ComponentType<any>;
}

export interface DocsRoutes {
  Routes: RouteGroup[];
}
