export interface RouteGroup {
  slug: string;
  routes: Route[];
}

export interface Route {
  name: string;
  slug: string;
  element: React.ComponentType<any>;
}

export interface DocsRoutes {
  Routes: RouteGroup[];
}
