import React from 'react'

const Button = ({ onClick, text, className, variant }) => {
  const variants = {
    1: 'bg-black text-white', 
    2: 'border-2 bg-black text-[#36A243] border-[#36A243]', 
    3: 'border-2 bg-[#36A243] text-white border-white', 
    4: 'border-2 bg-white text-[#36A243] border-[#36A243]'
  }
  const variantClass = variants[variant]
  return (
    <button 
      className={`px-8 py-[5.5px] rounded-full ${variantClass} ${className}`}
      onClick={onClick}>
        {text}
    </button>
  )
}

export default Button