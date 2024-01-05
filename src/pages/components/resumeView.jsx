import { useState } from "react";

const ResumeDownloadBtn = () => {

  return (
    <div className="w-full h-full justify-center items-center flex flex-col transition-background ease-in-out duration-1000">
      <iframe
        src="https://mikehshields.dev/" // Replace with the URL of the webpage you want to display
        title="Webpage Display"
        width="2000px"
        height="1000px"
      ></iframe>
    </div>
  );
};
export default ResumeDownloadBtn;
