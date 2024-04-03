import React from 'react'
import Button from '../elements/Button'
import Link from '../elements/Link'

const LearnMore = () => {
  return (
    <div>
      <div className='h-screen w-full border-b-[2px] border-black flex flex-col md:flex-row'>
        <div className='pl-6 w-full md:w-3/6 h-full border-r-[2px] border-black'>
          <p className='text-[125px] pt-6 leading-none font-crimson'>
            Learn more about us. Or join us.
          </p>
        </div>
        <div className='w-full md:w-3/6 h-full flex flex-col'>
          <div className='h-full py-10 pl-8 flex flex-col justify-between border-b-[2px] border-black'>
            <div className=''>
              <p className='text-5xl font-crimson'>The Medium blog</p>
              <p className='text-xl w-[450px] mt-2'>
                Visit our company blog for the latest news, product updates, and tips and tricks.
              </p>
            </div>
            <Button 
              text='Read our blog' 
              className='text-2xl font-light w-fit' 
              variant={4} 
            />
          </div>
          <div className='h-full py-10 pl-8 flex flex-col justify-between border-black'>
            <div className=''>
              <p className='text-5xl font-crimson'>Work at Medium</p>
              <p className='text-xl w-[450px] mt-2'>
                Our team is home to engineers, journalists, artists, and creatives of all stripes.
              </p>
            </div>
              <Button 
                text='View open positions'
                className='text-2xl font-light w-fit'
                variant={4} 
              />
          </div>
        </div>
      </div>
      <div className='w-full h-full flex flex-col md:flex-row border-b-[2px] border-black'>
        <div className='w-full md:w-3/6 py-3 flex justify-center items-center border-r-[2px] border-black'>
          <img 
            src='./cube.png' 
            alt='cube' 
            width='590px'
          />
        </div>
        <div className='w-full md:w-3/6 h-6/6 pl-6 flex flex-col items-between justify-between'>
          <p className='mt-8 text-[125px] leading-none font-crimson'>Read, write, and expand your world.</p>
          <Button 
            text='Get Started' 
            className='mb-8 text-2xl font-light w-fit' 
            variant={3} 
          />
        </div>
      </div>
      <div>
        <div className='flex justify-center items-center my-16'>
          <img 
            src='./logo2.png' 
            alt='logo2' 
            width='196px'
          />
        </div>
        <div className='flex gap-12 justify-center items-center mb-5'>
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