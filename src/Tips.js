import React from 'react'

function Tips() {
  return (
    <div className='flex items-center justify-center flex-col py-4 px-4 lg:px-20 space-y-3  text-black bg-[#edeef0]'>
      <h1 className='text-3xl font-bold'>Helpful Tips</h1>
      <div className='flex items-center justify-center flex-col text-left'>
        <div className='grid lg:grid-cols-12 gap-3'>
            <div className='lg:col-span-4 space-y-4'>
                <h1 className='text-xl font-bold'>Be wise when purchasing your car</h1>
                <div className='bg-black h-[1px] w-12'></div>
                <p className='opacity-80 text-lg'>When first making the decision to purchase a car, be aware that different cars do affect the price of insurance, some cars are cheaper to insure than others. Some key points to look out for is the bigger the engine the pricier the quote etc.</p>
            </div>
            <div className='lg:col-span-4 space-y-4'>
                <h1 className='text-xl font-bold'>Increase your voluntary excess</h1>
                <div className='bg-black h-[1px] w-12'></div>
                <p className='opacity-80 text-lg'>But make sure you can still afford to pay the full excess.</p>
            </div>
            <div className='lg:col-span-4 space-y-4'>
                <h1 className='text-xl font-bold'>No claims discount</h1>
                <div className='bg-black h-[1px] w-12'></div>
                <p className='opacity-80 text-lg'>Keep building your NCD to get a better deal on your premium.</p>
            </div>
        </div>
        <div className='grid lg:grid-cols-12 gap-3'>
            <div className='lg:col-span-4 space-y-4'>
                <h1 className='text-xl font-bold'>Telematics</h1>
                <div className='bg-black h-[1px] w-12'></div>
                <p className='opacity-80 text-lg'>Consider a black box policy if you are a young driver this could lower your premium.</p>
            </div>
            <div className='lg:col-span-4 space-y-4'>
                <h1 className='text-xl font-bold'>Avoid modifications</h1>
                <div className='bg-black h-[1px] w-12'></div>
                <p className='opacity-80 text-lg'>Think twice before altering and giving your car a new look</p>
            </div>
            <div className='lg:col-span-4 space-y-4'>
                <h1 className='text-xl font-bold'>NCompare</h1>
                <div className='bg-black h-[1px] w-12'></div>
                <p className='opacity-80 text-lg'>Be sure to go to the right insurer for you, many different insurance providers are beneficial for selective drivers, let our experts help deal and tailor the perfect match for you – fill out our form at nextstepinsurance.co.uk</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Tips
