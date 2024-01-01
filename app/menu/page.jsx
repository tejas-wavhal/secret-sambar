import AnimatedBreakline from '@/components/client/AnimatedBreakline/AnimatedBreakline'
import TextMaskAnimation from '@/components/client/Animations/TextMaskAnimation'
import React from 'react'

const Menu = () => {

  const menuHeadingPhrases = [
    "Savor the Selection:",
    "Dive into Our Menu",
  ]

  return (
    <section className='min-h-screen bg-mainOrange-200 pt-14 lg:pt-20'>

      <TextMaskAnimation phrases={menuHeadingPhrases} color='black' />

      <div className='h-20 overflow-hidden'>
        <AnimatedBreakline />
      </div>

      <section className='mx-5 md:mx-24 lg:mx-40'>
        <h2 className='text-mainGreen text-4xl md:text-5xl font-caveat font-semibold text-center mb-14'>South Indian Cuisine</h2>

        <div className='flex flex-col lg:flex-row items-center justify-center gap-x-14' >
          <div className='relative'>
            <img
              className='h-[30rem] md:h-[35rem] max-w-[40rem] object-cover object-center rounded-3xl relative z-10'
              src="pic4.avif"
              alt=""
            />
            {/* <div className='h-[35rem] max-w-[27rem] bg-mainGray absolute top-8 left-8 z-0 rounded-3xl' /> */}
          </div>

          <div className='my-5'>
            <h3 className='text-4xl font-semibold my-5'>Lorem, ipsum.</h3>
            <div className=''>

              <div className='flex items-center py-3'>
                <div className='border-r-2 border-black pr-2'>
                  <h5 className='text-2xl font-semibold'>Lorem, ipsum.</h5>
                  <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, fugiat.</p>
                </div>
                <div className='font-semibold ml-2'>
                  ₹ 199
                </div>
              </div>

              <div className='flex items-center py-3'>
                <div className='border-r-2 border-black pr-2'>
                  <h5 className='text-2xl font-semibold'>Lorem, ipsum.</h5>
                  <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, fugiat.</p>
                </div>
                <div className='font-semibold ml-2'>
                  ₹ 199
                </div>
              </div>

              <div className='flex items-center py-3'>
                <div className='border-r-2 border-black pr-2'>
                  <h5 className='text-2xl font-semibold'>Lorem, ipsum.</h5>
                  <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, fugiat.</p>
                </div>
                <div className='font-semibold ml-2'>
                  ₹ 199
                </div>
              </div>

              <div className='flex items-center py-3'>
                <div className='border-r-2 border-black pr-2'>
                  <h5 className='text-2xl font-semibold'>Lorem, ipsum.</h5>
                  <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, fugiat.</p>
                </div>
                <div className='font-semibold ml-2'>
                  ₹ 199
                </div>
              </div>

            </div>
          </div>

        </div>



        <div className='flex flex-col lg:flex-row-reverse items-center justify-center gap-x-14 py-20' >
          <div className='relative'>
            <img
              className='h-[30rem] md:h-[35rem] max-w-[40rem] object-cover object-center rounded-3xl relative z-10'
              src="pic4.avif"
              alt=""
            />
            {/* <div className='h-[35rem] max-w-[27rem] bg-mainGray absolute top-8 left-8 z-0 rounded-3xl' /> */}
          </div>

          <div className='my-5'>
            <h3 className='text-4xl font-semibold my-5'>Lorem, ipsum.</h3>
            <div className=''>

              <div className='flex items-center py-3'>
                <div className='border-r-2 border-black pr-2'>
                  <h5 className='text-2xl font-semibold'>Lorem, ipsum.</h5>
                  <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, fugiat.</p>
                </div>
                <div className='font-semibold ml-2'>
                  ₹ 199
                </div>
              </div>

              <div className='flex items-center py-3'>
                <div className='border-r-2 border-black pr-2'>
                  <h5 className='text-2xl font-semibold'>Lorem, ipsum.</h5>
                  <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, fugiat.</p>
                </div>
                <div className='font-semibold ml-2'>
                  ₹ 199
                </div>
              </div>

              <div className='flex items-center py-3'>
                <div className='border-r-2 border-black pr-2'>
                  <h5 className='text-2xl font-semibold'>Lorem, ipsum.</h5>
                  <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, fugiat.</p>
                </div>
                <div className='font-semibold ml-2'>
                  ₹ 199
                </div>
              </div>

              <div className='flex items-center py-3'>
                <div className='border-r-2 border-black pr-2'>
                  <h5 className='text-2xl font-semibold'>Lorem, ipsum.</h5>
                  <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, fugiat.</p>
                </div>
                <div className='font-semibold ml-2'>
                  ₹ 199
                </div>
              </div>

            </div>
          </div>

        </div>

      </section>

    </section>
  )
}

export default Menu