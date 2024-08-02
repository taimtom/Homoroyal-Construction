import React from "react";
import SectionHeader from "../../../components/Header/SectionHeader";

const Project = () => {
  return (
    <section id="project" className="w-screen bg-[#fae8eb] py-16">
      <div className="w-[90vw] mx-auto flex justify-center items-center flex-col mb-6">
        <SectionHeader title={"project"} context={"what we do"} />
      </div>
    </section>
  );
};

export default Project;
