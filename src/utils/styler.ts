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

    "back-c": "backgroundColor",
    "font-s": "fontStyle",
    "bg-img": "backgroundImage",
    tn: "textTransform",
    // text-decoration
    "td-li": "textDecorationLine",
    "td-c": "textDecorationColor",
    "td-s": "textDecorationStyle",
    "td-t": "textDecorationThickness",
    "td-o": "textDecorationOffset",
    "li-s-loc": "listStylePosition",
    "li-s-type": "listStyleType",
    shadow: "boxShadow",
    isolation: "isolation",
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
      "tr-prop-color tr-time-0.3s",
    ],
    ".hover\\:text-slate-gray": [
      "tc-[neutral-800]",
      "tc-[neutral-900]",
      "tr-prop-color tr-time-0.3s",
    ],
    ".btn-primary": [
      "bg-[accent-500] bc-transparent tc-[neutral-100]",
      "bg-[neutral-100] bc-[accent-500] tc-[accent-500]",
      "tr-time-0.3s bs-solid",
    ],
    ".btn-secondary": [
      "bg-transparent bc-[neutral-900] tc-[neutral-900]",
      "bg-[neutral-900] bc-transparent tc-[neutral-100]",
      "tr-time-0.3s bs-solid bw-1px",
    ],
    ".hover\\:border-primary": [
      "bc-transparent",
      "bc-[accent-500]",
      "tr-prop-all border bw-1px tr-time-0.3s",
    ],
  });
  // init tenoxui function to handle all styles
  tenoxui();
}
