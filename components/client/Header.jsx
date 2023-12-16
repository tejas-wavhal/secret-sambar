"use client";

import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi"
import { motion } from 'framer-motion'
import { usePathname } from "next/navigation"


const Header = () => {
  const [nav, setNav] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    {
      title: "Home",
      href: "/"
    },
    {
      title: "Offer",
      href: "/offer"
    },
    {
      title: "Mission and Vision",
      href: "/mission-and-vision"
    },
    {
      title: "Menu",
      href: "/menu"
    },
    {
      title: "Gallery",
      href: "/gallery"
    }
  ]

  const toggleMenu = () => {
    setNav((prevOpen) => !prevOpen);
  };

  return (
    <>
      <header className="w-full z-30 bg-black text-mainOrange border-b-2 border-gray-300 shadow-lg flex items-center justify-between px-4 lg:px-10 py-1.5">
        <Link className="flex items-center tracking-wide font-semibold text-lg " href="/">
          {/* <img className='h-14 lg:h-16 max-w-full' src='./logo.webp' alt="logo" /> */}Logo
          <h1 className='mx-2 uppercase text-sm lg:text-base font-semibold font-logo space-x-2 text-mainDark'>
            <div className="first-letter:text-xl lg:first-letter:text-2xl inline-block">Varad</div>
            <div className="first-letter:text-xl lg:first-letter:text-2xl inline-block">Green</div>
            <div className="first-letter:text-xl lg:first-letter:text-2xl inline-block">Enviro</div></h1>
        </Link>
        <BiMenuAltLeft onClick={toggleMenu} className="text-3xl block md:hidden" />
        <nav className="hidden md:block">
          <ul className="flex items-center gap-x-8" >
            {navLinks?.map((link, index) => (
              <li className="font-medium relative" key={index}>
                <Link className="relative" href={link.href}>{link.title}</Link>
                {
                  pathname == `${link.href}` && (
                    <motion.div
                      layoutId='slide'
                      transition={{ type: 'spring', duration: 0.6 }}
                      className='inset-0 h-0.5 top-6 md:top-7 bg-black rounded-full -z-10' />
                  )
                }
              </li>
            ))}
          </ul>
        </nav>
        <MobileMenu toggleMenu={toggleMenu} nav={nav} setNav={setNav} navLinks={navLinks} />
      </header>
    </>
  )
}

export default Header