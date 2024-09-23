import React, { useState } from "react";
import { blogPost } from "../../../utils/Data";
import SectionHeader from "../../../components/Header/SectionHeader";
import BlogCard from "../../../components/Cards/BlogCard";

const Blog = () => {
  const [isBlog, setIsblog] = useState(blogPost);

  return (
    <section id="blog" className="w-screen bg-[#fae8eb] py-10">
      <div className="w-[90vw] mx-auto flex justify-center items-center flex-col gap-3">
        <SectionHeader title={"Trending news"} context={"trending post"} />

        <div className="w-full gap-0 md:gap-8 grid grid-cols-12 col-span-10 col-start-2">
          {isBlog.map((item) => (
            <BlogCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
