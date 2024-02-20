import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Experience() {
  return (
    <div className="snap-y px-10 h-screen w-full py-40 overflow-y-auto sm:overflow-hidden scroll-smooth  sm:py-40 sm:px-60 sm:pb-20  bg-primary-gray  ">
      <div className="sm:max-w-screen-lg pt-20 sm:p-4 flex flex-col justify-center  sm:py-30 sm:px-30 "></div>
    </div>
  );
}

export default Experience;

export const githubinfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/mahapara24");
  return response.json();
};
