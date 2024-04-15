import React from "react";

const Info = () => {
  return (
    <div className="grid grid-cols-[repeat(2,140px)] mb-8 justify-start gap-x-6 max-lg:justify-items-end max-sm:justify-items-center  max-cus:scale-75">
      <div className="flex flex-col w-fit gap-1 bg-white px-4 py-3 border rounded-xl">
        <i className="bx bx-briefcase-alt self-center"></i>
        <h3 className="font-semibold text-zinc-700">Completed</h3>
        <span className="text-sm">20 + Projects</span>
      </div>
      <div className="flex flex-col w-fit gap-1 bg-white px-4 py-3 border rounded-xl">
        <i className="bx bx-support self-center"></i>
        <h3 className="font-semibold text-zinc-700 text-center">Support</h3>
        <span className="text-sm">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
