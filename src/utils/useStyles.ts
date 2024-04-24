import { useLayoutEffect } from "react";
import tenoxui, { defineProps, makeStyles } from "tenoxui";
import { styles } from "./style";
export function useStyles(...hooks: any) {
  useLayoutEffect(() => {
    // new props needed
    defineProps({});
    // init tenoxui function to handle all styles
    tenoxui();
    // apply custom styles. Note: always use makeStyles after initiate tenoxui function.
    makeStyles(styles);
  }, [hooks]);
}
