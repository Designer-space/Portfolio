import React, { useRef } from "react";
import transition from "../transition";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const form = useRef();

  const submitForm = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${import.meta.env.VITE_EMAIL_SERVICE_ID}`,
        `${import.meta.env.VITE_EMAIL_TEMPLATE_ID}`,
        form.current,
        `${import.meta.env.VITE_EMAIL_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("MSG SENT");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="container text-fluid-base">
        <div className="contact-form lg:flex-row flex flex-col-reverse justify-between pt-custom-fluid-p mx-auto">
          <div className="first-container lg:w-2/4 bg-none sm:bg-gradient-radial sm:bg-[length:30px_30px] sm:bg-center  flex items-center justify-center">
            <div className="info-container w-full sm:w-fit text-white p-[3vw] bg-[#282c33]">
              <div>
                
                <p className="sm:max-w-[260px] mb-8">
                  I’m interested in freelance opportunities. However, if you
                  have other request or question, don’t hesitate to contact me
                </p>
              </div>
              <div className="pb-8">
                <h3 className="pb-1">Lets Talk</h3>
                <a className="text-[#C778DD] cursor-pointer " href="tel:8459549398" >+91 8459549398</a>
              </div>
              <div>
                <h3 className="pb-1">Mail me</h3>
                <a className=" text-[#C778DD] cursor-pointer " href="mailto:123vinaymaurya@gmail.com">123vinaymaurya@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="second-container lg:w-2/4 p-7 my-8 lg:my-0 lg:py-6">
            <h2 className="text-center mb-5 text-[24px] lg:text-[32px] text-white font-medium uppercase tracking-wider">
              Send Me A Message
            </h2>
            <form
              ref={form}
              onSubmit={submitForm}
            className="flex flex-col">
              <div className="form-group mb-5">
                <label
                  className="min-h-[55px] border border-b-0 px-5 flex items-center w-full uppercase mt-[-1px]"
                  htmlFor="name-input"
                >
                  Tell us your name*
                </label>
                <input
                  className="text-white min-h-[55px] border px-5 w-full placeholder:text-[#FFFFFF] placeholder:text-fluid-base  bg-transparent focus:outline-2 focus:outline-[#C778DD] "
                  id="name-input"
                  type="text"
                  name="user_name"
                  placeholder="First name"
                  required="required"
                />
              </div>
              <div className="form-group mb-5">
                <label
                  className="min-h-[55px] border border-b-0 px-5 flex items-center w-full uppercase mt-[-1px]"
                  htmlFor="email-input"
                >
                  Enter your email*
                </label>
                <input
                  className="text-white min-h-[55px] border px-5 w-full text-[15px] mt-[-2px] placeholder:text-[#FFFFFF] placeholder:text-fluid-base bg-transparent focus:outline-2 focus:outline-[#C778DD]"
                  id="email-input"
                  type="email"
                  name="user_email"
                  placeholder="Eg. example@email.com"
                  required="required"
                />
              </div>
              <div className="form-group mb-5">
                <label
                  className="min-h-[55px] border border-b-0 px-5 flex items-center w-full uppercase mt-[-1px]"
                  htmlFor="phone-input"
                >
                  Enter phone number*
                </label>
                <input
                  className="text-white min-h-[55px] border px-5 w-full text-[15px] mt-[-2px] placeholder:text-[#FFFFFF] placeholder:text-fluid-base bg-transparent focus:outline-2 focus:outline-[#C778DD]"
                  id="phone-input"
                  type="number"
                  placeholder="Eg. +91 1234567890"
                  required="required"
                />
              </div>
              <div className="form-group mb-5">
                <label
                  className="min-h-[55px] border border-b-0 px-5 flex items-center w-full uppercase mt-[-1px]"
                  htmlFor="message-textarea"
                >
                  Message
                </label>
                <textarea
                  className="text-white border w-full min-h-[80px] resize-none py-2 px-5 mt-[-1px] placeholder:text-[#FFFFFF] placeholder:text-fluid-base  bg-transparent focus:outline-2 focus:outline-[#C778DD]"
                  id="message-textarea"
                  name="message"
                  placeholder="Write me a message"
                ></textarea>
              </div>
              <button className="w-[200px] h-[50px] bg-transparent border border-white uppercase text-lg font-medium relative left-[calc(50%-100px)] hover:bg-[#c778dd33] hover:text-white transition-colors duration-300">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default transition(ContactPage);
