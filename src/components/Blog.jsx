import React from "react";
import Blog1 from "../assets/blog1.png";
import Blog2 from "../assets/blog2.png";
import Blog3 from "../assets/blog3.png";
import { FaArrowRight } from "react-icons/fa";

const Blog = () => {
  const blogs = [
    {
      image: Blog1,
      title: "24/7 Emergency Garage",
      date: "September, 2021",
      comments: 5,
      description:
        "At any moment, garage door operation can fail. This might be right when you need to get to work...",
    },
    {
      image: Blog2,
      title: "Garage Door Repairs",
      date: "September, 2021",
      comments: 5,
      description:
        "We offer a lot of different repairs for garage doors, for virtually every part of the system...",
    },
    {
      image: Blog3,
      title: "Garage Door Opener Repairs",
      date: "September, 2021",
      comments: 5,
      description:
        "If your garage door isn’t opening or closing, it’s probably due to a faulty opener...",
    },
  ];
  return (
      <div className="max-w-[1224px] mx-auto text-center mt-[30px]">
        <h2 className="text-2xl md:text-[60px] font-bold mb-10 font-plex my-[40px]">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px] w-[80%] mx-auto">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-[#F3F6FC] xl:w-[300px] shadow-md rounded-md overflow-hidden flex justify-center flex-col font-plex pb-[20px]"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left">
                <div className="text-sm text-gray-500 flex justify-between mb-2">
                  <span>📅 {blog.date}</span>
                  <span>💬 {blog.comments} Comments</span>
                </div>
                <h3 className="font-bold text-[20px] mb-2">{blog.title}</h3>
                <p className="text-sm text-gray-700 mb-4">{blog.description}</p>
              </div>
              <div className="flex justify-center">
                <button className="text-blue-600 cursor-pointer flex items-center gap-[10px] font-semibold border border-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition">
                  <FaArrowRight /> Read More
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="my-[50px]">
          <button className="text-blue-600 cursor-pointer font-semibold border border-blue-600 px-6 py-2 rounded hover:bg-blue-600 hover:text-white transition">
            + View More Blogs
          </button>
        </div>
      </div>
  );
};

export default Blog;
