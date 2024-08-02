import React from "react";
import SectionHeader from "../../components/Header/SectionHeader";
import quoteBanner from "../../assets/images/pexels-lucaspezeta-2100681.jpg";

const Quote = () => {
  return (
    <div className="w-screen z-20">
      <div className="w-full max-h-[50rem] grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        <div className="flex justify-start items-center flex-col py-8 lg:py-10 px-7 lg:px-24">
          <SectionHeader title={"Request Quote"} />

          <div className="w-full flex items-center justify-center flex-col lg:mt-8">
            <p className="text-slate-400 mb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus iste odit et similique, tempora dolores.
            </p>
            <div className="mx-auto w-full bg-white">
              <form action="https://fabform.io/f/{form-id}" method="post">
                <div className="mb-5">
                  <label
                    for="name"
                    className="mb-1 block text-black"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2.5 px-6  font-normal text-[#6B7280] outline-none focus:border-blue-700 focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <label for="email" className="mb-1 block font-sm text-black">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@domain.com"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2.5 px-6 font-normal text-[#6B7280] outline-none focus:border-blue-700 focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <label
                    for="subject"
                    className="mb-1 block text-black"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Enter your subject"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2.5 px-6 font-normal text-[#6B7280] outline-none focus:border-blue-700 focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <label
                    for="message"
                    className="mb-1 block font-sm text-black"
                  >
                    Message
                  </label>
                  <textarea
                    rows="5"
                    name="message"
                    id="message"
                    placeholder="Type your message"
                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white text-[0.76rem] lg:text-sm py-2.5 px-6 font-normal text-[#6B7280] outline-none focus:border-blue-700 focus:shadow-md"
                  ></textarea>
                </div>
                <div>
                  <button className="hover:shadow-form rounded-md bg-blue-700 py-2.5 px-8 text-sm font-medium text-white outline-none">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            className="w-full h-full object-cover saturate-50"
            src={quoteBanner}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Quote;
