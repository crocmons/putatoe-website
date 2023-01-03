import React from 'react'
import { AiFillFacebook, AiFillLinkedin } from 'react-icons/ai'
import { IoMdHome, IoMdPeople, IoMdChatbubbles, IoLogoInstagram } from 'react-icons/io'
import {SlUserFollow} from "react-icons/sl"

const Footer = () => {
  return (
    <div className='relative cursor-pointer'>
        <div className='md:hidden flex sticky items-center gap-10 text-teal-700 mt-5 text-3xl p-2'>
            <IoMdHome />
            <IoMdPeople />
            <img 
            src='https://www.putatoe.com/img/logo.png'
            width={40}
            height={40}
            className='cursor-pointer bg-teal-600 p-1 rounded-md'
            alt='logo'
            />
            <SlUserFollow />
            <IoMdChatbubbles />
        </div>
        <div className='hidden md:block'>
        <div className='text-2xl flex flex-col justify-start gap-3 space-x-4 items-center px-3 flex-grow py-2 bg-teal-600 text-white rounded-lg'>
        <img 
            src='https://www.putatoe.com/img/logo.png'
            width={40}
            height={40}
            className='cursor-pointer p-1 rounded-md'
            alt='logo'
            />
            <h1>PUTATOE SOLUTIONS PVT. LTD.</h1>
            <p>233 Harahawa Phatak, Near SBI Bank, Gorakhpur, Uttar Pradesh - 273001</p>
            <div className='flex gap-4 text-3xl'>
            <AiFillFacebook />
            <IoLogoInstagram />
            <AiFillLinkedin />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer