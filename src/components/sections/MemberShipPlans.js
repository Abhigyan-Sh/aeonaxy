import React from 'react'
import Button from '../elements/Button'
import Heading from '../elements/Heading'
import Heading2 from '../elements/Heading2'
import Para from '../elements/Para'

const MemberShipPlans = () => {
  const handleMembership = () => {}
  return (
    <div className=''>
      <div className='bg-[#36A243]'>
        {/* Section1: Get more with membership. */}
        <div className='flex items-center justify-center py-12 md:py-20 border-b-[2px] border-black'>
          <div className='w-10/12 md:w-6/12 text-center'>
            <Heading maxFont='125px' className='mb-8 sm:mb-12'>
              Get more with membership.
            </Heading>
            <Para className='mb-8 sm:mb-12 md:mb-20'>
              Become a Medium member to enjoy unlimited access and direct support the writers you read most.
            </Para>
            <Button 
              onClick={handleMembership}
              text='See membership options'
              className='text-sm md:text-2xl font-light' 
              variant={3} 
            />
          </div>
        </div>
        {/* Section2: Read and Reward Quality. */}
        <div className='w-full border-b-[2px] border-black flex flex-col md:flex-row'>
          <div className='pl-6 w-full md:w-3/6 h-full border-b-[2px] md:border-b-0 md:border-r-[2px] border-black'>
            <Heading2>Read as much as you want.</Heading2>
            <img 
              src='./homepage/readQuality.png' 
              alt='read quality'
              className='my-6 sm:my-8 md:my-12 pr-6 sm:pr-0'
            />
            <Para className='mb-8 md:mb-16'>
              Enjoy unlimited access to every story across all of you devices.
            </Para>
          </div>
          <div className='pl-6 w-full md:w-3/6 h-full'>
            <Heading2>Reward quality content.</Heading2>
            <img 
              src='./homepage/rewardQuality.png' 
              alt='reward quality' 
              className='my-6 sm:my-8 md:my-12 pr-6 sm:pr-0'
            />
            <Para className='mb-8 md:mb-16'>
              Your membership helps us pay writers, and keep your experiences ad-free.
            </Para>
          </div>
        </div>
      </div>
      {/* Section3: Take medium with you. */}
      <div className='bg-[#B4E5A3] border-b-2 border-black flex flex-col md:flex-row'>
        <div className='w-full md:w-3/6 pl-6'>
          <Heading className='mt-8'>
            Take Medium with you.
          </Heading>
          <Para className='mt-4 sm:mt-8 md:mt-12 w-4/6'>
            Download our app so you can read wherever you are.
          </Para>
          <div className='flex justify-between items-center w-fit gap-4 md:gap-7 mt-8 sm:mt-12 md:mt-16'>
            <img 
              src='./homepage/appStore.png' 
              alt='download on the app store' 
              className='w-24 sm:w-36 md:w-48' 
            />
            <img 
              src='./homepage/googlePlay.png' 
              alt='get it on google play'
              className='w-24 sm:w-36 md:w-48' 
            />
          </div>
        </div>
        <div className='w-full md:w-3/6 align-center flex justify-center'>
          <img 
            src='./homepage/stats.png' 
            alt='stats'
            // width='420px' 
            className='mt-8 sm:mt-12 md:mt-20 w-[280px] sm:w-[360px] md:w-[420px]'
          />
        </div>
      </div>
    </div>
  )
}

export default MemberShipPlans