import tenoxui, { defineProps, makeStyles } from "tenoxui";
import { styles } from "./style";

export function styler() {
  // new props needed
  defineProps({
    d: "display",
    bdr: "border",
    bc: "borderColor",
    scroll: "scrollBehavior",
    // text-decoration
    "td-li": "textDecorationLine",
    "td-c": "textDecorationColor",
    "td-s": "textDecorationStyle",
    "td-t": "textDecorationThickness",
    "td-o": "textDecorationOffset",
  });
  /**
   * apply custom styles. Note: always use makeStyles after initiate -
   * tenoxui function if define utility classes (optional)
   */
  makeStyles(styles);
  // init tenoxui function to handle all styles
  tenoxui();
}
