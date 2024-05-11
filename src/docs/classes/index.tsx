import { Route } from "../../types/docsTypes";
import AspectRatio from "./AspectRatio";
import Background from "./Background";
import Border from "./Border";
import Color from "./Color";
import Cursor from "./Cursor";
import Display from "./Display";
import Filter from "./Filter";
import Flex from "./Flex";
import Tenox from "./Tenox";

export const Classes: Route[] = [
  {
    name: "Aspect Ratio",
    desc: "Aspect ratio property, but it can't define what's 10/10 is :D",
    slug: "/ratio",
    icon: "aspect_ratio",
    element: <AspectRatio />,
  },
  {
    name: "Backdrop FIlter",
    desc: "Does grayscale can be defined as a color?",
    slug: "/backdrop-filter",
    icon: "landscape",
    element: <Background />,
  },
  {
    name: "Background",
    desc: "Everything has a background. But, let's change it.",
    slug: "/background",
    icon: "wallpaper",
    element: <Background />,
  },
  {
    name: "Border",
    desc: "Styling border property using tenoxui.",
    slug: "/border",
    icon: "border_style",
    element: <Border />,
  },
  {
    name: "Color",
    desc: "Working with color property, it's fun! Don't just use black and white.",
    slug: "/color",
    icon: "palette",
    element: <Color />,
  },
  {
    name: "Cursor",
    desc: "Let's point into the future. Always pointer!",
    slug: "/cursor",
    icon: "mouse",
    element: <Cursor />,
  },
  {
    name: "Display",
    desc: "Display property documentation. I am flex 😎!",
    slug: "/display",
    icon: "fullscreen",
    element: <Display />,
  },
  {
    name: "Filter",
    desc: "You element can have 2x of contrast! Try css filter property.",
    slug: "/filter",
    icon: "tune",
    element: <Filter />,
  },
  {
    name: "Flexbox",
    desc: "Find flexbox related types here.",
    slug: "/flexbox",
    icon: "flex_wrap",
    element: <Flex />,
  },
  {
    name: "Tenox Docs",
    desc: "Its Tenox App documentation",
    slug: "/tenox-app",
    element: <Tenox />,
  },
];
