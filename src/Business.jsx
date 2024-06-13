import React from 'react'
import Tips from './Tips.jsx'
import Info from './Info.jsx'

function Business() {
  return (
    <>
    <div class='w-fill relative'>
      <img class='absolute inset-0 w-full h-full object-cover' src="./assets/images/business.jpg" alt="" />
      <div class='relative z-10 flex items-center justify-center text-center w-full sm:max-w-96 flex-col ps-3 lg:ps-16 py-5 space-y-4 bg-opacity-80'>
        <h1 class='lg:text-white xl:text-white text-black text-xl sm:text-2xl xl:text-3xl font-bold'>BUSSINESS INSURANCE</h1>
        <p class='lg:text-white xl:text-white text-black text-md sm:text-lg md:text-xl font-bold'>We go beyond comparison websites to provide you with the best options!</p>      
        <a href='./form'>
        <button className='mx-auto px-4 py-2 sm:px-6 sm:py-3 text-white text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl hover:shadow-gray-300 shadow-lg border rounded-md border-none max-w-fit bg-[#2c2c2c]'>GET A QUOTE</button>
        </a>
      </div>
    </div>
    <Info/>
    <Tips/>
    </>
  )
}

export default Business
