import "../../sectionOne.css";

const Tabs = () => {
  const tabsList = ["About", "Projects", "Contact", "Resume", "Education"];

  return (
    <div className="w-full rounded-2xl mb-8 ">
      <div className="w-fit rounded-2xl py-2 px-10   hover:shadow-2xl ease-out duration-700 transition-all cardBG hover:ease-in hover:duration-700 hover:shadow-green-600  hover:ring-4 hover:ring-green-400">
        {tabsList.map((item, index) => {
          return (
            <button
              key={index}
              className="button ease-out duration-200 mx-8 text-gray-500  hover:animate-pulse hover:text-white hover:ease-in hover:duration-400 hover:-translate-y-1 hover:delay-100"
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
