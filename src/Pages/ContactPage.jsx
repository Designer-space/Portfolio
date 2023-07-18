import React,{useRef} from "react";
import transition from "../transition";
import emailjs from "@emailjs/browser";

const ContactPage = () => {

  const form = useRef();

  const submitForm = (e) => {
    e.preventDefault();

    emailjs.sendForm(`${import.meta.env.VITE_EMAIL_SERVICE_ID}`, `${import.meta.env.VITE_EMAIL_TEMPLATE_ID}`, form.current, `${import.meta.env.VITE_EMAIL_PUBLIC_KEY}`)
      .then((result) => {
          console.log(result.text);
          console.log("MSG SENT");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <div className="flex overflow-hidden">
        <div className="flex-1 hidden lg:block">
          <img
            src="https://res.cloudinary.com/floatui/image/upload/v1670701901/scott-webb-NQymDb5XqC4-unsplash_ezrolm.jpg"
            className="w-full h-screen object-cover"
          />
        </div>
        <div className="py-12 flex-1 pt-[10rem] lg:flex lg:justify-center lg:h-screen lg:overflow-auto">
          <div className="max-w-lg flex-1 mx-auto px-4 text-[#abb2bf] ">
            <div>
              <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                Get in touch
              </h3>
              <p className="mt-3">
                We’d love to hear from you! Please fill out the form bellow.
              </p>
            </div>
            <form
              ref={form}
              onSubmit={submitForm}
              className="space-y-5 mt-12 lg:pb-12"
            >
              <div>
                <label className="font-medium">Full name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#C778DD] shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#C778DD] shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Phone number</label>
                <input
                    type="number"
                    placeholder="+91 1234567890"
                    required
                    className="w-full px-3 py-2 appearance-none bg-transparent outline-none border focus:border-[#C778DD] shadow-sm rounded-lg"
                  />
              </div>
              <div>
                <label className="font-medium">Message</label>
                <textarea
                  required
                  name="message"
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-[#C778DD] shadow-sm rounded-lg"
                ></textarea>
              </div>
              <button className="w-full px-4 py-2 text-white font-medium border border-[#C778DD] bg-transparent hover:bg-[#c778dd33] active:bg-gray-900 rounded-lg duration-150">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default transition(ContactPage);
