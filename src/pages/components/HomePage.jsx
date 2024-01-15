import { useState, useEffect } from "react";
import DoubleChevDownBtn from "./buttons/doubleChevDownBtn";
import DoubleChevUpBtn from "./buttons/doubleChevUpBtn";
import DragContainer from "./DragContainer";
import ResumeModal from "./resumeModal";

const HomePage = () => {
  const [tabsActive, setTabsActive] = useState(true);
  const [tabName, setTabName] = useState("");

  const handleTabsActive = () => {
    setTabsActive(!tabsActive);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  // useEffect(() => {
  //   setTabsActive(false);
  // }, []);

  const updateCurrentTab = (currentBox) => {
    const name = currentBox.name;
    const value = currentBox.selected;
    if (value === true) {
      setTabName(name);
    } else {
      setTabName("");
    }
    console.log(currentBox);
  };

  const closeModal = () => {
    setTabName("");
  };

  return (
    <div
      className={classNames(
        "w-full h-full justify-center items-center flex flex-col transition-background ease-in-out duration-700 ",
        tabsActive
          ? "bg-black bg-opacity-75" // Opacity set to 1 when active
          : "bg-black ", // Opacity set to 0 when not active
      )}
    >
      <div
        className={classNames(
          "flex flex-col h-2/4 w-2/4  bopacity-0 justify-center items-center content-center transition-all text-center ",
          tabsActive
            ? " delay-1000 duration-1000 rounded-2xl shadow-2xl shadow-green-500 sectionOneCard"
            : "delay-800 duration-1000 ",
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
            <p className="name text-8xl py-8">Mikey Shields</p>
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
            : "ease-out duration-700 opacity-0 "
        }`}
      ></div>
      <div
        className={
          (classNames = ` ${
            tabsActive
              ? "z-20 animate-pulse mb-8 mt-2 cursor-pointer z-20-translate-y-38 duration-1000 ease-in-out"
              : " animate-pulse mb-8 mt-2 cursor-pointer z-20 translate-y-96 duration-1000 ease-in-out"
          } `)
        }
        onClick={handleTabsActive}
      >
        {tabsActive ? (
          <DoubleChevUpBtn handleTabsActive={handleTabsActive} />
        ) : (
          <DoubleChevDownBtn handleTabsActive={handleTabsActive} />
        )}
      </div>
        {tabsActive ? <DragContainer setOpenTab={updateCurrentTab} /> : ""}
      {tabName === "Resume" ? <ResumeModal closeModal={closeModal} /> : ""}
    </div>
  );
};

export default HomePage;
