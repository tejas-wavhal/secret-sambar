import AnimatedBreakline from '@/components/client/AnimatedBreakline/AnimatedBreakline'
import TextMaskAnimation from '@/components/client/Animations/TextMaskAnimation'
import React from 'react'
import { AiFillYoutube } from 'react-icons/ai';
import { GoGoal } from "react-icons/go";

export const metadata = {
  title: "Mission and Vision - Secret Sambar",
  description: "Discover the mission and vision of Secret Sambar. Join us on a culinary journey to redefine South Indian dining and celebrate the rich traditions of the region.",
  alternates: {
    canonical: 'https://secretsambar.com/mission-and-vision',
    languages: {
      "en-IN": 'https://secretsambar.com/en-IN/mission-and-vision'
    }
  }
};

const MissionAndVision = () => {
  const missionVisionTitle = [
    "Crafting Excellence:",
    "Mission and Vision",
    "At Secret Sambar",
  ];
  return (
    <section className='min-h-screen bg-mainOrange-200 py-14 lg:py-20' >
      <div className='mx-5 flex flex-col md:flex-row items-center justify-center gap-x-5'>
        <TextMaskAnimation phrases={missionVisionTitle} color='black' />
        <GoGoal className='text-[10rem] text-mainGreen hidden md:block' />
      </div>

      <div className='h-20 overflow-hidden mb-8 md:mb-0'>
        <AnimatedBreakline />
      </div>

      <section className='flex flex-col mx-5 gap-y-8 justify-center items-center lg:flex-row lg:gap-x-8' >
        <p className='text-xl lg:text-2xl text-justify'>At Secret Sambar, our mission is to transport you to the heart of South India through a culinary journey. Each dish on our menu reflects the rich traditions and flavors of the region, offering an authentic South Indian dining experience that goes beyond the ordinary.</p>
        <img className='rounded-3xl h-60 w-80 object-cover object-center lg:w-full lg:max-w-fit lg:h-72' src="/pic14.jpg" alt="" />
      </section>

      <div className='h-20 overflow-hidden mb-8 md:mb-0'>
        <AnimatedBreakline />
      </div>

      <section className='text-xl lg:text-2xl text-justify mx-5 space-y-5'>
        <p>Our vision is to be the epitome of South Indian culinary excellence. We aspire to be known for our unwavering commitment to quality, innovation, and hospitality. At Secret Sambar, we are not just a restaurant; we are a haven where patrons can savor the finest South Indian cuisine while embracing the warmth of our cultural hospitality and culinary artistry.</p>
        <p>Join us on this journey as we strive to make every visit to Secret Sambar a celebration of South Indian heritage, flavors, and the joy of communal dining.</p>
      </section>

      <div className="flex justify-center items-center mt-10 gap-x-8 text-orange-600">
        <a target="_blank" href='' className="hover:scale-125 duration-200 ">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a target="_blank" href='' className="hover:scale-125 duration-200 ml-3 ">
          <AiFillYoutube className='text-5xl relative bottom-0' />
        </a>
        <a target="_blank" href='' className="hover:scale-125 duration-200 ml-3 ">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10" viewBox="0 0 24 24">
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
        </a>
        <a target="_blank" href='' className="hover:scale-125 duration-200 ml-3 ">
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-10 h-10" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
            <circle cx={4} cy={4} r={2} stroke="none" />
          </svg>
        </a>
      </div>

    </section>
  )
}

export default MissionAndVision