import React from 'react';

const Heading2 = ({ className, children }) => {
  return (
    <div className={`mt-6 md:mt-8 text-2xl sm:text-3xl md:text-5xl font-crimson ${className}`}>
      {children}
    </div>
  )
}

export default Heading2;