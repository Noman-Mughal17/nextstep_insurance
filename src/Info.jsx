"use client"

import React, { useState } from 'react'

function Info() {
    const [show , setShow]= useState(0)
    return (
    <>
        <div className='grid lg:grid-cols-12 gap-3 py-6 px-4 lg:px-20 space-y-3'>
            <div className='lg:col-span-9 space-y-4 text-left px-3'>
                <h1 className='text-xl font-bold'>Insurance made easy, we do all the work and you just sit back and wait for the best deal</h1>
                <div className='bg-black h-[1px] w-14'></div>
                <p className='opacity-80 text-lg'>Start by filling out our form found on our website, which will help us to use your existing conditions of your living situation. Our professionals will register the personal information; manually navigating it into the wide spectrum of insurance policies and providers. Using our precise and thorough expertise, deep within the field, is the challenging premium we provide. This service in return saves you money and time and ensures the policy is best for you and your lifestyle.</p>
                <p className='opacity-80 text-lg'> Any data you supply will only be used for the purposes of dealing with your enquiry. For mutual security, calls may be recorded and monitored for training purposes.</p>
                <p className='opacity-80 text-lg'> Our service provides the precision and expertise in requiring the right insurance policy for you; we do not act as a broker or agent provider for a specific insurance company but we do initiate all policies suitable for the client. Our service is targeted to save you money through our in-depth and on hands approach, searching deeply through various amounts of insurance providers and websites and usually one that will be suited to your caliber. This process is done manually by our specialists using all accurate details provided by you with an assured trust on your personal information, fully authorized by you. We provide you with a range of websites that can come from direct insurers or comparison websites that is best suited to all the details provided by you. Our company does not sell personal information to third party companies and does not recommend any personal adjustments on circumstances in response to the suitability of a policy or provider.</p>
            </div>
            <div className='lg:col-span-3 bg-[#edeef0]'>
                <div>
                    <h1 className='px-4 text-center text-2xl text-white font-bold py-4 bg-red-600'>GET IN TOUCH</h1>
                    <p className='p-5 text-center text-2xl'>Contact us now on <span className='font-bold'>NEXTSTEP </span>Landline 0151-5282858</p>
                </div>
                <div>
                    <h1 className='px-4 text-center text-2xl text-white font-bold py-4 bg-red-600'>GET IN TOUCH</h1>
                    <p className='p-5 text-center my-auto text-lg'>Head OfficeWrite to us or send us all forms and correspondence to quote</p>
                    <p className='p-5 text-center my-auto text-lg'>350 UpperParliment street Liverpool L8 7QL, United Kingdom</p>
                </div>
            </div>
        </div>
        <div className='flex items-center justify-center flex-col py-4 px-4 lg:px-20 space-y-5 bg-[#fff] text-black'>
              <h1 className='text-3xl font-bold'>How you will benifited?</h1>
                <div className='grid lg:grid-cols-12 gap-4 w-full'>
                    <div className='lg:col-span-6'>
                        <div className='flex items-center justify-between px-4 shadow-inner shadow-red-700 bg-[#d0040c]'>
                        <h1 className='text-xl text-white text-center font-bold py-3'>VAN INSURANCE</h1>
                        <button onClick={(()=>{if(show !=1){setShow(1)}else{setShow(0)}})} className='text-3xl text-white font-bold'>+</button>
                        </div>
                        {show ==1 ?<p className='p-5 text-center my-auto text-lg shadow-lg shadow-slate-500'>We can find the perfect policy for your van, whether it’s a delivery van or your company loading van, getting the right cover to make sure your worklife or businesses are always running smoothly is our priority. Be sure to mention any alterations or modifications you may have made to your vehicle to make sure we can give you the perfect choice.</p> :""}
                        <div className='flex items-center justify-between px-4 shadow-inner shadow-red-700 bg-[#d0040c]'>
                        <h1 className='text-xl text-white text-center font-bold py-3'>TRAVEL INSURANCE</h1>
                        <button onClick={(()=>{if(show!=2){setShow(2)}else{setShow(0)}})} className='text-3xl text-white font-bold'>+</button>
                        </div>
                       {show ==2 ?<p className='p-5 text-center my-auto text-lg shadow-lg shadow-slate-500'>From sky dives to road trips, you don’t know what you’re going to try next. When being adventurous, wild and having a good time in a different country make sure your covered. With amazing cover policies enquire now..</p>:""}
                        <div className='flex items-center justify-between px-4 shadow-inner shadow-red-700 bg-[#d0040c]'>
                        <h1 className='text-xl text-white text-center font-bold py-3'>HOME INSURANCE</h1>
                        <button onClick={(()=>{if(show!=3){setShow(3)}else{setShow(0)}})} className='text-3xl text-white font-bold'>+</button>
                        </div>
                        {show==3?<p className='p-5 text-center my-auto text-lg shadow-lg shadow-slate-500'>If your ready to take that big step into becoming a new homeowner or already a Landlord with many properties. Make sure your properties are covered. Enquire now.</p>:""}
                    </div>
                    <div className='lg:col-span-6'>
                    <div className='flex items-center justify-between px-4 shadow-inner shadow-red-700 bg-[#d0040c]'>
                        <h1 className='text-xl text-white text-center font-bold py-3'>BUSINESS INSURANCE</h1>
                        <button onClick={(()=>{if(show!=4){setShow(4)}else{setShow(0)}})} className='text-3xl text-white font-bold'>+</button>
                        </div>
                        {show==4?<p className='p-5 text-center my-auto text-lg shadow-lg shadow-slate-500'>Different businesses liaise with variety of business policies, whether you’re an independent beauty therapist, or need cover for you taxi cover. Contact us to help you find that perfect policy.</p>:""}
                        <div className='flex items-center justify-between px-4 shadow-inner shadow-red-700 bg-[#d0040c]'>
                        <h1 className='text-xl text-white text-center font-bold py-3'>LIFE INSURANCE</h1>
                        <button onClick={(()=>{if(show!=5){setShow(5)}else{setShow(0)}})} className='text-3xl text-white font-bold'>+</button>
                        </div>
                        {show==5?<p className='p-5 text-center my-auto text-lg shadow-lg shadow-slate-500'>From sky dives to road trips, you don’t know what you’re going to try next. When being adventurous, wild and having a good time in a different country make sure your covered. With amazing cover policies enquire now.</p>:""}
                        <div className='flex items-center justify-between px-4 shadow-inner shadow-red-700 bg-[#d0040c]'>
                        <h1 className='text-xl text-white text-center font-bold py-3'>GADGET INSURANCE</h1>
                        <button onClick={(()=>{if(show!=6){setShow(6)}else{setShow(0)}})} className='text-3xl text-white font-bold'>+</button>
                        </div>
                        {show==6?<p className='p-5 text-center my-auto text-lg shadow-lg shadow-slate-500'>Cover and protect your most valuable items, because it usually is the case that things breakdown when you need them the most. Don’t let your broken laptop be the reason you can’t succeed the most while studying. We can help you get the best quotes.</p>:""}
                    </div>
                </div>
        </div>
    </>
    )
}

export default Info
