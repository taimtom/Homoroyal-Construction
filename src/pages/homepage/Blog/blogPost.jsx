import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogPost } from "../../../utils/Data";

const BlogPost = () => {
  const [isPost, setIsPost] = useState(null);
  const { blogId } = useParams();

  function createSlug(str) {
    return str
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  }

  useEffect(() => {
    const postUrl = blogPost.find((data) => createSlug(data.title) === blogId);
    if (postUrl) {
      setIsPost(postUrl);
    }
  }, [blogId]);

  return (
    <div className="w-screen py-12">
      <div className="w-[90vw] lg:w-[60vw] mx-auto flex items-center flex-col">
        <div className="">
          {isPost && (
            <>
              <div className="mb-6">
                <h1 className="text-xl lg:text-3xl font-bold flex items-center leading-6">
                  <div className="h-10 w-2 bg-[#faa916] text-[#faa916] mr-3"></div>
                  {isPost.title}
                </h1>
              </div>
              {isPost.reads && (
                <div className="">
                  {isPost.reads.map((item, i) => (
                    <p
                      key={i}
                      className="text-sm font-light leading-relaxed mt-4"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </>
          )}
          {!isPost && <h1>Blog post not found</h1>}
          <p className="text-sm italic font-light mt-4 text-gray-600">
            Published on {new Date(isPost?.date).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
