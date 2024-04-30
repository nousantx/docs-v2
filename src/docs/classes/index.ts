import { Route } from "../../types/docsTypes";
import Flex from "./Flex";
import Tenox from "./Tenox";

export const Classes: Route[] = [
  {
    name: "tenoxui/cli",
    desc: "CLI Documentation.",
    slug: "/suki",
    icon: "terminal",
    element: Flex,
  },
  {
    name: "Flex Docs",
    desc: "Its flexbox documentation",
    slug: "/flexbox",
    element: Flex,
  },
  {
    name: "Tenox Docs",
    desc: "Its Tenox App documentation",
    slug: "/tenox-app",
    element: Tenox,
  },
];
