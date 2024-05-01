import { ReactElement } from "react";
import GetStarted from "../docs/get-started";
import CLI from "./CLI";

import Install from "./Install";
import Intro from "../docs/Intro";

type Page = {
  title: string;
  desc?: string;
  slug: string;
  element: ReactElement;
};

const Pages: Page[] = [
  {
    title: "Introduction",
    slug: "intro",
    element: <Intro />,
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
