import React from "react";
import transition from "../transition";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectSection from "../components/ProjectSection";
import SkillSection from "../components/SkillSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ProjectSection />
      <AboutSection />
      <SkillSection />
      <ContactSection />
      <FooterSection />
    </>
  );
};

export default transition(HomePage);