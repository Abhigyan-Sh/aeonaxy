import React from 'react'

const Link = ({ href, title, size, className }) => {
  return (
    <p className={`font-medium font-crimson ${className}`}>
      <a href={href} className={size}>{title}</a>
    </p>
  )
}

export default Link