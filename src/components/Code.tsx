import React, { ReactNode, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import {
  // docco,
  // atomOneLight,
  atomOneDark,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useStyles } from "../hooks/useStyles";

interface Code {
  title?: string;
  lang: string;
  className?: string;
  codeOnly?: boolean;
  children: string | ReactNode;
}

const Code: React.FC<Code> = ({
  title,
  lang,
  children,
  codeOnly,
  className,
}) => {
  const [copy, setCopy] = useState(false);
  const codeString = React.Children.toArray(children).join("");
  useStyles(copy);
  return (
    <div className={`w-full relative ${className}`}>
      {/* {copy && ( */}
      <div
        className={`fixed top-4rem right--100% bg-[neutral-100] tc-[neutral-900] ta-center br-4px p-8px ph-1rem z-9999 flex-center gap-4px tr-prop-all tr-time-0.3s tr-timing-ease shadow-md ${
          copy ? "opa-1 right-1rem" : "opa-0 right--100%"
        }`}
      >
        <span className="ms-round tc-[green-500]">done_all</span>
        Code copied successfully!
      </div>
      {/* )} */}
      {/* <div
        className={`fixed top-0 left-0 right-0 text-white text-center py-2 transition-opacity duration-300  ${
          copy ? "bg-green-500 opacity-100" : "opacity-0"
        }`}
      >
        Code copied successfully!
      </div> */}
      {!codeOnly ? (
        <div
          className={`w-full flex space-between items-center bg-[neutral-200] p-10px radius-top-4px`}
        >
          <p className="text-sm font-medium">{title}</p>
          {copy ? (
            <button className="btn flex-center gap-6px tc-[neutral-800]">
              <span className="ms-round fs-16px">done</span>{" "}
              <p className="text-sm font-medium">Copied</p>
            </button>
          ) : (
            <button
              className="btn flex-center gap-6px tc-[neutral-800]"
              onClick={() => {
                const textarea = document.createElement("textarea");
                textarea.value = codeString;
                textarea.setAttribute("readonly", "");
                textarea.style.position = "absolute";
                textarea.style.left = "-9999px";
                document.body.appendChild(textarea);

                textarea.select();
                document.execCommand("copy");
                document.body.removeChild(textarea);

                setCopy(true);
                setTimeout(() => {
                  setCopy(false);
                }, 3000);
              }}
            >
              <span className="ms-round fs-16px">content_copy</span>{" "}
              <p className="text-sm font-medium">Copy</p>
            </button>
          )}
        </div>
      ) : null}

      <SyntaxHighlighter
        language={lang}
        style={atomOneDark}
        className={`p-1rem bg-#1d1d1d relative ${
          codeOnly ? "br-0.225rem" : "radius-bottom-0.225rem"
        } `}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
