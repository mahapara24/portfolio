import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full h-full overflow-scroll overflow-y-scroll pb-2 mb-8 pt-50  sm:pt-2 bg-primary-gray sm:overflow-hidden  "
    >
      <div className="flex flex-col  justify-center max-w-screen-lg pt-10 mx-auto h-full">
        <div className="ml-2 p-4">
          <h2 className="text-3xl font-bold text-center sm:text-left sm:text-4xl sm:font-bold  text-custom-red  ">
            Contact
          </h2>
          <p className="text-[19px] py-2 text-center sm:text-left font-normal  sm:text-2xl  text-white">
            Submit the form to get in touch with me!
          </p>
        </div>

        <div className="flex pt-4 justify-center items-center">
          <form
            action="https://getform.io/f/6aafd976-6754-470f-b1e6-0f5c35a23a82"
            method="POST"
            className=" flex flex-col w-[300px] h-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name "
              className="bg-dark-gray p-2 bg-transparent border-2  rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email "
              className="bg-dark-gray my-4 p-2 bg-transparent border-2  rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-primary-gray    border-2  rounded-md text-white focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="text-black font-semibold text-base bg-custom-red px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-200"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
