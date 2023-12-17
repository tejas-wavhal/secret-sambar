"use client";

import React from 'react'
import Link from "next/link";
import { AnimatePresence, motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai'
import { usePathname } from 'next/navigation';

const MobileMenu = ({ toggleMenu, nav, navLinks }) => {


  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <>
      <AnimatePresence>
        {nav && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed z-50 left-0 top-0 w-full h-screen origin-top bg-white text-mainGreen p-5"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between mt-3">
                <h1 className="text-4xl">Menu</h1>
                <AiOutlineClose onClick={toggleMenu} className="text-3xl" />
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center items-center gap-7 "
              >
                {navLinks?.map((link, index) => {
                  return (
                    <div key={index} className="overflow-hidden">
                      <MobileNavLink
                        title={link.title}
                        href={link.href}
                        toggleMenu={toggleMenu}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileMenu


const MobileNavLink = ({ toggleMenu, title, href }) => {
  const pathname = usePathname()

  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };
  return (
    <motion.div
      variants={mobileLinkVars}
      className={`${pathname == `${href}` ? "underline decoration-2 decoration-orange-500 underline-offset-4" : ""} text-3xl text-center`}
    >
      <Link className='' onClick={toggleMenu} href={href}>{title}</Link>
    </motion.div>
  );
};