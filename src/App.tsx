import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Documentation from "./pages/Documentation";
import Code from "./components/Code";
import { useStyles } from "./hooks/useStyles";
import Footer from "./components/Footer";

const App: React.FC = () => {
  useStyles();
  return (
    <>
      <h1 className="mb-2rem text-4xl font-extrabold tracking-tight">
        Its navbar
      </h1>
      <div className="none">
        <Code language="shell" title="App.tsx">
          {/* {`<div className="bg-red"></div>`} */}
          {`npm i tenoxui --save-dev`}
        </Code>
      </div>

      <main className=" position-relative w-mx-1440px mv-0 mh-auto">
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
      <Footer />
    </>
  );
};

export default App;
