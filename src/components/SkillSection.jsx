import React from "react";

const languages = [
  "HTML",
  "CSS",
  "SCSS",
  "JAVASCRIPT",
  "REACT",
  "TAILWIND",
  "BOOTSTRAP",
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
        <div className="grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 p-8 mt-4">
          {languages.map((lang) => {
            return (
              <>
                <span className="text-[#FFFFFF] font-medium tracking-widest border px-8 py-4 text-[1rem] text-center [ transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#c778dd33] duration-300 ]">
                  {lang}
                </span>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default SkillSection;
