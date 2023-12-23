import Link from 'next/link'
import React from 'react'
import { AiFillYoutube } from 'react-icons/ai'

const Footer = () => {
  return (
    <>
      <footer className=" body-font bg-mainOrange-100 text-mainGreen border-t-2 border-mainGreen">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link href={'/'} className="flex title-font font-medium items-center md:justify-start justify-center ">
            <img src={'./Logo.png'} alt="logo" className='h-16 max-w-full' />
            {/* <span className="ml-3 text-lg uppercase font-garamond">It&apos;s Street Coffee</span> */}
          </Link>
          <p className="text-sm  sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 Secret Sambar
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a target="_blank" href='' className="">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a target="_blank" href='' className="ml-3 ">
              <AiFillYoutube className='text-2xl relative bottom-0.5' />
            </a>
            <a target="_blank" href='' className="ml-3 ">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a target="_blank" href='' className="ml-3 ">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </>
  )
}

export default Footer