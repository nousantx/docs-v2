import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

interface Meta {
  title?: string;
  desc?: string;
  // headerImg?: string;
}

const Meta: React.FC<Meta> = ({ title, desc }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title} | TenoxUI Docs</title>
        <meta name="description" content={desc} />
      </Helmet>
    </HelmetProvider>
  );
};

export default Meta;
