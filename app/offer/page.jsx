import AnimatedBreakline from '@/components/client/AnimatedBreakline/AnimatedBreakline';
import TextMaskAnimation from '@/components/client/Animations/TextMaskAnimation'
import OfferBestSellingMenuCard from '@/components/server/OfferBestSellingMenuCard';
import OfferMenuCard from '@/components/server/OfferDiscountMenuCard';
import React from 'react'
import { BiSolidOffer } from "react-icons/bi";

const Offer = () => {

  const offerHeadingPhrases = [
    "Savor the Savings:",
    "Exclusive Offers and Delectable",
    "Discounts at Secret Sambar",
  ]

  return (
    <section className='min-h-screen bg-mainOrange-200 pt-14 lg:pt-20' >
      <div className='mx-5 flex flex-col md:flex-row items-center justify-center gap-x-5'>
        <TextMaskAnimation phrases={offerHeadingPhrases} color='black' />
        <BiSolidOffer className='text-[10rem] text-mainGreen hidden md:block' />
      </div>

      <div className='h-20 overflow-hidden mb-8 md:mb-0'>
        <AnimatedBreakline />
      </div>

      <div className="bg-[url('https://cdn.wallpapersafari.com/49/70/SrjmWE.jpg')] bg-repeat-round bg-cover bg-center">
        <div className='space-y-8 py-14'>
          <TextMaskAnimation phrases={["Discount Offers"]} color='#FEE9D6' />

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 xl:mx-[10rem]'>
            <OfferMenuCard />
            <OfferMenuCard />
            <OfferMenuCard />
            <OfferMenuCard />
            <OfferMenuCard />
            <OfferMenuCard />
          </div>

          <div className='pt-20 space-y-10'>
            <TextMaskAnimation phrases={["Best Selling Dishes"]} color='#FEE9D6' />

            <div className='space-y-8'>

              <OfferBestSellingMenuCard />
              <OfferBestSellingMenuCard />

            </div>

          </div>

        </div>
      </div>

    </section>
  )
}

export default Offer