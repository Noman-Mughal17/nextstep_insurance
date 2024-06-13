import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Keyboard, Pagination } from 'swiper';
import { Autoplay ,Keyboard ,Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
function Home() {
    return (
        <>
            <div className='grid grid-flow-row md:grid-flow-col lg:grid-flow-col xl:grid-flow-col px-3 md:px-16 grid-cols-3 md:space-x-3 mt-4 space-y-2'>
                <div className='md:col-span-2 lg:col-span-2 xl:col-span-2 col-span-3'>
                    <div className='flex flex-col align-middle justify-center text-center space-y-4 swiper-slide'>
                        <h1 className='font-bold text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl'>CAR INSURANCE</h1>
                        <img src="./assets/images/home_1.jpg" alt="" className='w-full' />
                        <div className='flex justify-center align-middle space-x-4'>
                            <a href="/carinsurance"><button className='text-white bg-black border border-none rounded-md hover:rounded-xl hover:shadow-slate-700 shadow-lg py-2 px-6 w-full'>MORE</button></a>
                           <a href="/form">
                           <button className='text-white bg-red-600 border border-none rounded-lg hover:rounded-xl hover:shadow-slate-700 shadow-lg py-2 px-6 w-fit'>QUOTE</button>
                           </a>
                        </div>
                    </div>
                    </div>
                <div className='flex col-span-3 md:col-span-1 items-center justify-center bg-red-600 text-center hover:cursor-default'>
                <Swiper modules={[Autoplay, Keyboard, Pagination]}>
                        <SwiperSlide className='flex items-center justify-center py-3'>
                        <div className='flex items-center justify-center flex-col px-3'>
                    <h1 className='text-3xl lg:text-4xl xl:text-4xl text-white font-bold  '>MOTOR<br/>TRADE</h1>
                    <p className='text-white '>We compare beyond the comparison websites and we also provide beyond the providers!</p>
                    </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='flex items-center justify-center flex-col px-3 py-3'>
                    <h1 className='text-3xl lg:text-4xl xl:text-4xl text-white font-bold '>VAN<br/>INSURANCE</h1>
                    <p className='text-white '>We compare beyond the comparison websites and we also provide beyond the providers!</p>
                    </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='flex items-center justify-center flex-col px-3 py-3'>
                    <h1 className='text-3xl lg:text-4xl xl:text-4xl text-white font-bold '>CAR<br/> INSURANCE</h1>
                    <p className='text-white '>We compare beyond the comparison websites and we also provide beyond the providers!</p>
                    </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='flex items-center justify-center flex-col px-3 py-3'>
                    <h1 className='text-3xl lg:text-4xl xl:text-4xl text-white font-bold '>HOME<br/>INSURANCE</h1>
                    <p className='text-white '>We compare beyond the comparison websites and we also provide beyond the providers!</p>
                    </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div>
                <div className='px-3 md:px-16'>
                    <div class='flex w-fill h-[60vh] md:h-[75vh] items-center justify-center relative mt-10'>
                        <img class='absolute inset-0  w-full h-full object-cover' src="./assets/images/home_2.jpg" alt="" />
                        <div class='absolute z-10 mx-auto flex align-middle justify-center text-center flex-col my-auto space-y-24 bg-opacity-80'>
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
                        <img src="./assets/images/home_3.jpg" alt="" className='relative inset-0 w-full h-[60vh] md:h-full' />
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
