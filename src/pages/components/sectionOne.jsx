import { useState, useEffect } from "react";
import Tabs from "./tabs";
import doubleChevUp from "../../assets/icons/doubleChevUp.svg";
import fadedCircle from "../../assets/images/fadedCircle.svg";
import "../../sectionOne.css";

const SectionOne = () => {
  const [tabsActive, setTabsActive] = useState(false);

  const handleTabsActive = () => {
    setTabsActive(!tabsActive);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  useEffect(() => {
    setTabsActive(false);
  }, []);

  return (
    <div
      className={classNames(
        "w-full h-full justify-center items-center flex flex-col transition-background ease-in-out duration-1000 ",
        tabsActive
          ? "bg-white " // Opacity set to 1 when active
          : "bg-black ", // Opacity set to 0 when not active
      )}
    >
      <div
        className={classNames(
          "flex flex-col h-2/4 w-2/4  justify-center items-center content-center transition-all text-center delay-300 duration-1000",
          tabsActive
            ? "ease-in duration-700 opacity-100  rounded-2xl shadow-2xl shadow-black cardBG"
            : "ease-out duration-700  delay-100",
        )}
      >
        <p className="text-6xl py-3 text-white ">Welcome to my portfolio!</p>
        <div
          className={classNames`transition-opacity flex flex-col delay-750 ${
            tabsActive
              ? "ease-in duration-700 opacity-100 delay-600"
              : "ease-out duration-700 opacity-0 delay-600"
          }`}
        >
          <p className="text-4xl  py-4 text-white">I am ...</p>
          <div
            className="flex flex-row justify-center items-center content-center font-semibold 
            bg-gradient-to-r bg-clip-text text-transparent 
            from-black via-green-200 to-green-600
            animate-text py-8"
          >
            <p className="name text-6xl py-8">Mikey Shields</p>
          </div>
          <p className="h-full text-4xl text-white">
            and I love to build cool things on the web.
          </p>
        </div>
      </div>

      <div
        className={`flex flex-row transition-opacity mt-20 ${
          tabsActive
            ? "ease-in duration-700 opacity-100"
            : "ease-out duration-700 opacity-0"
        }`}
      >
        <Tabs />
        test
      </div>
      <div className="z-20" onClick={handleTabsActive}>
        <svg
          className="h-16 animate-pulse mb-8 mt-2 cursor-pointer stroke-green-500 z-20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default SectionOne;
