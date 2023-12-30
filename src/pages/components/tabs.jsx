import { useState, useEffect } from "react";

import "../../sectionOne.css";

// ... (import statements and other code) ...

const Tabs = ({ openResumeModal }) => {
  const tabsList = [
    "About",
    "Projects",
    "Contact",
    "Resume",
    "Education",
    "Shop",
  ];

  const [hoveredTab, setHoveredTab] = useState(null);

  const handleResumeClick = (name) => {
    if (name === "Resume") {
      openResumeModal();
    }
    console.log(name);
  };

  const handleTabHover = (name) => {
    setHoveredTab(name);
    console.log(name);
  };

  return (
    <div className="w-full rounded-2xl mb-8">
      <div className="w-fit rounded-2xl py-2 px-10 shadow-2xl shadow-black hover:shadow-2xl ease-out duration-500 transition-all cardBG hover:ease-in hover:duration-700 hover:shadow-green-600 hover:ring-4 hover:ring-green-400">
        {tabsList.map((item, index) => {
          return (
            <button
              key={index}
              value={item.name}
              className={`button ease-out duration-200 mx-8 text-gray-700 ${
                hoveredTab === item
                  ? "hover:animate-pulse hover:text-white hover:ease-in hover:duration-400 hover:-translate-y-1 hover:delay-100"
                  : ""
              }`}
              onMouseEnter={() => handleTabHover(item)}
              onMouseLeave={() => handleTabHover(null)}
              onClick={() => handleResumeClick(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
