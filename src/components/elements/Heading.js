import React from 'react';

const Heading = ({ maxFont, className, children }) => {
  maxFont = `xl:text-${maxFont ? `[${maxFont}]`: '[115px]'}` 
  return (
    <div className={`text-3xl sm:text-5xl md:text-6xl lg:text-[90px] leading-none font-crimson pr-2
      ${maxFont} ${className}`}>
      {children}
    </div>
  );
};

export default Heading;