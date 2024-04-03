import React from 'react'

const Para = ({ children, className }) => {
  return (
    <p className={`text-sm lg:text-lg md:text-md xl:text-xl ${className}`}>
      {children}
    </p>
  )
}

export default Para