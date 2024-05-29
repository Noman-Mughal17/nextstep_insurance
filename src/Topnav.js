import React from 'react'

function Topnav() {
  return (
    <div className='flex flex-col py-5 xl:space-y-0 lg:flex-row space-y-4 align justify-center mx-auto w-full h-auto'>
      <div className='md:w-full lg:w-60 xl:w-60 m-auto md:ps-0 lg:ps-6 xl:ps-0'>
      <img className='mx-auto' src="./assets/images/navlogo.png" alt="" />
      </div>
      <div className='flex flex-row justify-center align-middle space-x-8'>
      <div className='flex justify-center align-middle space-x-6'>
        <img src="./assets/images/location.svg" alt="" className='w-7 md:w-9 sm:w-8 lg:w-10 xl:w-10' />
      <div className='flex flex-col align-middle justify-center text-start'> 
        <h5 className='font-bold text-md md:text-lg lg:text-lg'>350 Upperparliment Street</h5>
        <p className='text-md md:text-lg lg:text-lg'>Liverpool L8 7QL</p>
     </div>
      </div>
      <div className='flex justify-center align-middle space-x-6'>
        <img src="./assets/images/clock.svg" alt="" className='w-8 md:w-9 sm:w-9 lg:w-10 xl:w-10'/>
      <div className='flex flex-col align-middle justify-center text-start '> 
        <h5 className='font-bold text-md md:text-lg lg:text-lg'>9:00 AM - 6:00 PM</h5>
        <p className='text-md md:text-lg lg:text-lg'>Monday to Saturday</p>
     </div>
      </div>
      <div className='flex justify-center align-middle space-x-6 md:pr-0 lg:pr-6 xl:pr-12'>
        <img src="./assets/images/dailer.svg" alt="" className='w-8 md:w-9 sm:w-9 lg:w-10 xl:w-10'/>
        <h5 className='font-bold text-md md:text-lg lg:text-lg'>0151-5282858</h5>
      </div>
      </div>
    </div>
  )
}

export default Topnav