import React from "react";
import htmlLogo from "../assets/file-html.svg";
import cssLogo from "../assets/file-css.svg";
import jsLogo from "../assets/file-js.svg";
import scssLogo from "../assets/file-scss.svg";
import reactLogo from "../assets/file-react.svg";
import tailwindLogo from "../assets/file-tailwind.svg";
import bootstrapLogo from "../assets/file-bootstrap.svg";

const languages = [
  {
    langs: "html",
    logo: htmlLogo,
    id: 1,
  },
  {
    langs: "css",
    logo: cssLogo,
    id: 2,
  },
  {
    langs: "javascript",
    logo: jsLogo,
    id: 3,
  },
  {
    langs: "scss",
    logo: scssLogo,
    id: 4,
  },
  {
    langs: "react",
    logo: reactLogo,
    id: 5,
  },
  {
    langs: "tailwind",
    logo: tailwindLogo,
    id: 6,
  },
  {
    langs: "bootstrap",
    logo: bootstrapLogo,
    id: 7,
  },
];

const SkillSection = () => {
  return (
    <>
      <section className="skill-section container mx-auto px-5 lg:my-[5vw]">
        <div className="flex items-center">
          <p className="text-[32px] font-medium w-[10ch]">
            <span className="text-[#C778DD] ">#</span>skills
          </p>
          <span className="w-auto sm:grow md:grow-0 md:w-[50%] h-[2px] bg-[#C778DD]"></span>
        </div>
        <div className="w-full flex flex-wrap justify-center gap-8 my-12 ">
          {languages.map(({ langs, logo, id }) => {
            return (
            <div key={id} className="relative w-[256px] h-[58px] flex flex-wrap items-center border border-solid border-[#c778dd] bg-transparent overflow-hidden fs-[1rem] uppercase tracking-wide [ hover:bg-[#c778dd] group duration-300 ]">
              <span className=" translate-x-[22px] text-[#FFFFFF] font-bold [ group-hover:text-transparent ]">
                {langs}
              </span>
              <span className="ease-[cubic-bezier(0.5, 0.07, 0.14, 0.9)] duration-500 absolute translate-x-[205px] h-full w-[50px] bg-[#c778dd] flex items-center justify-center [ group-hover:w-[253px] group-hover:translate-x-0  ] ">
                <img
                  className={`w-[40px] fill-white`}
                  src={logo}
                  alt={langs}
                />
              </span>
            </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default SkillSection;
