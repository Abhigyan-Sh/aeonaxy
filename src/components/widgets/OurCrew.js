import React from 'react'

const OurCrew = ({ key, crew }) => {
  return (
    <div 
      key={key} 
      className='flex items-center gap-4 border-b-2 border-black py-1 sm:py-2'
    >
        <img
          src={`https://api.dicebear.com/8.x/adventurer/svg?seed=${crew.dicebear}`} 
          alt="Our crew member"  
          // width={70}
          className='w-14 sm:w-[70px]' />
        <p className='text-lg sm:text-2xl md:text-3xl'>{crew.username}</p>
    </div>
  )
}

export default OurCrew