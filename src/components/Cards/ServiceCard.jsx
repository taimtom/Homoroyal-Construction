import React from "react";
import servi from "../../assets/images/structural.jpg";

const ServiceCard = ({ data }) => {
  return (
    <div className="w-full  ">
      <div
        className={`w-full flex items-center flex-wrap ${
          data.id % 2 === 0 ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div className="w-1/2 px-16">
          <h4 className="text-4xl mb-4 capitalize">{data.title}</h4>
          <p className=" ">{data.content}</p>
        </div>
        <div className="w-1/2 rounded-lg overflow-hidden">
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
