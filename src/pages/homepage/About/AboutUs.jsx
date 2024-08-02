import React from "react";
import abtbanner from "../../../assets/images/home-variant-3-555x500.jpg";
import { aboutUs } from "../../../utils/Data";
import SectionHeader from "../../../components/Header/SectionHeader";

const AboutUs = () => {
  return (
    <section id="about" className="w-screen bg-[#f7f4f3] py-12 z-20">
      <div className="w-[90vw] mx-auto flex justify-center items-center flex-col">
        <SectionHeader title={"about us"} context={"who we are"}/>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="w-full h-full flex items-center flex-col">
            <p className="text-gray-600 font-normal leading-relaxed">
              Homoroyal Construction Company Limited is an incorporated
              construction and development firm with interests in building,
              industrial sites, road construction and infrastructural
              developments in Nigeria. The company was founded on core values of
              integrity, innovation, safety, sustainability, respect and service
              excellence. With a positively compelling disposition in
              undertaking project briefs, Homoroyal Construction Company Limited
              prides itself in the quality of its service delivery, technical
              competence, global outlook and a team of dedicated and highly
              experienced staff.
            </p>
            <div className="flex items-center flex-col gap-6 mt-8">
              {aboutUs.map((item) => (
                <div key={item.id} className="">
                  <span>
                    <img src={item.icon} alt="" />
                  </span>
                  <div className="">
                    <h4 className=" inline-block text-sm text-[#011936] font-semibold mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 font-normal">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* image container */}
          <div className="w-full max-h-[60vh] rounded-xl z-20 overflow-hidden">
            <img
              className="w-full object-cover aspect-auto contrast-75"
              src={abtbanner}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
