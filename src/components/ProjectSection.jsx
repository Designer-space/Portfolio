import React from "react";
import CardComponent from "./CardComponent";
import { NavLink } from "react-router-dom";
import project1 from "../assets/sunny-side.jpg";
import project2 from "../assets/Space-Tourism.jpg";
import project3 from "../assets/Portfolio.jpg";
import project4 from "../assets/Oh-Studio.jpg";
import RightArrow from "../assets/rightArrow.svg";

const ProjectSection = () => {
	const project = [
		{
			flex: "flex-[1_1_30rem]",
			id: 3,
			img: project4,
			langs: ["React,", "TailwindCSS,", "Framer-Motion"],
			title: "Clone_OH-STUDIO",
			disc: 'This is a colned Portfolio of freelance designer named "Oli" he designed his portfolio using Framer website builder',
			liveLink: "https://clone-oh-studio.vercel.app/",
			gitLink: "https://github.com/Designer-space/Clone_OH.STUDIO.git",
		},
		{
			flex: "flex-[1_1_30rem]",
			id: 1,
			img: project3,
			langs: ["html,", "css,", "javascript"],
			title: "Portfolio Template",
			disc: "A premium portfolio website template designed to showcase your creative work, experience, and skills. With elegant & modern design, it's perfect for web developers & freelancers.",
			liveLink: "https://designer-space.github.io/portfolio-template/",
			gitLink: "https://github.com/Designer-space/portfolio-template.git",
		},
		{
			flex: "flex-[1_1_30rem]",
			id: 2,
			img: project2,
			langs: ["html,", "css,", "javascript"],
			title: "Space-Tourism-website",
			disc: "Space Tourism website is for those who like to travel or know about space.",
			liveLink: "https://designer-space.github.io/Space-Tourism-website/",
			gitLink: "https://github.com/Designer-space/Space-Tourism-website.git",
		},
	];

	return (
		<>
			<section className='project-section container mx-auto px-5 my-[5rem]'>
				<div className=' flex flex-col xs:flex-row xs:items-center xs:justify-between'>
					<div className='flex items-center gap-5 sm:w-2/3 text-[32px] font-medium'>
						<div className=''>
							<span className='text-[#C778DD]'>#</span>projects
						</div>
						<div className='line w-2/3 h-[2px] bg-[#C778DD]'></div>
					</div>
					<div className='text-white font-medium self-end xs:self-center'>
						<NavLink to='/Project'>
							<span className='flex items-center'>
								view all{" "}
								<img
									src={RightArrow}
									alt='arrow pointing towards right'
								/>
							</span>
						</NavLink>
					</div>
				</div>

				<div className='flex flex-wrap justify-center gap-8 my-12 [&>div]:max-w-[728px] '>
					{project.map(
						({ id, img, langs, title, disc, flex, liveLink, gitLink }) => {
							return (
								<CardComponent
									key={id}
									img={img}
									flex={flex}
									langs={langs}
									title={title}
									disc={disc}
									live={liveLink}
									git={gitLink}
								/>
							);
						}
					)}
				</div>
			</section>
		</>
	);
};

export default ProjectSection;
