import React, { useState, useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactNode } from "react";
import { styler } from "../utils/styler";
import SidebarLinks from "./SidebarLinks";

type ToggleButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  toggleSidebar: () => void;
};

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  toggleSidebar,
  children,
  ...props
}) => {
  return (
    <button onClick={toggleSidebar} {...props}>
      {children}
    </button>
  );
};

const DocsSidebar: React.FC = () => {
  const location = useLocation();
  const isInDocs = location.pathname.startsWith("/docs");
  if (!isInDocs) {
    return null;
  }

  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const sidebarPosition = sidebar ? "0" : "-100%";

  // useStyles(sidebar);

  useLayoutEffect(() => {
    // tenoxui styler
    styler();
    // handle outside click
    const handleOutsideClick = (event: MouseEvent) => {
      const sidebarElement = document.getElementById("docs-sidebar");
      if (sidebarElement && !sidebarElement.contains(event.target as Node)) {
        setSidebar(false);
      }
    };

    if (sidebar) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [sidebar]);

  return (
    <>
      {sidebar && (
        <div
          className="bg-#101010 opa-0.3 h-100vh w-100vw fixed t-0 l-0 z-999 isolate min-md-none"
          onClick={toggleSidebar}
        ></div>
      )}
      <aside
        id="docs-sidebar"
        className="w-$aside-sm-full relative z-1000 flex"
      >
        <ToggleButton
          toggleSidebar={toggleSidebar}
          className="btn d-$docs-sidebar-toggle flex-center min-md-none position-fixed t-0 pv-1rem pl-2rem bg-$neutral-100"
        >
          <p className="flex-center text-base tc-$neutral-900 gap-6px">
            <span className="btn flex-center box-30px border bw-1px bc-$neutral-400 br-4px mr-4px">
              <span className="ms-sharp text-md">sort</span>
            </span>
            tenoxUI <span className="tc-$neutral-500">/</span>{" "}
            <span className="tc-$accent-500">CSS</span>
          </p>
        </ToggleButton>
        <div
          className={`bg-$neutral-100 ph-2rem pv-1rem position-$docs-position t-0 l-${sidebarPosition} h-100vh`}
        >
          <div className="flex flex-center relative jc-[flex-start] gap-2rem">
            <Link to="/" className="min-md-none">
              <header className="flex ai-center">
                <p className="flex-center text-base tc-$neutral-900 gap-6px font-medium">
                  tenoxUI <span className="tc-$neutral-500">/</span>{" "}
                  <span className="tc-$accent-500">CSS</span>
                </p>
              </header>
            </Link>
            <ToggleButton
              toggleSidebar={toggleSidebar}
              className="btn flex-center box-30px border bw-1px bc-$neutral-400 br-4px min-md-none"
            >
              <span className="tc-$neutral-900 ms-sharp text-sm">close</span>
            </ToggleButton>
          </div>
          <Link to="/" className="max-md-none">
            <header className="flex ai-center gap-6px">
              <span className="btn flex-center box-30px border bw-1px bc-$neutral-400 br-4px mr-4px flex-center relative">
                <i className="txi ti-vtx_part_2 absolute text-md tc-$accent-500"></i>
                <i className="txi ti-vtx_part_1 absolute text-md tc-$neutral-900"></i>
              </span>
              <p className="flex-center text-base tc-$neutral-900 gap-6px font-medium">
                tenoxUI <span className="tc-$neutral-500">/</span>{" "}
                <span className="tc-$accent-500">CSS</span>
              </p>
            </header>
          </Link>
          {/* Link */}
          <div className="h-90% over-y-auto mt-2rem">
            <SidebarLinks />
          </div>
        </div>
        <div className="bg-red w-full h-100% none"></div>
      </aside>
    </>
  );
};

export default DocsSidebar;
