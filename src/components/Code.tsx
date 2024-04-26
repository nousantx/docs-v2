import React, { ReactNode, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  // docco,
  atomOneLight,
  // atomOneDark,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useStyles } from "../hooks/useStyles";

interface Code {
  title?: string;
  language: string;
  children: string | ReactNode;
}

const Code: React.FC<Code> = ({ title, language, children }) => {
  const [copy, setCopy] = useState(false);
  const codeString = React.Children.toArray(children).join("");
  useStyles(copy);
  return (
    <div>
      <div className="w-full flex space-between items-center bg-[neutral-200] p-10px radius-top-4px">
        <p>{title}</p>
        {copy ? (
          <button className="btn flex-center gap-6px tc-[neutral-800]">
            <span className="ms-round fs-16px">done</span>{" "}
            <p className="fw-400">Copied</p>
          </button>
        ) : (
          <button
            className="btn flex-center gap-6px tc-[neutral-800]"
            onClick={() => {
              // Create a textarea element and set its value to the code string
              const textarea = document.createElement("textarea");
              textarea.value = codeString;
              textarea.setAttribute("readonly", "");
              textarea.style.position = "absolute";
              textarea.style.left = "-9999px"; // Move it off-screen
              document.body.appendChild(textarea);

              // Select the text inside the textarea
              textarea.select();
              // Execute the copy command
              document.execCommand("copy");
              // Remove the textarea from the DOM
              document.body.removeChild(textarea);

              // Set copy state to true
              setCopy(true);
              // Reset copy state after 3 seconds
              setTimeout(() => {
                setCopy(false);
              }, 3000);
            }}
          >
            <span className="ms-round fs-16px">content_copy</span>{" "}
            <p className="fw-400">Copy</p>
          </button>
        )}
      </div>
      <SyntaxHighlighter
        language={language}
        style={atomOneLight}
        className="p-10px br-0.125rem"
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
