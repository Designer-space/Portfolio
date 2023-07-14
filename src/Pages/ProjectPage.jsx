import React from 'react'
import transition from '../transition'
import project1 from '../assets/sunny-side.jpg'
import project2 from '../assets/Space-Tourism.jpg'
import project3 from '../assets/Portfolio.jpg'
import CardComponent from '../components/CardComponent'
import FooterSection from '../components/FooterSection'


const ProjectPage = () => {

  const WebsiteTemp = [
    {
      flex: "flex-[1_1_40%]",
      id: 1,
      img: project1,
      langs: ["html", "css", "javascript"],
      title: "Sunnyside agency landing page",
      disc: "personal portfolio website template",
    },
    {
      flex: "flex-[1_1_40%]",
      id: 2,
      img: project2,
      langs: ["html", "css", "javascript", "React"],
      title: "Portfolio",
      disc: "personal portfolio website template",
    },
    {
      flex: "flex-[1_1_40%]",
      id: 3,
      img: project3,
      langs: ["html", "css", "javascript", "React"],
      title: "Portfolio",
      disc: "personal portfolio website template",
    },
    {
      flex: "flex-[1_1_40%]",
      id: 4,
      img: project1,
      langs: ["html", "tailwind", "javascript", "React"],
      title: "Portfolio",
      disc: "personal portfolio website template",
    },
  ];

  const SmallProj = [
    {
      flex: "flex-[1_1_30%]",
      langs: ["html", "css", "js"],
      title: "Cards",
      disc: "personal portfolio website template",
    },
    {
      flex: "flex-[1_1_30%]",
      langs: ["html", "css", "js"],
      title: "Cards",
      disc: "personal portfolio website template",
    },
    {
      flex: "flex-[1_1_30%]",
      langs: ["html", "css", "js"],
      title: "Cards",
      disc: "personal portfolio website template",
    },
    {
      flex: "flex-[1_1_30%]",
      langs: ["html", "css", "js"],
      title: "Cards",
      disc: "personal portfolio website template",
    },
    {
      flex: "flex-[1_1_30%]",
      langs: ["html", "css", "js"],
      title: "Cards",
      disc: "personal portfolio website template",
    },
    {
      flex: "flex-[1_1_30%]",
      langs: ["html", "css", "js"],
      title: "Cards",
      disc: "personal portfolio website template",
    },
  ]

  return (
    <>
      <div className="container p-8 overflow-x-hidden py-[6.25rem] md:py-[10rem]">
        <div className="">
          <h2 className='text-[2rem] font-semibold'><span className='text-[#C778DD]'>/</span>projects</h2>
          <p className='p-4'>List of my projects</p>
        </div>
        <div className="">
          <h3 className='text-[2rem] font-semibold py-10'><span className='text-[#C778DD]'>#</span>website-templates</h3>
        </div>
        <div className="flex flex-wrap gap-8 ">
          {WebsiteTemp.map( ({id, flex, img, langs,title, disc}) => {
            return<>
              <CardComponent key={id} flex={ flex } img={img} langs={langs} title={title} disc={disc} />
            </>
          } )}
        </div>
        <div className="">
          <h3 className='text-[2rem] font-semibold py-10'><span className='text-[#C778DD]'>#</span>small-components</h3>
        </div>
        <div className="flex flex-wrap gap-8 ">
          {SmallProj.map( ({langs, flex, title, disc}) => {
            return<>
              <CardComponent flex={ flex } langs={langs} title={title} disc={disc} />
            </>
          } )}
        </div>
      </div>

      <FooterSection />
    </>
  )
}

export default transition(ProjectPage)