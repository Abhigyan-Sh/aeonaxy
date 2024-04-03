import React from 'react'

const HeroSection = () => {
  return (
    <div className='border-b-[2px] border-black flex justify-center items-center mx-auto h-[120px] sm:h-[400px] md:h-[345px]'>
      <p className='text-3xl sm:text-5xl md:text-6xl lg:text-[90px] xl:text-[115px] text-bold inline font-crimson'>
        Every idea needs a 
        <span className='font-crimson font-black'> Medium.</span>
      </p>
    </div>
  )
}

export default HeroSection