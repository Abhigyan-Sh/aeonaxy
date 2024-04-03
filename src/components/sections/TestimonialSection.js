import React from 'react'
import OurCrew from '../widgets/OurCrew'
import ourCrew from '../../utils/ourCrew.json'

const TestimonialSection = () => {
  return (
    <div className='bg-[#FED1B7]'>
      <div className='py-10 md:py-20'>
        <p className='w-5/6 lg:w-4/6 text-3xl sm:text-5xl md:text-6xl lg:text-[90px] xl:text-[115px] leading-none mx-auto mb-5 text-center font-crimson'>
          A living network of curious minds.
        </p>
        <p className='w-5/6 md:w-3/6 mx-auto text-sm sm:text-lg md:text-xl text-center'>
          Anyone can write on Medium. Thought-leaders, journalists, experts, and individuals with unique perspectives share their thinking here. You'll find pieces by independent writers from around the globe, stories we feature and leading authors, and smart takes on our own suite of blogs and publications.
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 mx-5 pb-16'>
        {ourCrew.map((crew, index) => (
          <OurCrew 
            key = {index.toString() + crew.dicebear} 
            crew={crew} 
          />
        ))}
      </div>
    </div>
  )
}

export default TestimonialSection