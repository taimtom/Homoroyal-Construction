import React from "react";

const Banner = () => {
  return (
    <div className="w-full h-60 bg-white flex justify-center">
      <div className="w-[90vw] mx-auto flex justify-center flex-col">
        <small className="uppercase text-[#faa916] text-xs font-medium mb-3">
          making things happen
        </small>
        <h1 className="text-4xl lg:text-6xl text-[#011936] font-light">Our Services</h1>
      </div>
    </div>
  );
};

export default Banner;
