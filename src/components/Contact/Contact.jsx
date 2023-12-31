import React from "react";

const Contact = () => {
  return (
    <div className="w-full h-screen overflow-scroll overflow-y-scroll pt-52 bg-primary-gray sm:overflow-hidden sm:pt-28 p-4">
      <div className="flex flex-col  justify-center max-w-screen-lg pt mx-auto h-full">
        <div className="sm:pb-2">
          <h2  className="text-3xl font-bold text-custom-red inline sm:text-4xl">Contact</h2>
          <p className="py-2 text-2xl text-white">Submit the form to get in touch with me!</p>
        </div>

        <div className="flex pt-4 justify-center items-center" >
          <form action="https://getform.io/f/6aafd976-6754-470f-b1e6-0f5c35a23a82" method="POST" className=" flex flex-col w-full h-full md:w-1/2">
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
              className="p-2 bg-dark-gray    border-2  rounded-md text-white focus:outline-none"
            ></textarea>

            <button type="submit" className="text-white bg-custom-red px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-200" >
            Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
