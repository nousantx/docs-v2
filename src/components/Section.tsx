import React, { ReactNode } from "react";
import Meta from "./Helmet";
import { useStyles } from "../hooks/useStyles";

interface Section {
  title?: string;
  desc?: string;
  children?: ReactNode;
  className?: string;
}

const Section: React.FC<Section> = ({ title, desc, children, className }) => {
  useStyles();
  return (
    <>
      <Meta
        title={title || "Docs"}
        desc={desc || "Explore tenoxui documentation page."}
      />
      <section className={`p-2rem pt-5rem h-mn-100vh ${className}`}>
        {children}
      </section>
    </>
  );
};

export default Section;
