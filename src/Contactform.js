"use client"

import React, { useState } from 'react'

function Contactform() {
    const [userdata, setuserdata] = useState({
        f_name:"",
        l_name:"",
        email:"",
        number:"",
        text:""
})
    const changehandler=(e)=>{
        let name = e.target.name
        let value = e.target.value
        setuserdata({...userdata , [name]: value})
        // userdata(e.target.val)
    }
    const submitdata=()=>{
      console.log(userdata)
    }
    
    return (
        <div className='py-6 px-2 md:px-24'>
            <div className='flex align-middle justify-start w-full flex-col space-y-5'>
                <h1 className='text-4xl font-bold mx-auto'>Next Step Insurance</h1>
                <h1 className='text-2xl font-bold mx-auto'>Contact Form</h1>
                <div className='flex flex-col items-center justify-center space-y-0'>
                    <h1 className='text-lg font-bold mx-auto'>350 Upper Parliment street,</h1>
                    <h1 className='text-lg font-bold mx-auto'>Liverpool L8 7QL</h1>
                </div>
                <div className='flex flex-col items-center justify-center space-y-0'>
                    <h1 className='text-lg font-bold mx-auto'>30151-5282858</h1>
                    <p className='text-lg mx-auto'>Email:info@nextstepinsurance.co.uk</p>
                </div>
                <div className='grid grid-cols-12 gap-4 w-full'>
                    <div className='col-span-12 md:col-span-6 space-y-4'>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-bold'>First Name<span className='mx-2 text-red-600'>*</span></label>
                            <input type="text" onChange={changehandler} name='f_name' className='outline-none border rounded-md border-blue-500  px-3 py-3 w-full outline-1' aria-required />
                        </div>                    </div>
                    <div className='col-span-12 md:col-span-6 space-y-4'>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-bold'>Last Name<span className='mx-2 text-red-600'>*</span></label>
                            <input onChange={changehandler} name='l_name' type="text" className='outline-none border rounded-md border-blue-500  px-3 py-3 w-full outline-1' />
                        </div>
                    </div>
                    <div className='col-span-12 space-y-4'>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-bold'>Email<span className='mx-2 text-red-600'>*</span></label>
                            <input type="text" onChange={changehandler} name='email' className='outline-none border rounded-md border-blue-500  px-3 py-3 w-full outline-1' aria-required/>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-bold'>Phone Number</label>
                            <input type="number" onChange={changehandler} name='number' placeholder='Please Select' className='outline-none border rounded-md border-blue-500  px-3 py-3 w-full outline-1' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-bold'>Your Message<span className='mx-2 text-red-600'>*</span></label>
                            <textarea type="text" onChange={changehandler} name='text'  className='outline-none border rounded-md border-blue-500  px-3 py-3 w-full outline-1' aria-required/>
                        </div>
                    </div>
                </div>
                <button className='px-5 py-3 hover:bg-blue-400 bg-blue-500 w-fit text-xl font-bold border rounded-lg text-white mx-auto' type='submit' onClick={submitdata}>Submit Information</button>
            </div>
        </div>
    )
}

export default Contactform
