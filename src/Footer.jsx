import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaThreads } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillTikTok } from "react-icons/ai";

function Footer() {
  return (
    <>
    <div className='grid grid-flow-row sm:grid-flow-col mx-auto justify-start md:justify-evenly lg:justify-evenly xl:justify-evenly bg-black text-white '>
        <div className='flex flex-col text-left space-y-1 p-4'>
            <h1 className='text-2xl font-bold py-4 text-red-600'>SUPPORT</h1>
            <a className='hover:text-red-600 hover:underline hover:duration-500' href="/">HOME</a>
            <a className='hover:text-red-600 hover:underline hover:duration-500' href="/carinsurance">ABOUT US</a>
            <a className='hover:text-red-600 hover:underline hover:duration-500' href="">TERMS AND CONDITIONS</a>
            <a className='hover:text-red-600 hover:underline hover:duration-500' href="">PRIVICY POLICY</a>
            <a className='hover:text-red-600 hover:underline hover:duration-500' href="/contactform">CONTACT US</a>
        </div>
        <div className='flex flex-col text-left space-y-1 p-4'>
            <h1 className='text-2xl font-bold py-4 text-red-600'>QUOTATION FORM</h1>
            <a className='hover:text-red-600 hover:underline hover:duration-500' href="/form">CAR INSURANCE</a>
            <a className='hover:text-red-600 hover:underline hover:duration-500' href="/form">VAN INSURANCE</a>
            <a className='hover:text-red-600 hover:underline hover:duration-500' href="/form">MOTOR TRADE</a>
            <a className='hover:text-red-600 hover:underline hover:duration-500' href="/form">ACCIDENT MANAGMENT</a>
            <a className='hover:text-red-600 hover:underline hover:duration-500' href="/form">HOME INSURANCE</a>
            <a className='hover:text-red-600 hover:underline hover:duration-500' href="/form">BUSINESS INSURANCE</a>
        </div>
        <div className='flex flex-col text-left space-y-1 p-4'>
            <h1 className='text-2xl font-bold py-4 text-red-600'>SERVICES</h1>
            <a className='hover:text-red-600 hover:underline hover:duration-500' href="/carinsurance">CAR INSURANCE</a>
            <a className='hover:text-red-600 hover:underline hover:duration-500' href="/vaninsurance">VAN INSURANCE</a>
            <a className='hover:text-red-600 hover:underline hover:duration-500' href="/motortrade">MOTOR TRADE</a>
            <a className='hover:text-red-600 hover:underline hover:duration-500' href="/accidentmanagment">ACCIDENT MANAGMENT</a>
            <a className='hover:text-red-600 hover:underline hover:duration-500' href="/homeinsurance">HOME INSURANCE</a>
            <a className='hover:text-red-600 hover:underline hover:duration-500' href="/businessinsurance">BUSINESS INSURANCE</a>
        </div>
        <div className='flex flex-col text-left space-y-1 p-4'>
            <h1 className='text-2xl font-bold py-4 text-red-600'>FOLLOW US</h1>
            <div className='flex md:flex-col items-center justify-evenly space-y-2 space-x-2 md:space-x-0'>
            <div className='flex items-center justify-evenly space-x-2'>
            <a className='hover:bg-red-600 border-none rounded-sm' href="" ><FaFacebook size={40}/></a>
            <a className='hover:bg-red-600 border-none rounded-sm' href="" ><FaInstagram size={40}/></a>
            </div>
            <div className='flex items-center justify-evenly space-x-2'>
            <a className='hover:bg-red-600 border-none rounded-sm' href="" ><FiTwitter size={40}/></a>
            <a className='hover:bg-red-600 border-none rounded-sm' href="" ><MdOutlineEmail  size={40}/></a>
            </div>
            <div className='flex items-center justify-evenly space-x-2'>
            <a className='hover:bg-red-600 border-none rounded-sm' href="" ><FaThreads  size={40}/></a>
            <a className='hover:bg-red-600 border-none rounded-sm' href="" ><AiFillTikTok size={40}/></a>
            </div>
            </div>
        </div>
    </div>
    <div className='flex flex-col md:flex-row align-middle justify-center bg-slate-950 w-full text-center py-4'>
        <div className='mx-auto text-[#ff3333]'>
            <h1 className='text-xl md:text-2xl'>Copyright © 2024 Next Step Insurance</h1>
        </div>
        <div className='mx-auto text-white hover:text-[#ff3333]'>
            <h1 className='text-xl md:text-2xl '><a href="https://truthmarketings.com/">Powered by Truth Marketings</a></h1>
        </div>
    </div>
    </>
  )
}

export default Footer