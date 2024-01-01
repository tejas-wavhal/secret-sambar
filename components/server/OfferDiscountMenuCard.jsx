import React from 'react'

const OfferMenuCard = () => {
    return (
        <div className='h-96 bg-mainOrange-100 w-80 border-2 border-mainOrange-200 rounded-3xl mx-auto overflow-hidden shadow-lg shadow-black transition-transform ease-linear hover:scale-105'>
            <img className='h-64 max-w-full object-cover object-center rounded-t-3xl' src="/pic6.webp" alt="" />
            <div className='bg-orange-500 h-10 w-20 flex items-center justify-center text-lg rounded-full text-white p-2 mx-auto font-bold relative bottom-5'>
                ₹ 199
            </div>
            <div className='text-center -mt-4'>
                <h3 className='text-2xl font-bold'>Lorem, ipsum dolor.</h3>
                <p className='text-ellipsis'>em, ipsum dolo em, ipsum dolor</p>
            </div>
        </div>
    )
}

export default OfferMenuCard