import React from 'react'
function Home() {
    return (
        <>
            <div className='grid grid-flow-row md:grid-flow-col lg:grid-flow-col xl:grid-flow-col xl:px-6 lg:px-5 md:px-4 px-3 grid-cols-3 space-x-3 mt-4 space-y-2'>
                <div className='md:col-span-2 lg:col-span-2 xl:col-span-2 col-span-3'>
                    <div className='flex flex-col align-middle justify-center text-center space-y-4'>
                        <h1 className='font-bold text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl'>CAR INSURANCE</h1>
                        <img src="./assets/images/home_1.jpg" alt="" className='w-auto' />
                        <div className='flex justify-center align-middle space-x-4'>
                            <a href="/carinsurance"><button className='text-white bg-black border border-none rounded-md hover:rounded-xl hover:shadow-slate-700 shadow-lg py-2 px-6 w-fit'>MORE</button></a>
                           <a href="/form">
                           <button className='text-white bg-red-600 border border-none rounded-lg hover:rounded-xl hover:shadow-slate-700 shadow-lg py-2 px-6 w-fit'>QUOTE</button>
                           </a>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center flex-col px-3 py-3 md:col-span-1 lg:col-span-1 xl:col-span-1 col-span-3 bg-red-600 text-center'>
                    <h1 className='text-xl sm:text-xl md:text-3xl lg:text-4xl xl:text-4xl text-white font-bold '>MOTOR TRADE</h1>
                    <p className='text-white '>We compare beyond the comparison websites and we also provide beyond the providers!</p>
                </div>
            </div>
            <div>
                <div className='grid grid-cols-1'>
                    <div class='col-span-1 w-fill h-[70vh] items-center relative mt-10 mx-5'>
                        <img class='absolute inset-0  w-full h-full object-cover' src="./assets/images/home_2.jpg" alt="" />
                        <div class='relative z-10 flex align-middle justify-center text-center flex-col p-5 space-y-24 bg-opacity-80'>
                            <h1 className=' text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl text-black font-bold'>HOME INSURANCE</h1>
                            <div className='flex justify-center align-middle space-x-4'>
                               <a href="/homeinsurance"> <button className='text-white bg-black border border-none rounded-md hover:rounded-xl hover:shadow-slate-700 shadow-lg py-2 px-6 w-fit'>MORE</button></a>
                                <a href="/form">
                                <button className='text-white bg-red-600 border border-none rounded-lg hover:rounded-xl hover:shadow-slate-700 shadow-lg py-2 px-6 w-fit'>QUOTE</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid md:grid-cols-12 gap-3 mt-4 px-4 md:px-20'>
                    <div className='relative md:col-span-4 py-4 h-full'>
                        <img src="./assets/images/home_3.jpg" alt="" className='relative inset-0 w-full h-[65vh] md:h-full' />
                        <div className='absolute inset-0 flex flex-col justify-center align-middle'>
                            <div className='ps-4 md:ps-2 lg:ps-4 flex flex-col align-middle justify-start space-y-4'>
                                <h1 className='font-bold text-black text-xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl'>Business <br /> INSURANCE</h1>
                                <div className='flex justify-start align-middle space-x-4 md:space-x-2'>
                                  <a href="/businessinsurance">  <button className='text-white bg-black border border-none rounded-md hover:rounded-xl hover:shadow-slate-700 shadow-lg py-2 px-6 md:px-3 lg:px-6 w-fit'>MORE</button></a>
                                   <a href="/form">
                                   <button className='text-white bg-red-600 border border-none rounded-lg hover:rounded-xl hover:shadow-slate-700 shadow-lg py-2 px-6 md:px-3 lg:px-6 w-fit'>QUOTE</button>
                                   </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:col-span-8 py-4 text-center'>
                        <h1 className='font-bold text-black text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl'>VAN INSURANCE</h1>
                        <img src="./assets/images/home_4.jpg" alt="" className='inset-0 w-full h-auto object-cover' />
                        <div className='flex justify-center mt-3 align-middle space-x-4'>
                            <a href="/vaninsurance"><button className='text-white bg-black border border-none rounded-md hover:rounded-xl hover:shadow-slate-700 shadow-lg py-2 px-6 w-fit'>MORE</button></a>
                            <a href="/form">
                            <button className='text-white bg-red-600 border border-none rounded-lg hover:rounded-xl hover:shadow-slate-700 shadow-lg py-2 px-6 w-fit'>QUOTE</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
