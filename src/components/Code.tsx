import React, { ReactNode, useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import javascript from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import typescript from "react-syntax-highlighter/dist/esm/languages/hljs/typescript";
import shell from "react-syntax-highlighter/dist/esm/languages/hljs/shell";
import bash from "react-syntax-highlighter/dist/esm/languages/hljs/bash";
import htmlbars from "react-syntax-highlighter/dist/esm/languages/hljs/htmlbars";
import html from "react-syntax-highlighter/dist/esm/languages/hljs/htmlbars";
import xml from "react-syntax-highlighter/dist/esm/languages/hljs/xml";
import css from "react-syntax-highlighter/dist/esm/languages/hljs/css";

import { useStyles } from "../hooks/useStyles";

SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("shell", shell);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("htmlbars", htmlbars);
SyntaxHighlighter.registerLanguage("html", html);
SyntaxHighlighter.registerLanguage("xml", xml);
SyntaxHighlighter.registerLanguage("css", css);

interface Code {
  title?: string;
  lang: string;
  className?: string;
  codeOnly?: boolean;
  showNumber?: boolean;
  isWrap?: boolean;
  children: string | ReactNode;
}

const Code: React.FC<Code> = ({
  title,
  lang,
  children,
  codeOnly,
  showNumber,
  isWrap,
  className,
}) => {
  const [copy, setCopy] = useState(false);
  const codeString = React.Children.toArray(children).join("");
  useStyles(copy);
  return (
    <div className={`w-full relative ${className}`}>
      {/* {copy && ( */}
      <div
        className={`fixed top-5.5rem right--100% bg-[neutral-100] tc-[neutral-900] ta-center br-4px p-8px ph-1rem z-9999 flex-center gap-8px tr-prop-all tr-time-0.3s tr-timing-ease shadow-md ${
          copy ? "opa-1 right-1rem" : "opa-0 right--100%"
        }`}
      >
        <span className="ms-sharp tc-[accent-500] text-lg">inventory</span>
        Code copied successfully!
      </div>
      {!codeOnly ? (
        <div
          className={`w-full flex space-between items-center bg-[neutral-200] p-10px radius-top-4px`}
        >
          <p className="text-sm font-medium flex-center gap-6px">
            <span className="ms-sharp text-base tc-[accent-500]">draft</span>
            {title || lang}
          </p>
          {copy ? (
            <button className="btn flex-center gap-6px tc-[neutral-800]">
              <span className="ms-sharp fs-16px">done</span>{" "}
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
              <span className="ms-sharp fs-16px">content_copy</span>{" "}
              <p className="text-sm font-medium">Copy</p>
            </button>
          )}
        </div>
      ) : null}
      <SyntaxHighlighter
        showLineNumbers={showNumber}
        wrapLongLines={isWrap}
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
