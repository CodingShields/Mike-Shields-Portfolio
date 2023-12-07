import NavBar from "../layout/navbar";
import bg from "../../assets/video/bg.mp4";

const HomePage = () => {
  return (
    <div className="">
      <video className="h-full w-full " autoPlay loop id="video">
        <source src={bg} type="video/mp4" />
      </video>
    </div>
  );
};

export default HomePage;
