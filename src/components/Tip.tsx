import React from "react";
import { useStyles } from "../hooks/useStyles";

type TipProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "danger" | "info" | "warning" | "tip";
};

const Tip: React.FC<TipProps> = ({
  variant = "info",
  children,
  className,
  title,
  ...props
}) => {
  useStyles();
  let bgColor = "bg-[info-200-opa]";
  let icon = "info";
  let tdColor = "td-[info-500]";
  let vaColor = "info-500";
  switch (variant) {
    case "danger":
      bgColor = "bg-[danger-200-opa]";
      icon = "dangerous";
      vaColor = "danger-500";
      tdColor = `td-[${vaColor}]`;
      break;
    case "warning":
      bgColor = "bg-[warning-200-opa]";
      icon = "warning";
      vaColor = "warning-500";
      tdColor = `td-[${vaColor}]`;
      break;
    case "tip":
      bgColor = "bg-[success-200-opa]";
      icon = "emoji_objects";
      vaColor = "success-500";
      tdColor = `td-[${vaColor}]`;
      break;
    case "info":
    default:
      bgColor = "bg-[info-200-opa]";
      icon = "info";
      vaColor = "info-500";
      tdColor = `td-[${vaColor}]`;
      break;
  }

  return (
    <div
      {...props}
      className={`${bgColor} bs-solid bw-0 bw-left-2px bc-[${vaColor}] p-14px ph-1.25rem ${tdColor} ${className}`}
    >
      {variant ? (
        <p className={`flex ai-center gap-0.35rem pb-1rem tc-[${vaColor}]`}>
          <span className="ms-sharp fs-18px">{icon}</span>
          {title ? title : variant.charAt(0).toUpperCase() + variant.slice(1)}
        </p>
      ) : null}
      {children}
    </div>
  );
};

export default Tip;
