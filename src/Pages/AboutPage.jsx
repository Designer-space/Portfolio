import React from "react";
import transition from "../transition";
import FooterSection from "../components/FooterSection";

const AboutPage = () => {
  return (
    <>
      <div id="about" className="about container pt-28 mb-8">
        <div className="">
          <h2 className="text-[2rem] font-semibold">
            <span className="text-[#C778DD]">/</span>about-me
          </h2>
          <p className="p-4">Who am i?</p>
        </div>
        <div className="mt-8">
          <div className="code-wrp">
            <div data-line-nr="01" className="code-l">
              <div className="methods">class</div>{" "}
              <span className="propname">Vinay Maurya</span> {"{"}
            </div>
            <div data-line-nr="02" className="code-l">
              <div className="dot">··</div>
              <div className="comment">
                // I'm a junior front-end developer looking for a new role in an
                exciting company.
              </div>
            </div>
            <div data-line-nr="03" className="code-l">
              <div className="dot">··</div>
              <div className="comment">
                // I focus on writing accessible HTML, using modern CSS
                practices and writing clean JavaScript.
              </div>
            </div>
            <div data-line-nr="04" className="code-l">
              <div className="dot">··</div>
              <div className="comment">
                // When writing JavaScript code, Nowadays, I mostly tend use
                React, but I can adapt to whatever tools are required.
              </div>
            </div>
            <div data-line-nr="05" className="code-l">
              <div className="dot">··</div>
              <div className="comment">
                // I'm based in Mumbai, India, but I'm happy working remotely
                and have experience in remote teams.
              </div>
            </div>
            <div data-line-nr="06" className="code-l">
              <div className="dot">··</div>
              <div className="comment">
                // My variety of skills is continuously expanding.
              </div>
            </div>
            <div data-line-nr="07" className="code-l">
              <div className="dot">··</div>
              <div className="methods">constructor</div>() {"{"}
            </div>
            <div data-line-nr="08" className="code-l">
              <div className="dot">····</div>
              <span className="scope">this</span>.
              <span className="prop2">name</span>{" "}
              <span className="scope">=</span>{" "}
              <span className="string">'Vinay Maurya'</span>;
            </div>
            <div data-line-nr="09" className="code-l">
              <div className="dot">····</div>
              <span className="scope">this</span>.
              <span className="prop2">dayOfBirth</span>{" "}
              <span className="scope">=</span>{" "}
              <span className="number">10-06-2000</span>;
            </div>
            <div data-line-nr="10" className="code-l">
              <div className="dot">····</div>
              <span className="scope">this</span>.
              <span className="prop2">email</span>{" "}
              <span className="scope">=</span>{" "}
              <span className="string">
                '
                <a href="mailto:123vinaymaurya@gmail.com">
                  123vinaymaurya@gmail.com
                </a>
                '
              </span>
              ;
            </div>
            <div data-line-nr="11" className="code-l">
              <div className="dot">··</div>
              {"}"}
            </div>
            <div data-line-nr="12" className="code-l">
              <div className="dot">··</div>
              <span className="propname">workExperience</span>() {"{"}
            </div>
            <div data-line-nr="13" className="code-l">
              <div className="dot">····</div>
              <div className="methods">return</div> [
            </div>
            <div data-line-nr="14" className="code-l">
              <div className="dot">······</div>
              {"{"} <span className="string">'2022 - now'</span> :
              <span className="string">
                {" "}
                'Full-stack Developer at Pentacle design'
              </span>{" "}
              {"},"}
            </div>
            <div data-line-nr="15" className="code-l">
              <div className="dot">······</div>
              {"{"} <span className="string">'09/2019 - 11/2019'</span> :
              <span className="string">
                {" "}
                '"internship" - Junior Frontend at NS Media Solution'
              </span>{" "}
              {"},"}
            </div>
            <div data-line-nr="16" className="code-l">
              <div className="dot">····</div>]
            </div>
            <div data-line-nr="17" className="code-l">
              <div className="dot">··</div>
              {"}"}
            </div>
            <div data-line-nr="18" className="code-l">
              <div className="dot">··</div>
              <span className="propname">education</span>() {"{"}
            </div>
            <div data-line-nr="19" className="code-l">
              <div className="dot">····</div>
              <div className="methods">return</div> [
            </div>
            <div data-line-nr="20" className="code-l">
              <div className="dot">······</div>
              {"{"} <span className="string">'11/2017 - 11/2020'</span>:
              <span className="string">
                {" "}
                'Viva college of diploma in engineering and technology -
                Diploma, Computer Engineering (IT)'
              </span>{" "}
              {"}"},
            </div>
            <div data-line-nr="21" className="code-l">
              <div className="dot">······</div>
              {"{"} <span className="string">'04/2016-03/2017'</span>:
              <span className="string">
                {" "}
                'Kanchan high school and Jr college - HSC, Commerce'
              </span>{" "}
              {"},"}
            </div>
            <div data-line-nr="22" className="code-l">
              <div className="dot">······</div>
              {"{"} <span className="string">'2008-2012'</span>:
              <span className="string">
                {" "}
                'Wyższa Szkoła Technologii Informatycznych w Katowicach -
                Bachelor of Engineering (inż.), Computer Science (IT)'
              </span>{" "}
              {"},"}
            </div>
            <div data-line-nr="23" className="code-l">
              <div className="dot">····</div>]
            </div>
            <div data-line-nr="24" className="code-l">
              <div className="dot">··</div>
              {"}"}
            </div>
            <div data-line-nr="25" className="code-l">
              <div className="dot">··</div>
              <span className="propname">skills</span>() {"{"}
            </div>
            <div data-line-nr="26" className="code-l">
              <div className="dot">····</div>
              <div className="methods">return</div> [{" "}
              <span className="string">
                'HTML', 'CSS', 'SCSS', 'JAVASCRIPT', 'REACT.JS', 'TAILWIND',
                'BOOTSTRAP', 'GIT', 'FIGMA', 'VS CODE'
              </span>{" "}
              <span className="point-cursor"></span> ]
            </div>
            <div data-line-nr="27" className="code-l">
              <div className="dot">··</div>
              {"}"}
            </div>
            <div data-line-nr="28" className="code-l">
              {"}"}
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default transition(AboutPage);
