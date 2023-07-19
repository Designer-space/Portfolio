import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import Hamburger from "../assets/hamburger.svg";
import Close from "../assets/close.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="Primary-navigation fixed custom-bg w-full z-10 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-5">
        <div className="logo">
          <NavLink onClick={() => {setToggle(false)}} className="flex items-center gap-2" to="/">
            <img src={Logo} alt="" /><span className="font-medium">Vinay</span>
          </NavLink>
        </div>
        <nav
          className={`flex duration-300 fixed ${!toggle ? 'top-0 right-[-100vw] bottom-0' : 'top-0 right-0 bottom-0'} w-full items-center flex-col justify-center md:static md:flex-row md:w-max text-[2rem] md:text-base`}
        >
          <div className="nav-item p-4">
            <NavLink onClick={() => {setToggle(false)}}
              className={({ isActive }) =>
                isActive ? "text-white" : "text-[#ABB2BF]"
              }
              to="/"
            >
              <span className="text-[#C778DD] pr-[2px]">#</span>home
            </NavLink>
          </div>
          <div className="nav-item p-4">
            <NavLink onClick={() => {setToggle(false)}}
              className={({ isActive }) =>
                isActive ? "text-white" : "text-[#ABB2BF]"
              }
              to="/Project"
            >
              <span className="text-[#C778DD] pr-[2px]">#</span>project
            </NavLink>
          </div>
          <div className="nav-item p-4">
            <NavLink onClick={() => {setToggle(false)}}
              className={({ isActive }) =>
                isActive ? "text-white" : "text-[#ABB2BF]"
              }
              to="/AboutMe"
            >
              <span className="text-[#C778DD] pr-[2px]">#</span>aboutme
            </NavLink>
          </div>
          <div className="nav-item p-4">
            <NavLink onClick={() => {setToggle(false)}}
              className={({ isActive }) =>
                isActive ? "text-white" : "text-[#ABB2BF]"
              }
              to="/Contact"
            >
              <span className="text-[#C778DD] pr-[2px]">#</span>contact
            </NavLink>
          </div>
          <button
            onClick={() => {
              setToggle(false);
            }}
            className="close absolute block md:hidden top-6 right-4"
          >
            <img src={Close} alt="" />
          </button>
        </nav>
        <button
          onClick={() => {
            setToggle(true);
          }}
          className="open block md:hidden"
        >
          <img src={Hamburger} alt="" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
