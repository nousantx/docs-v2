import React from "react";
import { useStyles } from "../hooks/useStyles";

const CodeOutput: React.FC<{
  title?: string;
  className?: string;
  children: React.ReactNode;
}> = ({ title, className, children }) => {
  useStyles();
  return (
    <div className={`w-full mt-1rem ${className}`}>
      <div className="w-full flex space-between items-center bg-{neutral-200} p-10px radius-top-4px">
        <p className="text-sm font-medium flex-center gap-6px">
          <span className="ms-sharp text-base tc-{accent-500}">
            low_density
          </span>
          {title ? title : "Output"}
        </p>
      </div>
      <div className="w-full p-2rem bg-{neutral-100} bs-solid bw-1px bc-{neutral-200} br-8px bw-top-0 radius-top-0 shadow-md flex-center">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default CodeOutput;
