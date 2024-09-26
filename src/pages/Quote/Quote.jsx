import React, { useState } from "react";
import emailjs from "emailjs-com";
import SectionHeader from "../../components/Header/SectionHeader";
import quoteBanner from "../../assets/images/pexels-lucaspezeta-2100681.jpg";

//Loading environment variables
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicId = import.meta.env.VITE_EMAILJS_PUBLIC_ID;


const Quote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  //Creating object that contains dynamic template params
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    to_name: 'Homoroyal Construction',
    subject: formData.subject,
    message: formData.message,
    reply_to: formData.email
  }

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to send email via EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Sending email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicId).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setLoading(false);
        setSuccess(true);
        // Clear form fields after successful submission
        setFormData({ name: "", email: "", subject: "", message: "" });
      },
      (err) => {
        console.error("FAILED...", err);
        setLoading(false);
      }
    );
  };

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
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label htmlFor="name" className="mb-1 block text-black">
                    Full Name
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
                  <label
                    htmlFor="email"
                    className="mb-1 block font-sm text-black"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@domain.com"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2.5 px-6 font-normal text-[#6B7280] outline-none focus:border-blue-700 focus:shadow-md"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="subject" className="mb-1 block text-black">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter your subject"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2.5 px-6 font-normal text-[#6B7280] outline-none focus:border-blue-700 focus:shadow-md"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="message"
                    className="mb-1 block font-sm text-black"
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
                <div>
                  <button
                    type="submit"
                    className="hover:shadow-form rounded-md bg-blue-700 py-2.5 px-8 text-sm font-medium text-white outline-none"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Submit"}
                  </button>
                </div>
                {success && (
                  <p className="text-green-600 mt-3">
                    Message sent successfully!
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex">
          <img
            className="w-full h-full object-cover saturate-50"
            src={quoteBanner}
            alt="Quote Banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Quote;
