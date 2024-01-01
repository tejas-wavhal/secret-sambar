import React from 'react'

const OfferBestSellingMenuCard = () => {
    return (
        <div className='min-h-96 md:h-fit md:w-[45rem] bg-mainOrange-100 w-80 border-2 border-mainOrange-200 rounded-3xl mx-auto overflow -hidden shadow-lg shadow-black transition-transform ease-linear hover:scale-105 flex flex-col md:flex-row'>
            <img className='h-64 max-w-full md:w-80 object-cover object-center rounded-t-3xl md:rounded-t-none md:rounded-l-3xl' src="/pic13.jpg" alt="" />
            <div>
                <div className='bg-orange-500 h-10 w-20 flex items-center justify-center text-lg rounded-full text-white p-2 mx-auto font-bold relative bottom-5 md:hidden'>
                    ₹ 199
                </div>
                <div className='text-center md:text-justify md:m-10 -mt-4 flex flex-col justify-center mb-3 md:mb-0'>
                    <h3 className='text-2xl md:text-3xl font-bold'>Lorem, ipsum dolor.</h3>
                    <span className='text-orange-500 text-lg font-bold hidden md:block'>₹ 199</span>
                    <p className='text-ellipsis'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt aperiam ad autem? Enim nihil expedita odit tenetur error voluptatem lab</p>
                </div>
            </div>
        </div>
    )
}

export default OfferBestSellingMenuCard