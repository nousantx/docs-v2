import React, { ReactNode } from "react";
import { useStyles } from "../hooks/useStyles";

interface Section {
  children?: ReactNode;
  className?: string;
}

const Section: React.FC<Section> = ({ children, className }) => {
  useStyles();
  return (
    <>
      <section className={`ph-2rem pb-2rem h-mn-100vh ${className}`}>
        {children}
      </section>
    </>
  );
};

export default Section;
