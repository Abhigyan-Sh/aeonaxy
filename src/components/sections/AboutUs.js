import React from 'react'
import { aboutUs } from '../../utils/aboutUs.js'

const AboutUs = () => {
  // const paragraphs = aboutUs.split('\n\n').map((paragraph, index) => (
  //   <p key={index}>{paragraph}</p>
  // ));
  return (
    <div className='w-full flex flex-col lg:flex-row items-center justify-between border-b-[2px] border-black'>
      <div className='w-full lg:w-3/6 px-5 md:px-24 py-6 md:py-12 border-b-[2px] md:border-r-[2px] border-black text-sm sm:text-lg'>
        <p className='mb-5'>{aboutUs[0]}</p>
        <p className=''>{aboutUs[1]}</p>
      </div>
      <div className='w-full py-4 lg:py-0 lg:w-3/6 flex flex-row items-center justify-center'>
        <img 
          src='./globe.png' 
          alt='globe' 
          height="550" 
          width="550" />
      </div>
    </div>
  )
}

export default AboutUs