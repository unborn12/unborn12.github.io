import React from "react";
// import Cinemaa from "../assets/Cinemaa.jpg";
const Project = ({ image, title, about, github, live, tools }) => {
  return (
    <div className=" bg-white shadow-md rounded-md h-full border border-zinc-300 ">
      <img
        src={image}
        alt="cinemaa"
        className="w-full rounded-t-md h-52 object-cover"
      />
      <div className="w-full px-7 py-4 mt-2 gap-4 flex flex-col pb-6">
        <h2 className="text-zinc-800 font-bold text-2xl max-sm:text-lg">
          {title}
        </h2>
        <p className="text-zinc-600 max-sm:text-sm">{about}</p>
        <div className="flex justify-between max-xm:flex-col max-xm:gap-2">
          <a href={github} target="_blank" rel="noreferrer ">
            <button className="px-4 py-2  bg-zinc-700 hover:bg-zinc-800 text-zinc-100 rounded-lg tracking-wide">
              GitHub
            </button>
          </a>
          <a href={live} target="_blank" rel="noreferrer">
            <button className="px-5 py-2 bg-zinc-700 hover:bg-zinc-800 text-zinc-100 rounded-lg tracking-wide">
              Live
            </button>
          </a>
        </div>
        <div className="flex gap-3 mt-2 flex-wrap">
          {tools.map((item, index) => {
            return (
              <span
                key={index}
                className="bg-[#e8e8e8]  text-xs rounded-md px-3 pt-[2px] pb-[1px]"
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
