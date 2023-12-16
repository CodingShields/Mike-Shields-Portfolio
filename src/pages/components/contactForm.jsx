import { useState, useEffect } from "react";
import "../../contactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    button: "",
    error: false,
    errorMessage: "",
  });

  const [userInput, setUserInput] = useState({
    companyName: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [currentFormIndex, setCurrentFormIndex] = useState(0);

  const form = [
    {
      id: 0,
      title: "Company Name",
      button: "Next",
      error: "Please enter Company Name",
    },
    {
      id: 1,
      title: "Full Name",
      button: "Next",
      error: "Please enter Full Name",
    },
    {
      id: 2,
      title: "Email",
      button: "Next",
      error: "Please enter Email",
    },
    {
      id: 3,
      title: "Phone Number",
      button: "Next",
      error: "Please enter Phone Number",
    },
    {
      id: 4,
      title: "Message",
      button: "Submit",
      error: "Please enter Message",
    },
    {
      id: 5,
      title: "Thank you! I will be in touch soon!",
      button: "Close",
    },
  ];

  const handleOnChange = (e) => {
    const changeData = e.target.value;
    setIsTitleVisible(false); // Hide the title before changing the title itself

    setTimeout(() => {
      setFormData({
        ...formData,
        title: form[currentFormIndex].title,
        button: form[currentFormIndex].button,
        error: false,
        errorMessage: "",
      });
      setUserInput({
        ...userInput,
        [form[currentFormIndex].title]: changeData,
      });
      setIsTitleVisible(true); // Show the title after changing the title
    }, 300); // You can adjust the delay duration as needed
  };

  const handleClick = () => {
    // Check if the current form index is the last one
    if (currentFormIndex < form.length - 1) {
      // Move to the next form index
      setCurrentFormIndex(currentFormIndex + 1);
    } else {
      // Handle submission or closing logic for the last form
      // You can implement your submission logic here
    }
  };

  useEffect(() => {
    setFormData({
      title: form[currentFormIndex].title,
      button: form[currentFormIndex].button,
      error: false,
      errorMessage: "",
    });
  }, [currentFormIndex]);

  return (
    <div className="w-full min-w-96 flex flex-col justify-center content-center items-center">
      <div className="flex min-w-96	min-h-48 bg-gray-400 rounded-2xl p-20">
        <div className="flex flex-row min-w-96	 py-8 bg-gray-600  rounded-2xl shadow-xl shadow-tomato-100 ">
          <div className="flex flex-row min-w-96 h-min-48	 justify-end items-center">
            <div className="w-72 min-w-96 justify-center items-end  mx-0 px-0">
              <p className=" w-48 min-w-96 text-2xl text-center font-bold text-tomato-100 ">
                {formData.title}:
              </p>
            </div>
            <div className="w-96 flex flex-row ">
              <input
                required
                onChange={(e) => handleOnChange(e)}
                placeholder={formData.title}
                value={userInput[formData.title]}
                className="w-96 mx-6 border-0 bg-transparent border-b-2 border-red-600 outline-none placeholder:text-gray-300 placeholder:italic focus:outline-none focus:ring-0 focus:border-b-4 focus:border-green-400 focus:transition-all focus:ease-in-out focus:duration-700 focus:delay-400"
                type="text"
              ></input>
            </div>

            <div
              onClick={handleClick}
              className="flex justify-center items-center h-full w-72 px-6 py-4 m-4 text-white buttonForm  active:ease-in-out active:duration-300 active:delay-400 "
            >
              <p className="text-3xl text-center">{formData.button}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
