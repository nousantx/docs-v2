import { Route } from "../../types/docsTypes";
import AspectRatio from "./AspectRatio";
import Background from "./Background";
import Border from "./Border";
import Color from "./Color";
import Flex from "./Flex";
import Tenox from "./Tenox";

export const Classes: Route[] = [
  {
    name: "Aspect Ratio",
    desc: "TenoxUI aspect ratio porperty documentation page.",
    slug: "/ratio",
    icon: "aspect_ratio",
    element: <AspectRatio />,
  },
  {
    name: "Background",
    desc: "Just how background property works with tenoxui.",
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
    desc: "Working with color property, it's fun!",
    slug: "/color",
    icon: "palette",
    element: <Color />,
  },
  {
    name: "Flex Docs",
    desc: "Its flexbox documentation",
    slug: "/flexbox",
    element: <Flex />,
  },
  {
    name: "Tenox Docs",
    desc: "Its Tenox App documentation",
    slug: "/tenox-app",
    element: <Tenox />,
  },
];
