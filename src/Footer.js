import React from 'react'

function Footer() {
  return (
    <>
    <div className='grid grid-flow-row sm:grid-flow-col mx-auto justify-start lg:justify-evenly xl:justify-evenly text-black'>
        <div className='flex flex-col text-left space-y-1 p-4'>
            <h1 className='text-xl font-bold py-4'>SUPPORT</h1>
            <a className='text-lg' href="">HOME</a>
            <a className='text-lg' href="">ABOUT US</a>
            <a className='text-lg' href="">TERMS AND CONDITIONS</a>
            <a className='text-lg' href="">PRIVICY POLICY</a>
            <a className='text-lg' href="">CONTACT US</a>
        </div>
        <div className='flex flex-col text-left space-y-1 p-4'>
            <h1 className='text-xl font-bold py-4'>QUOTATION FORM</h1>
            <a className='text-lg' href="">Car Insurance</a>
            <a className='text-lg' href="">Van Insurance</a>
            <a className='text-lg' href="">Motor Trade</a>
            <a className='text-lg' href="">Accident Managment</a>
            <a className='text-lg' href="">Home Insurance</a>
            <a className='text-lg' href="">Business Insurance</a>
        </div>
        <div className='flex flex-col text-left space-y-1 p-4'>
            <h1 className='text-xl font-bold py-4'>SERVICES</h1>
            <a className='text-lg' href="">CAR INSURANCE</a>
            <a className='text-lg' href="">VAN INSURANCE</a>
            <a className='text-lg' href="">MOTOR TRADE</a>
            <a className='text-lg' href="">ACCIDENT MANAGMENT</a>
            <a className='text-lg' href="">HOME INSURANCE</a>
            <a className='text-lg' href="">BUSINESS INSURANCE</a>
        </div>
        <div className='flex flex-col text-left space-y-1 p-4'>
            <h1 className='text-xl font-bold py-4'>FOLLOW US</h1>
            <a className='text-lg' href="">Follow Us on Facebook</a>
            <a className='text-lg' href="">Follow Us on Instagram</a>
        </div>
    </div>
    </>
  )
}

export default Footer