import { useEffect, useState } from "react";
import navBarList from "../../assets/navBarList";
import boxState from "../../assets/boxState";

const DragContainer = () => {
  const [currentTab, setCurrentTab] = useState(null);

  const [currentBox, setCurrentBox] = useState({
    id: null,
    name: "",
    x: 0,
    y: 0,
  });

  const [box, setBox] = useState(boxState);

  const handleDragEnd = (event) => {
    const currentEvent = event.target.id;
    const currentX = event.clientX;
    const currentY = event.clientY;
    setBox((prev) => {
      return prev.map((item) => {
        if (item.id === parseInt(currentEvent)) {
          return {
            ...item,
            x: currentX,
            y: currentY,
          };
        } else {
          return item;
        }
      });
    });
    setCurrentBox({
      id: currentEvent,
      name: "",
      x: currentX,
      y: currentY,
    });
  };

  const resetPosition = () => {
    setBox(boxState);
  };

  useEffect(() => {
    const div = document.getElementById("0");
    const location = div.getBoundingClientRect();
    if (currentBox.x > location.left && currentBox.x < location.right) {
      if (currentBox.y > location.top && currentBox.y < location.bottom) {
      }
    }
  }, [currentBox]);

  // function classNames(...classes) {
  //   return classes.filter(Boolean).join(" ");
  // }

  return (
    <div>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 absolute bottom-500 left-0 ml-20"
        onClick={resetPosition}
      >
        Reset Boxes
      </button>
      {box.map((item, index) => {
        return (
          <div
            key={index}
            id={item.id}
            className="h-24 w-32 text-white text-2xl flex justify-center items-center bg-green-500 bg-opacity-50 shadow-xl z-20 rounded-lg hover:cursor-grab active:cursor-grabbing"
            draggable
            onDragEnd={(e) => handleDragEnd(e)}
            style={{
              position: "absolute",
              left: `${item.x}px`,
              top: `${item.y}px`,
            }}
          >
            {item.name}
          </div>
        );
      })}

      <div
        id="0"
        style={{
          left: 200,
          top: 500,
        }}
        className="w-72 h-72 flex flex-col justify-center items-center absolute  border-2 border-black shadow-black shadow-xl rounded-xl "
      >
        <h1 className="text-2xl text-white text-center mt-4">Place Tab Here</h1>
        <div id="99" className="w-64 h-64 "></div>
      </div>
    </div>
  );
};

export default DragContainer;
