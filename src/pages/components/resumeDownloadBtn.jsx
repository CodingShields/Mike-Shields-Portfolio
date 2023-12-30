import { useState } from "react";

const ResumeDownloadBtn = () => {
  const [state, setState] = useState("idle");

  return (
      <div
          className="w-full h-full justify-center items-center flex flex-col transition-background ease-in-out duration-1000"
      >
    <iframe
      src="https://codingshieldsresume.netlify.app/" // Replace with the URL of the webpage you want to display
      title="Webpage Display"
      width="2000px"
      height="1000px"
    ></iframe>
      </div>
  );
};
export default ResumeDownloadBtn;
