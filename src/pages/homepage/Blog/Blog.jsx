import React from "react";
import { blogPost } from "../../../utils/Data";
import SectionHeader from "../../../components/Header/SectionHeader";

const Blog = () => {
  return (
    <section id="blog" className="w-screen bg-[#fae8eb] py-10">
      <div className="w-[90vw] mx-auto flex justify-center items-center flex-col gap-3">
        <SectionHeader title={"Trending news"} context={"trending post"} />

        <div className="w-full">
          <ul className="w-full gap-0 md:gap-8 grid grid-cols-12 col-span-10 col-start-2">
            {blogPost.map((item) => (
              <li
                key={item.id}
                className="bg-white/40 mb-10 md:md-0 col-span-12 sm:col-span-6 lg:col-span-4 ring-1 ring-red-950/30 shadow-md rounded-lg overflow-hidden"
              >
                <a href="#">
                  <img
                    src={item.image}
                    className="w-full h-56 mb-4 shadow-none transition duration-500 ease-in-out group-hover:shadow-lg"
                    alt={item.title}
                  />
                  <div className="px-3 py-2">
                    <div className="flex items-center mb-3">
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 text-white font-display mr-2 capitalize bg-red-500">
                        {item.category}
                      </span>
                      <p className="font-mono text-xs font-normal opacity-75 text-black">
                        {item.date}
                      </p>
                    </div>
                    <p className="font-display max-w-sm text-xl font-semibold leading-tight">
                      <span className="link-underline link-underline-black text-black line-clamp-2">
                        {item.title}
                      </span>
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Blog;
