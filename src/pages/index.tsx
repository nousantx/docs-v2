import { ReactElement } from "react";
import GetStarted from "../docs/get-started";
import CLI from "./CLI";
import Docs from "./Docs";
import Install from "./Install";

type Page = {
  title: string;
  desc?: string;
  slug: string;
  element: ReactElement;
};

const Pages: Page[] = [
  {
    title: "TenoxUI Docs",
    slug: "/",
    element: <Docs />,
  },
  {
    title: "Installation",
    slug: "installation",
    element: <Install />,
  },
  {
    title: "CLI Integration",
    slug: "cli",
    element: <CLI />,
  },
  {
    title: "Get Started",
    slug: "get-started",
    element: <GetStarted />,
  },
];

export default Pages;
