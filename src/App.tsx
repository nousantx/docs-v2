import React from "react";
import { Routes, Route } from "react-router-dom";
import Documentation from "./pages/Documentation";
import { useStyles } from "./utils/useStyles";

const App: React.FC = () => {
  useStyles();
  return (
    <>
      <h1 className="mb-2rem">Its navbar</h1>
      <main className="h-mn-100vh">
        <Routes>
          <Route path="/" element={<h1>This is homepage</h1>} />
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
