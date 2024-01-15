import { useState } from "react";

export default function ResumeModal({ closeModal }) {


  const modalOpen = () => {
    return (
      <div
        style={{
          transform: "translateY(-150px)",
          height: "100vh",
          left: -1000,
          top: -15,
        }}
        className="absolute  flex flex-col w-full justify-center items-center space-y-16 ml-20 -mt-20 translate-y-80 duration-700 ease-in-out transition-all"
      >
        <button
          onClick={closeModal}
          className="inline-flex w-48 justify-center rounded-md border border-transparent shadow-xl hover:shadow-white hover:scale-125 hover:bg-green-400 hover:text-black bg-black px-4 py-2 text-sm font-medium text-white duration-300 ease-in-out transition-all"
        >
          View Resume
        </button>
        <button className="inline-flex w-48 justify-center rounded-md border border-transparent shadow-xl hover:shadow-white hover:bg-green-400 hover:text-black hover:scale-125  bg-black px-4 py-2 text-sm font-medium text-white duration-300 ease-in-out transition-all ">
          Download Resume
        </button>
      </div>
    );
  };



  return (
    <div
      style={{
        transform: "translateY(-150px)",
        height: "100vh",
        left: -1000,
        top: -15,
      }}
      className="absolute  flex flex-col w-full justify-center items-center space-y-16 ml-20 -mt-20 translate-y-80 duration-700 ease-in-out transition-all"
    >
      <button
        onClick={closeModal}
        className="inline-flex w-48 justify-center rounded-md border border-transparent shadow-xl hover:shadow-white hover:scale-125 hover:bg-green-400 hover:text-black bg-black px-4 py-2 text-sm font-medium text-white duration-300 ease-in-out transition-all"
      >
        View Resume
      </button>
      <button className="inline-flex w-48 justify-center rounded-md border border-transparent shadow-xl hover:shadow-white hover:bg-green-400 hover:text-black hover:scale-125  bg-black px-4 py-2 text-sm font-medium text-white duration-300 ease-in-out transition-all ">
        Download Resume
      </button>
    </div>
  );
}
