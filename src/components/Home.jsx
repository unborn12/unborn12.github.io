import React from "react";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section id="home">
      <div className="gap-y-20 grid max-sm:gap-y-6">
        <div className="grid grid-cols-[116px,repeat(2,1fr)] items-center gap-y-4 pt-20 max-sm:pt-14 max-sm:grid-cols-[0.5fr,3fr] max-sm:px-4">
          <Social />
          <div className="home_img shadow-lg max-sm:order-none max-sm:mr-7 max-sm:w-[204px] max-xm:w-full max-[288]:h-[200px] max-sm:h-[229px] bounce-in-right"></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
