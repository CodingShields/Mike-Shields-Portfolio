import { useState } from "react";

const Tabs = () => {
  const tabsList = ["About", "Projects", "Contact", "Resume", "Education"];

    
// const activeButton =   
    
    
  return (
    <div className="w-full flex flex-row justify-center mb-6 ">
          <div
          className="w-fit bg-white rounded-lg"
          >
        {tabsList.map((item, index) => {
          return (
            <button
              key={index}
              className=" text-black bg-transparent text-lg hover:bg-gray-500  ml-4 mr-4 py-2 px-4 "
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
