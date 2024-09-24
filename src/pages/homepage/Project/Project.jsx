import React from "react";
import SectionHeader from "../../../components/Header/SectionHeader";
import { project } from "../../../utils/Data";

const Project = () => {
  return (
    <section id="project" className="w-screen bg-[#fae8eb] py-10 z-20">
      <div className="w-[90vw] mx-auto flex justify-center items-center flex-col">
        <SectionHeader title={"project"} context={"what we do"} />
        <div className="">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4">
            {project.map((item) => (
              <div
                key={item.id}
                className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-md"
              >
                <div className=" h-96 w-80">
                  <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[40%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="text-lg lg:text-2xl font-bold text-white">
                    {item.title}
                  </h1>
                  <p className="mb-3 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
