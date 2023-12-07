import logo from '../../assets/images/logo.svg'


const NavBar = () => {
  
   
  return (
    <div className="bg-blackflex flex-row justify-between items-center p-4 shadow-2xl">
      <div className=" h-fit w-fit">
        <img src={logo} alt="logo" className=" w-1/4" />
      </div>
      <div className="flex flex-row justify-end">
        <button className="bg-white text-black p-2 rounded-lg m-2">
          Resume
        </button>
      </div>
    </div>
  );
}

export default NavBar