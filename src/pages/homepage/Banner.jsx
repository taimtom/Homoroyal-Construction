import { useEffect, useRef } from "react";
import site from "../../assets/video/sitevideo.mp4";
import hero from "../../assets/video/hero.mp4";

const Banner = () => {
  const videoEl = useRef();
  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  return (
    <div className="w-screen h-[70vh] lg:h-[92vh] relative overflow-hidden">
      <div className="-z-10">
        <video
          style={{
            width: "100vw",
            height: "92vh",
            margin: "0 auto",
            objectFit: "cover",
          }}
          playsInline
          loop
          muted
          // controls
          alt="All the devices"
          src={site}
          ref={videoEl}
        />
      </div>
      <div className=" bg-[#131b23]/55 w-screen h-full absolute top-0 left-0 flex items-center z-20">
        <div className="w-[90vw] mx-auto flex justify-center flex-col lg:pt-0 z-30">
          <div className="w-full flex items-center mb-0 lg:mb-2">
            <div className=" w-10 h-[0.15rem] bg-white mr-3"></div>
            <small className=" text-[#faa916] text-xs font-semibold">
              HOMOROYAL CONSTRUCTION
            </small>
          </div>
          <h2 className="w-full lg:w-[80%] text-[#e9f1f7] text-[1.8rem] lg:text-[2.8rem] -tracking-wide font-extrabold mt-4 leading-[2.4rem] lg:leading-[4rem]">
            Design, Construction, and maintenance of the physical and naturally
            {/* built environment such as buildings, estates and roads. */}
          </h2>

          <div className="flex items-center gap-5 md:gap-9 mt-10">
            <button className="bg-blue-700 text-white text-[0.7rem] lg:text-sm font-medium py-2.5 px-6 rounded-md">
              Learn more
            </button>
            <button className="bg-blue-700 text-white text-[0.7rem] lg:text-sm font-medium py-2.5 px-6 rounded-md">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
