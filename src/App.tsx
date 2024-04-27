import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Documentation from "./pages/Documentation";
import { useStyles } from "./hooks/useStyles";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home.tsx"
const App: React.FC = () => {
  useStyles();
  return (
    <>
      <Navbar />
      <main className="position-relative w-mx-1440px mv-0 mh-auto">
        <Routes>
          <Route
            path="/"
            element={
              <Home/>
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
