import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="h-16 left-0 fixed bg-[#fafafa] shadow-sm backdrop-blur-sm max-sm:fixed w-full top-0 max-sm:bottom-0 max-md:bg-transparent  max-sm:top-auto z-50">
      <nav className="flex w-3/4 m-auto justify-between  items-center h-full max-md:px-6 max-sm:bg-[#0000000d] max-md:w-full max-sm:backdrop-blur-sm">
        <a href="index.html" className="text-xl font-semibold tracking-widest">
          SUNIL
        </a>
        <div
          className={
            "max-sm:fixed max-sm:inset-x-0 max-sm:w-full max-sm:bottom-0 max-sm:shadow-sm max-sm:pt-3 max-sm:rounded-t-3xl max-sm:bg-slate-100 transition-all duration-200 ease-in-out " +
            (toggle ? " max-sm:h-44" : "max-sm:h-0 max-sm:pt-0 ")
          }
        >
          <Slide cascade triggerOnce>
            <ul className="flex gap-10 max-md:gap-6 max-sm:grid max-sm:grid-cols-3 max-sm:gap-8 max-sm:mb-10 max-sm:px-8">
              <li>
                <a
                  href="#home"
                  className="font-medium  max-sm:items-center max-sm:flex max-sm:flex-col max-sm:text-sm"
                >
                  <i className="uil uil-estate hidden max-sm:block"></i>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="font-medium max-sm:flex max-sm:flex-col max-sm:items-center max-sm:text-sm"
                >
                  <i className="uil uil-user hidden max-sm:block"></i>About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="font-medium max-sm:flex max-sm:flex-col max-sm:items-center max-sm:text-sm"
                >
                  <i className="uil uil-file-alt hidden max-sm:block"></i>Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="font-medium max-sm:flex max-sm:flex-col max-sm:items-center max-sm:text-sm"
                >
                  <i className="uil uil-briefcase-alt hidden max-sm:block"></i>
                  Projects
                </a>
              </li>
              {/* <li>
              <a
                href="#portfolio"
                className="font-medium max-sm:flex max-sm:flex-col max-sm:items-center max-sm:text-sm"
              >
                <i className="uil uil-scenery hidden max-sm:block"></i>Portfolio
              </a>
            </li> */}
              <li>
                <a
                  href="#contact"
                  className="font-medium max-sm:flex max-sm:flex-col max-sm:items-center max-sm:text-sm"
                >
                  <i className="uil uil-message hidden max-sm:block"></i>Contact
                </a>
              </li>
            </ul>
          </Slide>
          <i
            className={
              "uli uil-times hidden max-sm:block max-sm:absolute max-sm:right-6 max-sm:bottom-3 cursor-pointer border px-2 rounded-full " +
              (toggle ? " max-sm:block" : "max-sm:hidden")
            }
            onClick={() => setToggle(!toggle)}
          ></i>
        </div>
        <div className="hidden max-sm:block" onClick={() => setToggle(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
