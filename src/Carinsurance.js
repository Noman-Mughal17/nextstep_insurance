import React from 'react'
import Tips from './Tips'
import Info from './Info'

function Caninsurance() {
  return (
    <>
    <div class='w-fill relative'>
      <img class='absolute inset-0 w-full h-full object-cover' src="./assets/images/car-banner_white.jpg" alt="" />
      <div class='relative z-10 flex items-center justify-center text-center max-w-96 flex-col p-5 space-y-4 bg-opacity-80'>
        <h1 class='sm:text-white md:text-white lg:text-white xl:text-white text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold'>CAR INSURANCE</h1>
        <p class='sm:text-white md:text-white lg:text-white xl:text-white text-black text-md sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-bold'>We go beyond comparison websites to provide you with the best options!</p>        
        <a href='./form'>
        <button class='mx-auto px-4 py-2 sm:px-6 sm:py-3 text-white text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl hover:px-5 md:hover:px-7 hover:py-3 border rounded-sm border-none max-w-fit bg-[#2c2c2c]'>GET A QUOTE</button>
        </a>
      </div>
    </div>
    <Info/>
    <Tips/>
    </>
  )
}

export default Caninsurance
