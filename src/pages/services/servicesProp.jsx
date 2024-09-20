import React from "react";
import ServiceCard from "../../components/Cards/ServiceCard";
import { services } from "../../utils/Data";

const ServicesProp = () => {
  return (
    <div className="w-screen py-12">
      <div className="w-[90vw] mx-auto flex items-center flex-col gap-12 lg:gap-16">
        {services.map((item) => (
          <ServiceCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ServicesProp;
