import React, { useState } from "react";

const SectionTwo = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    // Calculate the offset of the mouse click relative to the element's position
    const offsetX = e.clientX - position.x;
    const offsetY = e.clientY - position.y;

    // Store the offset in state
    setPosition({ x: offsetX, y: offsetY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    // Calculate the new position based on mouse movement and offset
    const newX = e.clientX - position.x;
    const newY = e.clientY - position.y;
    // Update the position state
    setPosition({ x: newX, y: newY });
    };
    
      const blackDivs = [
        { id: 1, x: 100, y: 100 },
        { id: 2, x: 200, y: 100 },
        { id: 3, x: 300, y: 100 },
        { id: 4, x: 400, y: 100 },
        { id: 5, x: 500, y: 100 },
        { id: 6, x: 600, y: 100 },
        { id: 7, x: 700, y: 100 },
      ];

  return (
    <div
      className="h-screen w-screen bg-white flex flex-col justify-center items-center"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      >
        {blackDivs.map((div) => (
            <div
            key={div.id}
            className="w-48 h-48 bg-black"
            style={{
                position: "absolute",
                left: div.x + "px",
                top: div.y + "px",
            }}
            ></div>
        ))}
      <div
        className="w-48 h-48 bg-black"
        style={{
          position: "absolute",
          left: position.x + "px",
          top: position.y + "px",
          cursor: isDragging ? "grabbing" : "grab",
        }}
        onDoubleClick={handleMouseDown}
      ></div>
    </div>
  );
};

export default SectionTwo;
