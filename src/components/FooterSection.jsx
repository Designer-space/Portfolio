import React from 'react'
import FrontendIo from '../assets/frontendio.svg'
import Git from '../assets/git.svg'
import Logo from '../assets/logo.svg'

import { NavLink } from 'react-router-dom'

const FooterSection = () => {
  return (
    <>
        <div className="footer-section border-t border-[gray]">
            <div className="container flex flex-col items-center sm:flex-row my-2 justify-between p-4">
                <div className="">
                    <div className="flex flex-col gap-4 xs:flex-row xs:items-center xs:gap-8">
                        <div className="logo">
                            <NavLink onClick={() => {setToggle(false)}} className="flex items-center gap-2" to="/">
                                <img src={Logo} alt="" /><span className="text-[#FFFFFF] font-medium">Vinay</span>
                            </NavLink>
                        </div>
                        <a href="mailto:123vinaymaurya@gmail.com" target='_blank'>123vinaymaurya@gmail.com</a>
                    </div>
                    <p className='max-w-[37ch] my-2 text-[#FFFFFF]'>Web designer and front-end developer based in Ukraine</p>
                </div>
                <div className="">
                    <p className='text-[#FFFFFF] font-medium text-[1.5rem]'>Media</p>
                    <div className="flex gap-2 justify-between pt-2">
                        <a href="#"><img src={ FrontendIo } alt="FrontendIo logo" title='Frontend Mentor IO' className='border rounded-full p-[5px] max-w-[28px]' /></a>
                        <a href="#"><img src={ Git } alt="Git logo" title='Git Hub' /></a>
                    </div>
                </div>
            </div>
            <p className="text-center">&copy;Copyright 2023. Made by Vinay</p>
        </div>
    </>
  )
}

export default FooterSection