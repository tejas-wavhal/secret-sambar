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
      title: "Gallery",
      href: "/gallery"
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
  ]

  const toggleMenu = () => {
    setNav((prevOpen) => !prevOpen);
  };

  return (
    <>
      <header className="w-full z-30 text-mainGreen border-b-2 border-gray-300 shadow-lg flex items-center justify-between px-4 lg:px-10 py-0.5 font-montserrat bg-mainOrange-100">
        <Link className="flex items-center tracking-wide font-semibold text-lg " href="/">
          {/* <img className='h-14 lg:h-16 max-w-full' src='./logo.webp' alt="logo" /> */}
          <img className="h-20 md:h-28 max-w-full" src="/logo.png" alt="logo" />
        </Link>
        <BiMenuAltLeft onClick={toggleMenu} className="text-3xl block md:hidden" />
        <nav className="hidden md:block">
          <ul className="flex items-center gap-x-8" >
            {navLinks?.map((link, index) => (
              <li className="font-semibold relative hover:scale-110 duration-200" key={index}>
                <Link className="relative" href={link.href}>{link.title}</Link>
                {
                  pathname == `${link.href}` && (
                    <motion.div
                      layoutId='slide'
                      transition={{ type: 'spring', duration: 0.6 }}
                      className='inset-0 h-0.5 top-6 md:top-7 bg-orange-500 rounded-full -z-10' />
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