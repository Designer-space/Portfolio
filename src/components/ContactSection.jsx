import React from "react";
import Whatsapp from '../assets/whatsapp.svg'
import Email from '../assets/email.svg'

const ContactSection = () => {
  return (
    <>
      <section className="contact-section container mx-auto px-5 lg:my-[5vw]">
        <div className="flex items-center ">
          <p className="text-[32px] font-medium w-[10ch]">
            <span className="text-[#C778DD] ">#</span>contacts
          </p>
          <span className="w-auto sm:grow md:grow-0 md:w-[50%] h-[2px] bg-[#C778DD]"></span>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-around my-[5vw] lg:my-[3vw] gap-8">
            <p className="max-w-[51ch] mr-auto">I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
            <div className="border w-[100%] lg:w-fit p-4 flex flex-col gap-4">
                <p className="font-medium text-[#FFFFFF]">Message me here</p>
                <a href="tel:+918459549398" target="_blank" className="flex items-center gap-2"><img src={ Whatsapp } alt="Whatsapp_image" className="w-[30px]"/> <span className="hover:text-[#FFFFFF]">8459549398</span></a>
                <a href="mailto:123vinaymaurya@gmail.com"target="_blank" className="flex items-center gap-2"><img src={ Email } alt="Email_image" /> <span className="fluid-fs hover:text-[#FFFFFF]">123vinaymaurya@gmail.com</span></a>
            </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
