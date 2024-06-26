"use client"

import React, { useState } from 'react'


function Form() {
    const [formdata,setformdat]=useState({
        info:"",
        reference:"",
        tittle:"",
        f_name:"",
        l_name:"",
        dob:"",
        house_no:"",
        address:"",
        Post_code:"",
        marital_status:"",
        employment_status:"",
        employment_type:"",
        occupation:"",
        house_owner:"",
        family_info:"",
        email:"",
        p_number:"",
        m_number:"",
    })
const [check_state,setcheck_state]=useState({
    check_box:"",
    agree:""
})
   const check_states=(e)=>{
        let name =e.target.name
        let value =e.target.checked
        setcheck_state({...check_state,[name]:value})
        console.log(check_state)
}
console.log(check_state)
    const changehandler=(e)=>{
        let name =e.target.name
        let value =e.target.value
        setformdat({...formdata,[name]:value})
        console.log(formdata)
    }
    const submitdata=()=>{
       if(check_state.agree==false){
        alert("Please agree terms and conditions")
       }
       else{
        console.log(formdata)
       }
    }
    return (
        <div className='py-4 px-2 md:px-24'>
            <form>
            <div className='flex align-middle justify-start w-full flex-col space-y-5'>
                <h1 className='text-4xl font-bold underline mx-auto'>Quotation Form</h1>
                <div className='flex flex-col'>
                    <label htmlFor="" className='font-bold'>How did you hear about us?</label>
                    <select type="text" onChange={changehandler} name='info' placeholder='Please Select' className='outline-none border rounded-md hover:border-blue-500 hover:shadow-blue-400 shadow-sm px-3 py-3 w-full md:w-1/2 outline-1'>
                                <option>Please Select</option>
                                <option>Walk In</option>
                                <option>Word of Mouth</option>
                                <option>Leafelt</option>
                                <option>Exciting Customer</option>
                                <option>Family or Friend</option>
                                <option>Email/Newsletter</option>
                                <option>TV Advertisement</option>
                            </select>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='font-bold'>If by a friend, family or referrer please state their name</label>
                    <div className='flex space-x-3'>
                        {check_state.check_box===true?(
                        <input type="text" disabled={true} onChange={changehandler} name='reference' className='outline-none border rounded-md  hover:border-blue-500 hover:shadow-blue-400 shadow-sm  px-3 py-3 w-1/2' />):(<input type="text" onChange={changehandler} name='reference' className='outline-none border rounded-md  hover:border-blue-500 hover:shadow-blue-400 shadow-sm px-3 py-3 w-1/2' />)}
                        <div className='flex items-center space-x-2 justify-center'>
                            <input type="checkbox" name='check_box'  onChange={check_states} />
                            <label htmlFor="">or no Recommendation</label>
                        </div>
                    </div>
                </div>
                <h1 className='text-4xl font-bold underline mx-auto'>Personal Information</h1>
                <div className='grid grid-cols-12 gap-4 w-full'>
                    <div className='md:col-span-6 space-y-4 col-span-12'>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-bold'>Title<span className='mx-2 text-red-600'>*</span></label>
                            <select required type="text" onChange={changehandler} name='tittle' placeholder='Please Select' className='outline-none border rounded-md  hover:border-blue-500 hover:shadow-blue-400 shadow-sm  px-3 py-3 w-full outline-1'>
                                <option>Please Select</option>
                                <option>Mr</option>
                                <option>Mrs</option>
                                <option>Ms</option>
                                <option>Miss</option>
                                <option>Dr(Male)</option>
                                <option>Dr(Female)</option>
                            </select>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-bold'>First Name<span className='mx-2 text-red-600'>*</span></label>
                            <input required type="text" onChange={changehandler} name='f_name' className='outline-none border rounded-md  hover:border-blue-500 hover:shadow-blue-400 shadow-sm px-3 py-3 w-full outline-1' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-bold'>Last Name<span className='mx-2 text-red-600'>*</span></label>
                            <input required type="text" onChange={changehandler} name='l_name' className='outline-none border rounded-md  hover:border-blue-500 hover:shadow-blue-400 shadow-sm  px-3 py-3 w-full outline-1' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-bold'>D.O.B<span className='mx-2 text-red-600'>*</span></label>
                            <input required type="date" onChange={changehandler} name='dob' className='outline-none border rounded-md  hover:border-blue-500 hover:shadow-blue-400 shadow-sm px-3 py-3 w-full outline-1' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-bold'>House Number/Name<span className='mx-2 text-red-600'>*</span></label>
                            <input required type="text" onChange={changehandler} name='house_no' className='outline-none border rounded-md  hover:border-blue-500 hover:shadow-blue-400 shadow-sm px-3 py-3 w-full outline-1' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-bold'>First Line of Address<span className='mx-2 text-red-600'>*</span></label>
                            <textarea required type="text" onChange={changehandler} name='address' className='outline-none border rounded-md  hover:border-blue-500 hover:shadow-blue-400 shadow-sm px-3 py-3 w-full outline-1' />
                        </div>
                    </div>
                    <div className='md:col-span-6 col-span-12 space-y-4'>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-bold'>Postcode<span className='mx-2 text-red-600'>*</span></label>
                            <input required type="text" onChange={changehandler} name='Post_code' placeholder='Please Select' className='outline-none border rounded-md  hover:border-blue-500 hover:shadow-blue-400 shadow-sm px-3 py-3 w-full outline-1' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-bold'>Marital Statu<span className='mx-2 text-red-600'>*</span></label>
                        <select required type="text" onChange={changehandler} name='marital_status' placeholder='Please Select' className='outline-none border rounded-md  hover:border-blue-500 hover:shadow-blue-400 shadow-sm px-3 py-3 w-full outline-1'>
                                <option>Please Select</option>
                                <option>Single</option>
                                <option>Married</option>
                                <option>Civil Partner</option>
                                <option>Cohabiting</option>
                                <option>Discovered</option>
                                <option>Separated</option>
                                <option>Widow</option>
                            </select>
                            </div>
                            <div className='flex flex-col'>
                            <label htmlFor="" className='font-bold'>Employment Status<span className='mx-2 text-red-600'>*</span></label>
                            <select required type="text" onChange={changehandler} name='employment_status' placeholder='Please Select' className='outline-none border rounded-md hover:border-blue-500 hover:shadow-blue-400 shadow-sm px-3 py-3 w-full outline-1'>
                                <option>Please Select</option>
                                <option>Employed</option>
                                <option>Self-Employed</option>
                                <option>House Person</option>
                                <option>Education</option>
                                <option>Retired</option>
                                <option>Not Employed Due to disability/illness</option>
                            </select>
                            </div>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-bold'>If Employed/Self Employed, what type of business:</label>
                            <input type="text" onChange={changehandler} name='employment_type' placeholder='Please Select' className='outline-none border rounded-md  hover:border-blue-500 hover:shadow-blue-400 shadow-sm px-3 py-3 w-full outline-1' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-bold'>If Employed/Self Employed, what is your occupation:</label>
                            <input type="text" onChange={changehandler} name='occupation' placeholder='Please Select' className='outline-none border rounded-md  hover:border-blue-500 hover:shadow-blue-400 shadow-sm px-3 py-3 w-full outline-1' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-bold'>Home Owner<span className='mx-2 text-red-600'>*</span></label>
                            <select required type="text" onChange={changehandler} name='house_owner' placeholder='Please Select' className='outline-none border rounded-md  hover:border-blue-500 hover:shadow-blue-400 shadow-sm px-3 py-3 w-full outline-1'>
                                <option>Please Select</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                            </div>
                            <div className='flex flex-col'>
                            <label htmlFor="" className='font-bold'>Any Children Under 16<span className='mx-2 text-red-600'>*</span></label>
                            <select required type="text" onChange={changehandler} name='family_info' placeholder='Please Select' className='outline-none border rounded-md hover:border-blue-500 hover:shadow-blue-400 shadow-sm px-3 py-3 w-full outline-1'>
                                <option>Please Select</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                            </div>
                    </div>
                </div>
                <h1 className='text-4xl font-bold underline mx-auto'>Contact Info</h1>
                <div className='flex flex-col'>
                    <label htmlFor="" className='font-bold' placeholder="Email Address">Email<span className='mx-2 text-red-600'>*</span></label>
                    <input required type="email" onChange={changehandler} name='email' className='outline-none border rounded-md hover:border-blue-500 hover:shadow-blue-400 shadow-sm px-3 py-3 w-1/2' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='font-bold'>Phone</label>
                    <input type="number" onChange={changehandler} name='p_number' className='outline-none border rounded-md  hover:border-blue-500 hover:shadow-blue-400 shadow-sm px-3 py-3 w-1/2' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='font-bold'>Mobile<span className='mx-2 text-red-600'>*</span></label>
                    <input required type="number" onChange={changehandler} name='m_number' className='outline-none border rounded-md  hover:border-blue-500 hover:shadow-blue-400 shadow-sm px-3 py-3 w-1/2' />
                </div>
                <div className='flex items-start space-x-2 space-y-2 justify-center flex-col'>
                <label htmlFor="" className='font-bold'>Please Contact Me Via</label>
                <div className='flex items-center space-x-2 justify-center'>
                    <input type="radio" />
                    <p className='text-xl'>Call</p>
                </div>
                <div className='flex items-center space-x-2 justify-center'>
                    <input type="radio" />
                    <p className='text-xl'> Text</p>
                </div>
                <div className='flex items-center space-x-2 justify-center'>
                    <input type="radio" />
                    <p className='text-xl'> Email</p>
                </div>
                 </div>
                 <div className='flex items-center space-y-4 justify-center flex-col'>
                 <div className='flex items-center space-x-2 justify-center'>
                    <input name='agree' onChange={check_states} type="checkbox" />
                    <p className='text-xl'> I Agree</p>
                 </div>
                 <p className='text-xl px-2 text-center'>By clicking submit, you agree your explicit consent for us to use the data provided in accordance with the Data Protection act 1998, this data will be used to provide the cheapest possible quote while being shared with both offline and online markets.</p>
                 </div> 
                 <button className='transition ease-in-out duration-300 mx-auto px-4 py-2 sm:px-6 sm:py-3 text-black text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl hover:shadow-gray-600 shadow-lg border rounded-md border-none max-w-fit bg-red-600' type='submit' onClick={submitdata}>Submit Information</button>
            </div>
            </form>
        </div>
    )
}

export default Form
