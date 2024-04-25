import { useLayoutEffect } from "react";
import tenoxui, { defineProps, makeStyles } from "tenoxui";
import { styles } from "./style";

export function useStyles(...hooks: any) {
  useLayoutEffect(() => {
    // new props needed
    defineProps({
      d: "display",
      scroll: "scrollBehavior",
    });
    /**
     * apply custom styles. Note: always use makeStyles after initiate -
     * tenoxui function if define utility classes (optional)
     */
    makeStyles(styles);
    // init tenoxui function to handle all styles
    tenoxui();
  }, [hooks]);
}
