import { useState, useEffect } from "react";
import Tabs from "./tabs";
import doubleChevUp from "../../assets/icons/doubleChevUp.svg";
import fadedCircle from "../../assets/images/fadedCircle.svg";

const SectionOne = () => {
  const [tabsActive, setTabsActive] = useState(false);

  const handleTabsActive = () => {
    setTabsActive(!tabsActive);
  };
  return (
    <div
      className={`w-full h-full flex flex-col transition-opacity justify-center items-center ease-in-out duration-3000 delay-700 bg-gradient-to-r
    ${
      !tabsActive
        ? "from-black to-white ease-in-out duration-3000 delay-700 transition-backgroundColor"
        : "from from-green-600 to-blue-500 ease-in-out duration-3000 delay-700 transition-backgroundColor"
    }`}
    >
      <div className="flex flex-col h-full justify-center items-center content-center text-center">
        <p className="text-4xl py-3">Welcome to my portfolio!</p>
        <div
          className={` transition-opacity flex flex-col 
      ${
        tabsActive
          ? "ease-in duration-700 opacity-100"
          : "ease-out duration-700 opacity-0  "
      }`}
        >
          <p className=" text-4xl animate-pulse py-4">I am ...</p>
          <div className="flex flex-row justify-center items-center content-center text-center text-4xl py-8  ">
            <p className="hover:animate-bounce hover:px-1">M</p>
            <p className="hover:animate-bounce hover:px-1">i</p>
            <p className="hover:animate-bounce hover:px-1">k</p>
            <p className="hover:animate-bounce hover:px-1">e</p>
            <p className="hover:animate-bounce hover:px-1"></p>
            <p className="hover:animate-bounce hover:px-1">y</p>
            <p className="hover:animate-bounce hover:px-1">S </p>
            <p className="hover:animate-bounce hover:px-1">h </p>
            <p className="hover:animate-bounce hover:px-1">i </p>
            <p className="hover:animate-bounce hover:px-1">e </p>
            <p className="hover:animate-bounce hover:px-1">l </p>
            <p className="hover:animate-bounce hover:px-1">d </p>
            <p className="hover:animate-bounce hover:px-2">s</p>
          </div>

          <p className="h-full text-4xl ">
            and I love to build cool things on the web.
          </p>
        </div>
      </div>
      <div
        className={` flex flex-row transition-opacity 
      ${
        tabsActive
          ? "ease-in duration-700 opacity-100"
          : "ease-out duration-700 opacity-0 translate-y-20"
      }`}
      >
        <Tabs />
      </div>

      <div onClick={handleTabsActive}>
        <svg
          className="w-auto h-7 animate-pulse mb-4 mt-10 hover:cursor-pointer hover:stroke-green-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
          />
        </svg>
        <div></div>
      </div>
    </div>
  );
};

export default SectionOne;
