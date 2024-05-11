import React, { ReactNode, useLayoutEffect } from "react";
import { styler } from "../utils/styler";
import { makeStyles } from "tenoxui";

interface TipProps {
  variant?: "danger" | "info" | "warning" | "tip";
  title?: string;
  children?: ReactNode;
  className?: string;
}

const Tip: React.FC<TipProps> = ({
  variant = "tip",
  children,
  className,
  title,
}) => {
  useLayoutEffect(() => {
    makeStyles({
      ".tip-wrapper *": "td-c-inherit",
    });
    styler();
  }, []);
  let bgColor = "bg-{info-200-opa}";
  let icon = "info";
  let vaColor = "info-500";
  switch (variant) {
    case "danger":
      bgColor = "bg-{danger-200-opa}";
      icon = "dangerous";
      vaColor = "danger-500";
      break;
    case "warning":
      bgColor = "bg-{warning-200-opa}";
      icon = "warning";
      vaColor = "warning-500";
      break;
    case "tip":
      bgColor = "bg-{success-200-opa}";
      icon = "emoji_objects";
      vaColor = "success-500";
      break;
    case "info":
    default:
      bgColor = "bg-{info-200-opa}";
      icon = "info";
      vaColor = "info-500";
      break;
  }

  return (
    <div
      className={`tip-wrapper ${bgColor} bs-solid bw-0 bw-left-2px bc-{${vaColor}} p-14px ph-1.25rem td-c-{${vaColor}} ${className}`}
    >
      {variant ? (
        <p
          className={`flex ai-center text-sm gap-0.35rem tc-{${vaColor}} tn-uppercase`}
        >
          <span className="ms-sharp fs-18px">{icon}</span>
          {/* {title ? title : variant.charAt(0).toUpperCase() + variant.slice(1)} */}
          {title ? title : <span className="tn-uppercase">{variant}</span>}
        </p>
      ) : null}
      {children}
    </div>
  );
};

export default Tip;
