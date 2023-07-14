import React from "react";
import HeroImg from "../assets/profile.png";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero-section p-5 pt-[15vw] lg:pt-[7vw]">
      <div className="container mx-auto min-h-[60vh] flex flex-col lg:flex-row mt-8 lg:mt-0 custom-gap items-center justify-center">
        <div className="max-w-[33rem]">
          <h1 className="text-[32px] font-semibold text-[#FFFFFF]">
            I am <span className="text-[#C778DD]">web designer </span>and <span className="text-[#C778DD]">front-end developer</span>
          </h1>
          <p className="pt-2 pb-5">
            I crafts responsive websites where technologies meet creativity
          </p>
          <NavLink
            to="/Contact"
            className="cursor-pointer btn font-medium text-[#FFFFFF] border border-[#C778DD] hover:bg-[#c778dd33] py-2 px-4"
          >
            Contact me!!
          </NavLink>
        </div>
        <div className="">
          <div className="">
            <img src={HeroImg} alt="" />
          </div>
          <div className="border border-[#FFFFFF] p-2 flex items-center gap-2">
            <div className="w-4 h-4 bg-[#C778DD] ml-2"></div>
            <p className="font-semibold fluid-fs">
              Currently working on{" "}
              <span className="text-[#FFFFFF]">Portfolio</span>
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-[25vw] sm:my-[20vw] md:my-[10vw] lg:my-[7vw]">
        <p className="max-w-[40ch] text-center mx-auto text-[18px] ">
          Code is like humor. When you have to explain it, it's bad
          <span className="text-[10px]"> &nbsp;~ By Unknown Person</span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;