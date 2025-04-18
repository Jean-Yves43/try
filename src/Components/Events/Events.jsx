import React from 'react'
import SwiperC from '../Swiper/Swiper'






const Events = () => {
  return (
    <div className='mt-14 mb-12 '>
      <div className='container'>
        {/* Header section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos="fade-up"  className='tex-sm text-red-500'>Top Events</p>
          <h1 data-aos="fade-up" className='tex-3xl font-bold'>Events</h1>
          <p data-aos="fade-up" className='text-xs text-gray-400'>
            Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Quisquam, voluptatibus.
             </p>
        </div>
        {/* BODY section */}
        <div>
          <SwiperC />
        </div>
      </div>
    </div>
  )
}

export default Events
