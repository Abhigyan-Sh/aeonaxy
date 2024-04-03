import React from 'react'
import Heading from '../elements/Heading'

const HeroSection = () => {
  return (
    <div className='border-b-[2px] border-black flex justify-center items-center mx-auto h-[120px] sm:h-[400px] md:h-[345px]'>
      <Heading className='text-bold inline text-center leading-9 sm:text-start sm:leading-none'>
        Every idea needs a 
        <span className='font-crimson font-black'> Medium.</span>
      </Heading>
    </div>
  )
}

export default HeroSection