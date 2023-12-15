import { useState } from "react";
import SectionOne from "./pages/components/sectionOne";
import SectionTwo from "./pages/components/sectionTwo";

function App() {
  return (
    <div
    className="w-full h-screen "
    >
      <SectionOne />
      <SectionTwo />
    </div>
  );
}

export default App;
