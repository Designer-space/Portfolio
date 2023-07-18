import React from 'react'
import CardComponent from './CardComponent';
import { NavLink } from 'react-router-dom';
import project1 from '../assets/sunny-side.jpg'
import project2 from '../assets/Space-Tourism.jpg'
import project3 from '../assets/Portfolio.jpg'
import RightArrow from '../assets/rightArrow.svg'

const ProjectSection = () => {
  const project = [
    {
        flex: "flex-[1_1_25rem]",
        id: 1,
        img: project1,
        langs: ["html", "css", "javascript"],
        title: "Sunnyside agency landing page",
        disc: "personal portfolio website template",
    },
    {
        flex: "flex-[1_1_25rem]",
        id: 2,
        img: project2,
        langs: ["html", "css", "javascript", "React"],
        title: "Portfolio",
        disc: "personal portfolio website template",
    },
    {
        flex: "flex-[1_1_25rem]",
        id: 3,
        img: project3,
        langs: ["html", "css", "javascript", "React"],
        title: "Portfolio",
        disc: "personal portfolio website template",
    },
  ];

  return (
    <>
    <section className="project-section container mx-auto px-5 my-[5rem]">
      <div className=" flex flex-col xs:flex-row xs:items-center xs:justify-between">
        <div className="flex items-center gap-5 sm:w-2/3 text-[32px] font-medium">
            <div className="">
            <span className="text-[#C778DD]">#</span>projects
            </div>
            <div className="line w-2/3 h-[2px] bg-[#C778DD]"></div>
        </div>
        <div className="text-white font-medium self-end xs:self-center">
            <NavLink to="/Project"><span className='flex items-center'>view all <img src={ RightArrow } /></span></NavLink>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 my-12">
        {project.map(({id, img, langs, title, disc, flex}) =>{
            return <>
                <CardComponent key={id} img={img} flex={ flex } langs={langs} title={title} disc={disc} />
            </>
        })}
      </div>
      </section>
    </>
  )
}

export default ProjectSection;