import React from 'react'
import OurCrew from '../widgets/OurCrew'
import ourCrew from '../../utils/ourCrew.json'
import Heading from '../elements/Heading'
import Para from '../elements/Para'

const TestimonialSection = () => {
  return (
    <div className='bg-[#FED1B7]'>
      <div className='py-10 md:py-20'>
        <Heading className='w-5/6 lg:w-4/6 mx-auto mb-5 text-center'>
          A living network of curious minds.
        </Heading>
        <Para className='w-5/6 md:w-3/6 mx-auto text-center'>
          Anyone can write on Medium. Thought-leaders, journalists, experts, and individuals with unique perspectives share their thinking here. You'll find pieces by independent writers from around the globe, stories we feature and leading authors, and smart takes on our own suite of blogs and publications.
        </Para>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 mx-5 pb-16'>
        {ourCrew.map((crew, index) => (
          <OurCrew 
            key = {index.toString() + crew.dicebear} 
            key_prop = {index.toString() + crew.dicebear} 
            crew={crew} 
          />
        ))}
      </div>
    </div>
  )
}

export default TestimonialSection