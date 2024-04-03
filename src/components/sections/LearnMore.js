import React from 'react'
import Button from '../elements/Button'
import Link from '../elements/Link'
import Heading from '../elements/Heading'
import Heading2 from '../elements/Heading2'
import Para from '../elements/Para'

const LearnMore = () => {
  return (
    <div>
      <div className='md:h-screen w-full border-b-[2px] border-black flex flex-col md:flex-row'>
        <div className='pl-6 w-full md:w-3/6 md:h-full border-b-[2px] md:border-b-0 md:border-r-[2px] border-black'>
          <Heading maxFont='125px' className='py-4 sm:py-6 md:pt-6'>
            Learn more about us. Or join us.
          </Heading>
        </div>
        <div className='w-full md:w-3/6 h-full flex flex-col'>
          <div className='h-fit sm:h-full gap-6 sm:gap-0 py-6 md:py-10 pl-8 flex flex-col justify-between border-b-[2px] border-black'>
            <div className=''>
              <Heading2>The Medium blog</Heading2>
              <Para className='w-4/6 mt-2 mb-4 sm:mb-8 md:mb-16'>
                Visit our company blog for the latest news, product updates, and tips and tricks.
              </Para>
            </div>
            <Button 
              text='Read our blog' 
              className='text-sm md:text-2xl font-light w-fit' 
              variant={4} 
            />
          </div>
          <div className='h-fit sm:h-full gap-6 sm:gap-0 py-6 md:py-10 pl-8 flex flex-col justify-between'>
            <div className=''>
              <Heading2>Work at Medium</Heading2>
              <Para className='w-4/6 mt-2 mb-4 sm:mb-8 md:mb-16'>
                Our team is home to engineers, journalists, artists, and creatives of all stripes.
              </Para>
            </div>
            <Button 
              text='View open positions'
              className='text-sm md:text-2xl font-light w-fit'
              variant={4} 
            />
          </div>
        </div>
      </div>
      <div className='w-full h-full flex flex-col md:flex-row border-b-[2px] border-black'>
        <div className='w-full md:w-3/6 px-6 sm:px-0 py-6 md:py-3 flex justify-center items-center border-b-[2px] md:border-b-0 md:border-r-[2px] border-black'>
          <img 
            src='./homepage/cube.png' 
            alt='cube' 
            // width='590px'
            className='w-80 md:w-[590px]'
          />
        </div>
        <div className='w-full md:w-3/6 h-6/6 pl-6 flex flex-col items-between justify-between gap-8 sm:gap-12 md:gap-0'>
          <Heading maxFont='125px' className='mt-8'>
            Read, write, and expand your world.
          </Heading>
          <Button 
            text='Get Started' 
            className='mb-8 text-sm md:text-2xl font-light w-fit' 
            variant={3} 
          />
        </div>
      </div>
      <div>
        <div className='flex justify-center items-center my-8 sm:my-12 md:my-16'>
          <img 
            src='./homepage/logo2.png' 
            alt='logo2' 
            // width='196px'
            className='w-[120px] sm:w-[150px] md:w-[196px]'
          />
        </div>
        <div className='flex gap-6 sm:gap-12 justify-center items-center mb-5'>
          <Link 
            href='' 
            title='Terms'
            size='text-xs' 
            className='font-light underline' 
          />
          <Link 
            href='' 
            title='Privacy' 
            size='text-xs' 
            className='font-light underline' 
          />
          <Link 
            href='' 
            title='Help' 
            size='text-xs' 
            className='font-light underline' 
          />
        </div>
      </div>
    </div>
  )
}

export default LearnMore