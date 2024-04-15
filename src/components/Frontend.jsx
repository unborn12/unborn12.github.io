import React from "react";

const Frontend = () => {
  return (
    <div className="bg-white border grid grid-cols-1 justify-items-center gap-y-6 py-8 px-10 rounded-xl shadow-sm ">
      <h2 className="font-semibold text-zinc-700 text-lg">
        Full Stack Developer
      </h2>
      <div className="grid grid-cols-2 gap-x-16 gap-y-4 max-[350px]:grid-cols-1">
        <div className="flex items-baseline gap-1">
          <i className="bx bx-badge-check text-zinc-700"></i>
          <div>
            <h3 className="font-semibold text-zinc-700">HTML</h3>
            <span className="text-xs">Experienced</span>
          </div>
        </div>
        <div className="flex items-baseline gap-1">
          <i className="bx bx-badge-check text-zinc-700"></i>
          <div>
            <h3 className="font-semibold text-zinc-700">Tailwind</h3>
            <span className="text-xs">intermediate</span>
          </div>
        </div>

        <div className="flex items-baseline gap-1">
          <i className="bx bx-badge-check text-zinc-700"></i>
          <div>
            <h3 className="font-semibold text-zinc-700">Git</h3>
            <span className="text-xs">intermediate</span>
          </div>
        </div>

        <div className="flex items-baseline gap-1">
          <i className="bx bx-badge-check text-zinc-700"></i>
          <div>
            <h3 className="font-semibold text-zinc-700">React</h3>
            <span className="text-xs">junior</span>
          </div>
        </div>
        <div className="flex items-baseline gap-1">
          <i className="bx bx-badge-check text-zinc-700"></i>
          <div>
            <h3 className="font-semibold text-zinc-700">Node js</h3>
            <span className="text-xs">Beginner</span>
          </div>
        </div>
        <div className="flex items-baseline gap-1">
          <i className="bx bx-badge-check text-zinc-700"></i>
          <div>
            <h3 className="font-semibold text-zinc-700">C#</h3>
            <span className="text-xs">Beginner</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
