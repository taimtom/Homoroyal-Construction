import React from "react";
import { Link, useNavigate } from "react-router-dom";

const BlogCard = ({ item }) => {
  const navigate = useNavigate();

  function createSlug(str) {
    return str
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  }

  const slug = createSlug(item.title);

  const handleBlog = () => {
    navigate(`/blog/${slug}`);
  };
  return (
    <>
      <div
        key={item.id}
        onClick={handleBlog}
        className="bg-white/40 mb-10 md:md-0 col-span-12 sm:col-span-6 lg:col-span-4 ring-1 ring-red-950/30 shadow-md rounded-lg cursor-pointer overflow-hidden"
      >
        {/* <Link onClick={handleBlog}> */}
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
        {/* </Link> */}
      </div>
    </>
  );
};

export default BlogCard;
