


const DoubleChevUpBtn = ({ handleTabsActive }) => {
  return (
    <svg
      onClick={handleTabsActive}
      className="h-16 animate-pulse mb-8 mt-2 cursor-pointer stroke-black z-20 -translate-y-38 duration-1000 ease-in-out"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
      />
    </svg>
  );
};

export default DoubleChevUpBtn