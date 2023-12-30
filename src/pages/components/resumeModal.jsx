import { useState } from "react";

export default function ResumeModal({closeModal}) {


  return (
    <div className="absolute right-1/2 top-1/2 ">
      <div className="absolute  flex flex-col w-3/4 justify-center items-center space-y-16 ml-20 -mt-20 ">
        <button className="inline-flex w-48 justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
          View Resume
        </button>
        <button className="inline-flex w-48 justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
          Download Resume
        </button>
        <button
          type="button"
          className="inline-flex w-48 justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
}
