import React from "react";
import { Helmet } from "react-helmet";

interface Meta {
  title?: string;
  desc?: string;
  // headerImg?: string;
}

const Meta: React.FC<Meta> = ({ title, desc }) => {
  return (
    <Helmet>
      <title>{title} | TenoxUI Docs</title>
      <meta name="description" content={desc} />
    </Helmet>
  );
};

export default Meta;
