import { useStyles } from "../hooks/useStyles";

const Footer = () => {
  useStyles();
  return (
    <footer className="w-mx-1440px mv-0 mh-auto p-2rem border bw-top-1px bc-$neutral-200">
      <h2 className="text-base font-medium">
        tenoxUI <span className="tc-$neutral-500">/</span>{" "}
        <span className="tc-$accent-500">CSS</span>
      </h2>
      <p className="text-xs tc-$neutral-600">
        &copy; 2024 NOuSantx. Built with TenoxUI
      </p>
    </footer>
  );
};

export default Footer;
