import React from "react";

const SectionHeader = ({ title, context }) => {
  return (
    <>
      <div className="w-full flex justify-start flex-col mb-6">
        <div className="w-full flex justify-start items-center mb-1">
          <div className=" w-8 h-[0.15rem] bg-[#faa916] mr-3"></div>
          <h1 className="text-xl lg:text-3xl font-semibold capitalize">{title}</h1>
        </div>
        <h6 className="text-[#011936] text-[10px] lg:text-xs font-medium uppercase">
          {context}
        </h6>
      </div>
    </>
  );
};

export default SectionHeader;
