import React, { useState } from "react";
import emailjs from "emailjs-com";
import SectionHeader from "../../../components/Header/SectionHeader";

//Loading environment variables
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicId = import.meta.env.VITE_EMAILJS_PUBLIC_ID;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  //Creating object that contains dynamic template params
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    to_name: "Homoroyal Construction",
    // subject: formData.subject,
    message: formData.message,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Send email using emailjs
    emailjs.send(serviceId, templateId, templateParams, publicId).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setLoading(false);
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      },
      (err) => {
        console.error("FAILED...", err);
        setLoading(false);
      }
    );
  };

  return (
    <section id="contact" className="w-screen bg-[#fae8eb] py-10 z-20">
      <div className="w-[90vw] mx-auto flex justify-center items-center flex-col gap-4">
        <SectionHeader title={"contact"} context={"our medium of contact"} />
        <section className="mb-9 w-full">
          <div className="">
            <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 border border-gray-300 z-40">
              <div className="flex flex-wrap">
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                      <label htmlFor="name" className="mb-1 block text-black">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2.5 px-6 font-normal text-[#6B7280] outline-none focus:border-blue-700 focus:shadow-md"
                        required
                      />
                    </div>
                    <div className="mb-5">
                      <label htmlFor="email" className="mb-1 block text-black">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="johndoe@example.com"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2.5 px-6 font-normal text-[#6B7280] outline-none focus:border-blue-700 focus:shadow-md"
                        required
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="message"
                        className="mb-1 block text-black"
                      >
                        Message
                      </label>
                      <textarea
                        rows="5"
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Type your message"
                        className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white text-[0.76rem] lg:text-sm py-2.5 px-6 font-normal text-[#6B7280] outline-none focus:border-blue-700 focus:shadow-md"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="mb-2 rounded bg-blue-700 text-white px-9 pt-2.5 pb-2 text-sm font-medium capitalize leading-normal lg:mb-0"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send"}
                    </button>

                    {success && (
                      <p className="text-green-600 mt-3">
                        Message sent successfully!
                      </p>
                    )}
                  </form>
                </div>
                <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                  <div className="flex flex-wrap">
                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                      <div className="flex items-start">
                        <div className="shrink-0">
                          <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              className="h-6 w-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-6 grow">
                          <p className="mb-2 font-semibold ">
                            Technical support
                          </p>
                          <p className="text-sm text-neutral-500">
                            info@Homoroyal.com
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                      <div className="flex items-start">
                        <div className="srink-0">
                          <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-6 grow">
                          <p className="mb-2 font-semibold ">Address</p>
                          <p className="text-sm text-neutral-500">
                            Off Lagos-Badagry Express-Way Homoroyal Building, ,
                            3/5. Mosafejo Community Road, Mosafejo-Badagry,
                            Lagos State
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                      <div className="align-start flex">
                        <div className="shrink-0">
                          <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-6 grow">
                          <p className="mb-2 font-semibold ">Mobile Number</p>
                          <p className="text-neutral-500">+2349030174333</p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                      <div className="align-start flex">
                        <div className="shrink-0">
                          <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-6 grow">
                          <p className="mb-2 font-semibold ">Whatsapp</p>
                          <p className="text-neutral-500"> +234 81000000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Contact;
