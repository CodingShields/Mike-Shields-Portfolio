import { useState } from "react";
import Tabs from "./tabs";
import doubleChevUp from "../../assets/icons/doubleChevUp.svg";

const SectionOne = () => {
  const [tabsActive, setTabsActive] = useState(false);

  const handleTabsActive = () => {
    setTabsActive(!tabsActive);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-gray-400">
      <div className="flex flex-col h-full justify-center items-center content-center text-center">
        <p className="text-4xl">Welcome to my portfolio!</p>
        <p className="text-4xl">I am Mikey Shields...</p>
        <p className="text-4xl">and I love to build cool things on the web.</p>
      </div>
      <Tabs />
      <div className="mt-auto">
        <img
          onClick={handleTabsActive}
          className="w-fit h-6 inline fill-white animate-pulse"
          src={doubleChevUp}
          alt="double chevron up"
        />
      </div>
    </div>
  );
};

export default SectionOne;
