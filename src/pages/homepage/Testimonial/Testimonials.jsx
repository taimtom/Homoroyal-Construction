import React from "react";
import Slider from "react-slick";
import { testiPost } from "../../../utils/Data";
import TestimonialCard from "../../../components/Cards/TestimonialCard";
import SectionHeader from "../../../components/Header/SectionHeader";

const Testimonials = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="testimonials" className="w-screen bg-[#fae8eb] py-10 z-20">
      <div className="w-[90vw] mx-auto flex justify-center items-center flex-col gap-3">
        <SectionHeader
          title={"testimonials"}
          context={"hear from our clients"}
        />
        <div className="w-full">
          <Slider {...settings}>
            {testiPost.map((item) => (
              <div key={item.id} className="w-full px-4">
                <TestimonialCard carousel={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
