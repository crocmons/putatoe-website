import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
 import {IoMdNotificationsOutline} from "react-icons/io"
const Header = () => {
  return (
    <div>
<header>
      {/* Top Navbar */}

        <div className='text-2xl flex gap-3 space-x-4 justify-between items-center bg-amazonBlue p-1 flex-grow py-2 bg-teal-600 text-white'>
          <div className='mt-2 p-1 gap-1 flex space-x-4 items-center flex-grow sm:flex-grow-0 '>
            <img 
            src='https://www.putatoe.com/img/logo.png'
            width={60}
            height={60}
            className='cursor-pointer'
            alt='logo'
            />
            <h4 className='font-semibold text-2xl'>Putatoe
            <p className='text-sm'>One Solution</p>
            </h4>
          </div>
          {/* search */}
          <div className='flex justify-between'>
          <div className='hidden sm:flex justify-between gap-2 items-center space-x-10 h-10 w-full rounded-md flex-grow cursor-pointer px-2 hover:bg-teal-500'>
            <input className='h-full w-full flex-grow py-4 flex-shrink rounded-l-md focus:outline-none px-4 bg-white-400 text-white' type="text" placeholder='search' value="" autocomplete="off"/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

          </div>
                 
          </div>
          <div className='flex items-center p-4 justify-center gap-3'>

                 <IoMdNotificationsOutline className='flex space-x-2 text-3xl w-10 h-12'/>
                 <AiOutlineShoppingCart className='flex space-x-2 text-3xl w-10 h-12'/>
          </div>

              </div>
        </header>
    </div>
)
}

export default Header

