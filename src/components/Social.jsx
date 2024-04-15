import React from "react";

const Social = () => {
  return (
    <div className="grid gap-y-5 grid-cols-[max-content] text-xl ">
      <a
        href="https://instagram.com/sk.gupta507"
        rel="noreferrer"
        target="_blank class"
        className="hover:text-zinc-900 "
      >
        <i className="uil uil-instagram "></i>
      </a>
      <a
        href="https://github.com/skgupta507"
        rel="noreferrer"
        target="_blank"
        className="hover:text-zinc-900 "
      >
        <i className="uil uil-github-alt"></i>
      </a>
      <a
        href="https://twitter.com/skgupta507"
        rel="noreferrer"
        target="_blank"
        className="hover:text-zinc-900 "
      >
        <i className="uil uil-twitter-alt"></i>
      </a>
    </div>
  );
};

export default Social;
