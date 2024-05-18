import React, { useState } from "react";
// import useStyles from "../../../../utils/useStyles";
import tabStyles from "../hooks/tabStyles";
// import "./Tabs.css"; // Import your component styles

interface TabItemProps {
  title?: any;
  children?: any;
}

const Tabs: React.FC<TabItemProps> = ({ children }) => {
  // useStyles()
  const [activeTab, setActiveTab] = useState(0);

  tabStyles(activeTab);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };
  const trans_all = "tr-prop-all tr-time-0.5s tr-timing-ease";
  return (
    <div className="w-full">
      <div className="flex">
        {React.Children.map(children, (child, index) => {
          const tab = child as React.ReactElement<TabItemProps>;
          return (
            <div
              key={index}
              className={`cursor-pointer center tc-neutral-900 p-8px ${trans_all} ${
                index === activeTab
                  ? "back-c-accent-500 tc-neutral-100 rounded"
                  : "bw-0 back-c-transparent"
              }`}
              onClick={() => handleTabClick(index)}
            >
              {tab.props.title}
            </div>
          );
        })}
      </div>
      <div className="bg-neutral-200 rounded">
        {React.Children.toArray(children)[activeTab]}
      </div>
    </div>
  );
};

const TabItem: React.FC<TabItemProps> = ({ children }) => {
  return <div className="tab-content-item">{children}</div>;
};

export { Tabs, TabItem };
