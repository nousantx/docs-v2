import tenoxui, { defineProps, makeStyles, applyHovers } from "tenoxui";
import { styles } from "./style";

export function styler() {
  // new props needed
  defineProps({
    d: "display",
    bdr: "border",
    bc: "borderColor",
    sc: "scale",
    scroll: "scrollBehavior",
    // text-decoration
    "td-li": "textDecorationLine",
    "td-c": "textDecorationColor",
    "td-s": "textDecorationStyle",
    "td-t": "textDecorationThickness",
    "td-o": "textDecorationOffset",
    "shadow": "boxShadow",
  });
  /**
   * apply custom styles. Note: always use makeStyles after initiate -
   * tenoxui function if define utility classes (optional)
   */
  makeStyles(styles);
  applyHovers({
    "nav ul li": [
      "tc-[neutral-800]",
      "tc-[accent-500]",
      "tr-prop-color tr-time-0.3s tr-timing-ease",
    ],
    ".hover\\:text-slate-gray": [
      "tc-[neutral-800]",
      "tc-[neutral-900]",
      "tr-prop-color tr-time-0.3s tr-timing-ease",
    ],
  });
  // init tenoxui function to handle all styles
  tenoxui();
}
