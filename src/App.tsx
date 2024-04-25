import React from "react";
import { Routes, Route } from "react-router-dom";
import Documentation from "./pages/Documentation";
import { useStyles } from "./utils/useStyles";
// import OtherPage from "./OtherPage"; // Import other pages/components here

const App: React.FC = () => {
  useStyles();
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1>This is homepage</h1>
          </>
        }
      />
      <Route path="/docs/*" element={<Documentation />} />

      <Route
        path="/other"
        element={
          <>
            <h1>This is other page!</h1>
          </>
        }
      />
    </Routes>
  );
};

export default App;
