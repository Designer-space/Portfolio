import React from 'react'
import AboutImg from '../assets/profile_2.png'
import { NavLink } from 'react-router-dom'


const AboutSection = () => {
  return (
    <section className="about-section container mx-auto px-5 lg:my-[5vw]">
      <div className="flex items-center">
        <p className="text-[32px] font-medium w-[10ch]">
          <span className="text-[#C778DD] ">#</span>about-me
        </p>
        <span className="w-auto sm:grow md:grow-0 md:w-[50%] h-[2px] bg-[#C778DD]"></span>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center custom-gap">
        <div className="">
          {/* section-header */}
          {/* section-content */}
          <p className="my-10 max-w-[55ch]">
            Hello, i’m Vinay! <br />
            <br />
            I’m a self-taught front-end developer looking for a new role in an
            exciting company. I focus on writing accessible HTML, using modern
            CSS practices and writing clean JavaScript. When writing JavaScript
            code, I mostly use React, but I can adapt to whatever tools are
            required. <br /><br /> I'm based in Mumbai, India. but I'm happy working remotely
            and have experience in remote teams. When I'm not coding, you'll
            find me outdoors. I love being out in nature whether that's going
            for a walk, run or cycling. I'd love you to check out my work.
          </p>
          <NavLink
            to="/AboutMe"
            className="cursor-pointer btn font-medium text-[#FFFFFF] border border-[#C778DD] hover:bg-[#c778dd33] py-2 px-4"
          >
            Read more -&gt;
          </NavLink>
        </div>
        <div className="">
          <img src={AboutImg} alt="Profile Picture" className='max-w-[35vw] ' />
        </div>
      </div>
    </section>
  )
}

export default AboutSection