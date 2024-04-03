import { useEffect, useRef, useState } from 'react'
import Link from '../elements/Link'
import Button from '../elements/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const sidebarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsDrawerOpen(false);
    }
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const handleClick = () => {}
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <div className='flex justify-between items-center py-0 sm:py-2 md:py-4 px-4 border-y-[2px] border-black'>
      <div className=''>
        <img 
          src={windowWidth >= 768 ? './homepage/logo.png' : './homepage/logoMobile.png'} 
          alt='logo' 
          width={windowWidth >= 768 ? 205 : 50} 
        />
      </div>
      <FontAwesomeIcon 
        icon={faBars} 
        size='2x' 
        className='md:hidden block' 
        onClick={toggleDrawer} 
      />
      {isDrawerOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-25 z-50'>
          {/* <div ref={sidebarRef} className='fixed inset-y-0 right-0 w-64 p-4 bg-white shadow-lg rounded-l-lg'> */}
          <div className='fixed inset-y-0 right-0 w-64 p-4 bg-white shadow-lg rounded-l-lg'>
            <div className='flex justify-end sm:mt-4'>
              <FontAwesomeIcon 
                icon={faX} 
                size='xl' 
                className='md:hidden block' 
                onClick={toggleDrawer} 
              />
            </div>
            <ul className='flex flex-col gap-5'>
              <li>
                <Link href='' title='Our story' className='underline' />
              </li>
              <li>
                <Link href='' title='Membership' />
              </li>
              <li>
                <Link href='' title='Write' />
              </li>
              <li>
                <Link href='' title='Sign in' />
              </li>
            </ul>
          </div>
        </div>
      )}
      <div className='hidden md:flex md:flex-row md:justify-between md:items-center gap-6 mr-1'>
        <Link href='' title='Our story' className='underline' />
        <Link href='' title='Membership' />
        <Link href='' title='Write' />
        <Link href='' title='Sign in' />
        <Button 
          onClick={handleClick} 
          text='Get started' 
          className='text-lg font-light' 
          variant={1}
        />
      </div>
    </div>
  )
}

export default Navbar