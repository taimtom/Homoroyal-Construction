import React from "react";
import { services } from "../../../utils/Data";
import SectionHeader from "../../../components/Header/SectionHeader";

const Services = () => {
  return (
    <section id="services" className="w-screen bg-[#fae8eb] py-10">
      <div className="w-[90vw] mx-auto flex justify-center items-center flex-col">
        <SectionHeader title={"services"} context={"what we do"}/>
        <div className="w-full flex justify-start items-center flex-col gap-8">
          {/* <p className="ring">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptas temporibus dolorum dolorem amet voluptates.</p> */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {services.map((item) => (
              <div className="w-full bg-[#ECF8F8]/60 rounded-lg shadow-md z-20 overflow-hidden ring-1 ring-[#011936]/20">
                <img
                  className="min-w-full max-h-[220px] object-cover mb-2"
                  src={item.image}
                  alt=""
                />
                <div className=" p-3">
                  <h4 className="text-base text-[#011936] font-medium capitalize mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600/80 font-normal line-clamp-3">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
