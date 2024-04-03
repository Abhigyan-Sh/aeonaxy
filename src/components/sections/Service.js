import React from 'react'
import Button from '../elements/Button'

const ServiceSection = () => {
  return (
    <div className='bg-black text-white w-full h-fit'>
      {/*  */}
      <div className='flex flex-col md:flex-row items-center justify-between border-white border-b-2'>
        <div className='w-full md:w-3/6 h-full px-4 md:px-8 py-16 md:py-0 text-center md:text-start'>
          <p className='text-3xl sm:text-5xl md:text-6xl lg:text-[90px] xl:text-[115px] leading-none font-crimson'>
            Over 100 million readers and growing.
          </p>
        </div>
        <div className='w-full md:w-3/6 h-full px-8 sm:px-12 py-12 sm:py-16 md:py-20 flex flex-col gap-y-6 md:gap-y-12 lg:gap-y-20 border-white border-t-2 md:border-l-2'>
          <div className='flex items-center gap-3'>
            <img 
              src='./productManager.png' 
              alt='profile' 
              className='rounded-full w-24 md:w-44'
            />
            <div className='w-9 h-20 md:w-24 md:h-44 rounded-[100%] bg-[#4479FF]'></div>
            <div className='w-4 h-16 md:w-10 md:h-40 rounded-[100%] bg-[#F45188]'></div>
          </div>
          <div className='w-12/12 sm:w-10/12 text-sm sm:text-xl md:text-2xl font-light flex flex-col gap-6'>
            <p>"Medium is a great place to read and learn from a wide range of authors. It's not muddied up by ads. It feels like one of the few pure places to go online."</p>
            <p>Jackie Colburn</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className='flex justify-center items-center py-12 md:py-16'>
        <div className='w-10/12 flex flex-col items-center justify-center'>
          <p className='text-3xl sm:text-5xl md:text-6xl lg:text-[90px] xl:text-[115px] leading-none inline text-center font-crimson'>
            Create the space for your thinking to take off.
          </p>
          <p className='inline text-sm sm:text-xl md:text-xl text-center w-5/6 pt-8 md:pt-12 pb-12 md:pb-16 font-light'>
            A blank page is also a door. At Medium you can walk through it. It's easy and free to share your thinking on any topic, connect with an audience, express yourself with a range of publishing tools, and even earn money for your work.
          </p>
          <Button 
            onClick={() => {}} 
            text='Write on Medium'
            className='text-sm md:text-2xl font-light' 
            variant={2}
          />
        </div>
      </div>
    </div>
  )
}

export default ServiceSection