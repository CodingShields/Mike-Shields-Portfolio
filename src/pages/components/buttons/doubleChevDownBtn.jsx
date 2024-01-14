const DoubleChevDownBtn = ({ handleTabsActive }) => {
  return (
    <svg
      onClick={handleTabsActive}
      className="h-16 animate-pulse mb-8 mt-2 cursor-pointer stroke-green-500 -translate-y-96 duration-1000 ease-in-out"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

export default DoubleChevDownBtn;
