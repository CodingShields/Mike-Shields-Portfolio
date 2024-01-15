import { useEffect, useState } from "react";
import navBarList from "../../assets/navBarList";
import boxState from "../../assets/boxState";
import boxStateLargeScreen from "../../assets/boxStateLargeSceen";
import "../../sectionOne.css";

const DragContainer = ({ setOpenTab }) => {
  const [box, setBox] = useState(boxState);
  const [currentTab, setCurrentTab] = useState("");
  const [currentBox, setCurrentBox] = useState({
    id: null,
    name: "",
    x: 0,
    y: 0,
  });
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  console.log(screenSize);
  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      if (screenSize.width > 2600) {
        setBox(boxStateLargeScreen);
      } else {
        setBox(boxState);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDragEnd = (event) => {
    const currentEvent = event.target.id;
    const currentX = event.clientX;
    const currentY = event.clientY;
    const currentBoxName = event.target.innerText;
    const prevBoxId = currentBox.id;
    if (prevBoxId !== currentEvent) {
      setBox((prev) => {
        return prev.map((item) => {
          if (item.id === parseInt(prevBoxId)) {
            return {
              ...item,
              x: item.startingX,
              y: item.startingY,
              selected: false,
            };
          }
          return item;
        });
      });
    }
    setBox((prev) => {
      return prev.map((item) => {
        if (item.id === parseInt(currentEvent)) {
          return {
            ...item,
            x: currentX,
            y: currentY,
            selected: changeBoxBoolean(currentBox),
          };
        } else {
          return item;
        }
      });
    });
    setCurrentBox({
      id: currentEvent,
      name: currentBoxName,
      x: currentX,
      y: currentY,
      selected: changeBoxBoolean(currentBox),
    });
  };

  const resetPosition = () => {
    setBox(boxState);
  };

  const changeBoxBoolean = (currentBox) => {
    if (
      currentBox.x > 200 &&
      currentBox.x < 700 &&
      currentBox.y < 850 &&
      currentBox.y > 500
    ) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    const div = document.getElementById("0");
    const location = div.getBoundingClientRect();

    if (currentBox.x > location.left && currentBox.x < location.right) {
      if (currentBox.y > location.top && currentBox.y < location.bottom) {
        setBox((prev) => {
          return prev.map((item) => {
            if (item.id === parseInt(currentBox.id)) {
              setOpenTab(currentBox);
              return {
                ...item,
                x: 300,
                y: 650,
              };
            } else {
              return item;
            }
          });
        });
      }
    }
  }, [currentBox]);

  return (
    <div>
      <button
        className="bg-green-500 bg-opacity-50 hover:scale-125 hover:bg-opacity-100 text-white font-bold py-2 px-4 absolute bottom-500 left-0 ml-20 duration-300 ease-in-out rounded-lg shadow-xl "
        onClick={resetPosition}
      >
        Reset Nav Bar
      </button>
      {box.map((item, index) => {
        return (
          <div
            key={index}
            id={item.id}
            value={item.name}
            className={
              "h-24 w-32 text-white text-2xl flex justify-center items-center hover:shadow-green-400 cardBG shadow-xl z-20 rounded-lg transition-all hover:border-2 hover:border-white hover:cursor-grab active:cursor-grabbing hover:scale-125 duration-300 ease-in-out"
            }
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
          top: 425,
        }}
        className="w-72 h-72 flex flex-col justify-start items-center absolute sectionOneCard  shadow-green-500 shadow-xl rounded-xl "
      >
        <h1 className="text-2xl text-white text-center mt-4 animate-bounce">
          Place Tab Here
        </h1>
      </div>
    </div>
  );
};

export default DragContainer;
