interface Route {
  name: string;
  slug: string;
  element: React.ComponentType<HTMLElement>;
}

interface RouteGroup {
  slug: string;
  routes: Route[];
}

export interface DocsRoutes {
  slug: string;
  routes: RouteGroup[];
}
