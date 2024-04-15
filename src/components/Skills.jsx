import React from "react";
import Frontend from "./Frontend";
import Tools from "./Tools";
const Skills = () => {
  return (
    <section id="skills" className="pt-20 flex flex-col items-center mb-32">
      <h2 className="text-zinc-800 text-3xl font-bold ">Skills</h2>
      <span className="text-sm mt-2">My technical level</span>
      <div className="grid grid-cols-2 gap-x-14 mt-16 max-md:grid-cols-1 max-md:gap-y-8 max-md:gap-x-0 max-md:px-5">
        <Frontend />
        <Tools />
      </div>
    </section>
  );
};

export default Skills;
