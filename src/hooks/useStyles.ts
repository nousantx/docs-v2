import { useLayoutEffect } from "react";
import { styler } from "../utils/styler";

export const useStyles = (...hooks: any[]) => {
  useLayoutEffect(() => {
    styler();
  }, [hooks]);
};
