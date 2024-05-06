import React, { useState } from "react";
import { useStyles } from "../hooks/useStyles";
import { Link, NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  useStyles();
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("darkmode");
  };

  return (
    <nav className="shadow-md">
      <Link to="/">
        <header>
          <p className="flex-center text-base tc-[neutral-900] gap-6px font-medium">
            tenoxUI <span className="tc-[neutral-500]">/</span>{" "}
            <span className="tc-[accent-500]">CSS</span>
          </p>
        </header>
      </Link>
      <ul className="flex-center gap-1rem ml-auto">
        <li>
          <NavLink to="/" className="nav-link">
            Overview
          </NavLink>
        </li>
        <li>
          <NavLink to="/docs" className="nav-link">
            Docs
          </NavLink>
        </li>
        <li>
          <a
            href="https://github.com/tenoxui/css"
            aria-label="github icon"
            className="flex-center text-base"
          >
            <i className="txi ti-github_square"></i>
          </a>
        </li>
        {/* Toggle dark mode button */}
        <li>
          <button
            onClick={toggleDarkMode}
            className="btn flex-center box-30px border bw-1px bc-[neutral-400] br-4px"
          >
            <span className="mi-sharp text-base tc-[neutral-900]">
              {darkMode ? "light_mode" : "nights_stay"}
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
