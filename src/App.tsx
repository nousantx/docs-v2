import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Documentation from "./pages/Documentation";
import Code from "./components/Code";
import { useStyles } from "./hooks/useStyles";

const App: React.FC = () => {
  useStyles();

  //   const code = `import { useLayoutEffect } from "react";
  // import tenoxui, { defineProps, makeStyles } from "tenoxui";
  // import { styles } from "./style";

  // export function useStyles(...hooks: any) {
  //   useLayoutEffect(() => {
  //     // new props needed
  //     defineProps({
  //       d: "display",
  //       scroll: "scrollBehavior",
  //     });
  //     /**
  //      * apply custom styles. Note: always use makeStyles after initiate -
  //      * tenoxui function if define utility classes (optional)
  //      */
  //     makeStyles(styles);
  //     // init tenoxui function to handle all styles
  //     tenoxui();
  //   }, [hooks]);
  // }`;

  return (
    <>
      <h1 className="mb-2rem">Its navbar</h1>
      <div className="none">
        <Code language="shell" title="App.tsx">
          {/* {`<div className="bg-red"></div>`} */}
          {`npm i tenoxui --save-dev`}
        </Code>
      </div>

      <main className="h-mn-100vh position-relative">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>This is homepage</h1>
                <Link to="/docs">Docs</Link>
                <Link to="/docs/get-started">Get Started</Link>
              </>
            }
          />

          <Route path="/docs/*" element={<Documentation />} />
          <Route path="/other" element={<h1>This is other page!</h1>} />
          <Route path="*" element={<h1>Not Found!</h1>} />
        </Routes>
      </main>
      <h1 className="mt-auto">Its Footer</h1>
    </>
  );
};

export default App;
