import React from "react";
import servi from "../../assets/images/structural.jpg";

const ServiceCard = ({ data }) => {
  return (
    <div id={data.title} className="w-full overflow-hidden">
      <div
        className={`w-full flex items-center sm:flex-col flex-wrap ${
          data.id % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <div className="w-full lg:w-1/2 px-0 lg:px-16 mb-4 lg:mb-0">
          <h4 className="text-2xl lg:text-4xl f mb-2 capitalize">{data.title}</h4>
          <p className=" ">{data.content}</p>
        </div>
        <div className="w-full lg:w-1/2 rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={data.image}
            alt={data.title}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
