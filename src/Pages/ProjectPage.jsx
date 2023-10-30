import React from "react";
import transition from "../transition";
import project1 from "../assets/sunny-side.jpg";
import project2 from "../assets/Space-Tourism.jpg";
import project3 from "../assets/Portfolio.jpg";
import project4 from "../assets/Oh-Studio.jpg";
import CardComponent from "../components/CardComponent";
import FooterSection from "../components/FooterSection";

const ProjectPage = () => {
	const WebsiteTemp = [
		{
			flex: "flex-[1_1_30rem]",
			id: 1,
			img: project4,
			langs: ["React,", "TailwindCSS,", "Framer-Motion"],
			title: "Clone_OH-STUDIO",
			disc: 'This is a colned Portfolio of freelance designer named "Oli" he designed his portfolio using Framer website builder',
			liveLink: "https://clone-oh-studio.vercel.app/",
			gitLink: "https://github.com/Designer-space/Clone_OH.STUDIO.git",
		},
		{
			flex: "flex-[1_1_30rem]",
			id: 2,
			img: project3,
			langs: ["html,", "css,", "javascript"],
			title: "Portfolio Template",
			disc: "A premium portfolio website template designed to showcase your creative work, experience, and skills. With elegant & modern design, it's perfect for web developers & freelancers.",
			liveLink: "https://designer-space.github.io/portfolio-template/",
			gitLink: "https://github.com/Designer-space/portfolio-template.git",
		},
		{
			flex: "flex-[1_1_30rem]",
			id: 3,
			img: project2,
			langs: ["html,", "css,", "javascript"],
			title: "Space-Tourism-website",
			disc: "Space Tourism website is for those who like to travel or know about space.",
			liveLink: "https://designer-space.github.io/Space-Tourism-website/",
			gitLink: "https://github.com/Designer-space/Space-Tourism-website.git",
		},
		{
			flex: "flex-[1_1_30rem]",
			id: 4,
			img: project1,
			langs: ["html,", "css,", "javascript"],
			title: "Sunnyside agency landing page",
			disc: "Sunnyside agency landing page is simple and single landing page",
			liveLink:
				"https://designer-space.github.io/sunnyside-agency-landing-page-main/",
			gitLink:
				"https://github.com/Designer-space/sunnyside-agency-landing-page-main.git",
		},
	];

	const SmallProj = [
		{
			id: 1,
			flex: "flex-[1_1_30%]",
			langs: ["React,", "TailwindCSS,", "Axios"],
			title: "Advice-Generator",
			disc: "This challenge uses the 3rd-party API called Advice Slip API to generate random quotes of advice.",
			liveLink: "https://advicegenerator-main.vercel.app/",
			gitLink: "https://github.com/Designer-space/Advice-Generator.git",
		},
		{
			id: 2,
			flex: "flex-[1_1_30%]",
			langs: ["html,", "css,", "js"],
			title: "Interactive rating component",
			disc: "Rating Card Component",
			liveLink:
				"https://designer-space.github.io/interactive_rating_component/",
			gitLink:
				"https://github.com/Designer-space/interactive_rating_component.git",
		},
		{
			id: 3,
			flex: "flex-[1_1_30%]",
			langs: ["html,", "css"],
			title: "3-Column preview card component",
			disc: "Card Component",
			liveLink:
				"https://designer-space.github.io/3-column-preview-card-component/",
			gitLink:
				"https://github.com/Designer-space/3-column-preview-card-component.git",
		},
		{
			id: 4,
			flex: "flex-[1_1_30%]",
			langs: ["html,", "css"],
			title: "Product preview card component",
			disc: "Card Component",
			liveLink: "https://designer-space.github.io/responsive-card/",
			gitLink: "https://github.com/Designer-space/responsive-card.git",
		},
		{
			id: 5,
			flex: "flex-[1_1_30%]",
			langs: ["html,", "css"],
			title: "Huddle landing page",
			disc: "Simple Single Landing Page",
			liveLink: "https://designer-space.github.io/huddle-landing-page-1/",
			gitLink: "https://github.com/Designer-space/huddle-landing-page-1.git",
		},
	];

	return (
		<>
			<div className='container p-8 overflow-x-hidden py-[6.25rem] md:py-[10rem]'>
				<div className=''>
					<h2 className='text-[2rem] font-semibold'>
						<span className='text-[#C778DD]'>/</span>projects
					</h2>
					<p className='p-4'>List of my projects</p>
				</div>
				<div className=''>
					<h3 className='text-[2rem] font-semibold py-10'>
						<span className='text-[#C778DD]'>#</span>website-templates
					</h3>
				</div>
				<div className='flex flex-wrap gap-8 '>
					{WebsiteTemp.map(
						({ id, flex, img, langs, title, disc, liveLink, gitLink }) => {
							return (
								<CardComponent
									key={id}
									flex={flex}
									img={img}
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
				<div className=''>
					<h3 className='text-[2rem] font-semibold py-10'>
						<span className='text-[#C778DD]'>#</span>small-components
					</h3>
				</div>
				<div className='flex flex-wrap gap-8 '>
					{SmallProj.map(
						({ langs, flex, title, disc, liveLink, gitLink, id }) => {
							return (
								<CardComponent
									key={id}
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
			</div>

			<FooterSection />
		</>
	);
};

export default transition(ProjectPage);
