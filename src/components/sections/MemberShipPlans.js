import React from 'react'
import Button from '../elements/Button'

const MemberShipPlans = () => {
  const handleMembership = () => {}
  return (
    <div className=''>
      <div className='bg-[#36A243]'>
        {/* Section1: Get more with membership. */}
        <div className='flex items-center justify-center py-12 md:py-20 border-b-[2px] border-black'>
          <div className='w-10/12 md:w-6/12 text-center'>
            <p className='text-3xl sm:text-5xl md:text-6xl lg:text-[90px] xl:md:text-[125px] leading-none mb-8 sm:mb-12 font-crimson'>
              Get more with membership.
            </p>
            <p className='mb-8 sm:mb-12 md:mb-20 text-sm sm:text-xl'>
              Become a Medium member to enjoy unlimited access and direct support the writers you read most.
            </p>
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
            <p className='mt-6 md:mt-8 text-2xl sm:text-5xl font-crimson'>Read as much as you want.</p>
            <img 
              src='./readQuality.png' 
              alt='read quality'
              className='my-6 sm:my-8 md:my-12 pr-6 sm:pr-0'
            />
            <p className='text-sm sm:text-xl mb-8 md:mb-16'>
              Enjoy unlimited access to every story across all of you devices.
            </p>
          </div>
          <div className='pl-6 w-full md:w-3/6 h-full'>
            <p className='mt-6 md:mt-8 text-2xl sm:text-5xl font-crimson'>Reward quality content.</p>
            <img 
              src='./rewardQuality.png' 
              alt='reward quality' 
              className='my-6 sm:my-8 md:my-12 pr-6 sm:pr-0'
            />
            <p className='text-sm sm:text-xl mb-8 md:mb-16'>
              Your membership helps us pay writers, and keep your experiences ad-free.
            </p>
          </div>
        </div>
      </div>
      {/* Section3: Take medium with you. */}
      <div className='bg-[#B4E5A3] border-b-2 border-black flex flex-col md:flex-row'>
        <div className='w-full md:w-3/6 pl-6'>
          <p className='text-3xl sm:text-5xl md:text-6xl lg:text-[90px] xl:text-[115px] leading-none mt-8 font-crimson'>Take Medium with you.</p>
          <p className='mt-4 sm:mt-8 md:mt-12 w-4/6 text-sm sm:text-xl'>
            Download our app so you can read wherever you are.
          </p>
          <div className='flex justify-between items-center w-fit gap-4 md:gap-7 mt-8 sm:mt-12 md:mt-16'>
            <img 
              src='./appStore.png' 
              alt='download on the app store' 
              className='w-24 sm:w-36 md:w-48' 
            />
            <img 
              src='./googlePlay.png' 
              alt='get it on google play'
              className='w-24 sm:w-36 md:w-48' 
            />
          </div>
        </div>
        <div className='w-full md:w-3/6 align-center flex justify-center'>
          <img 
            src='./stats.png' 
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