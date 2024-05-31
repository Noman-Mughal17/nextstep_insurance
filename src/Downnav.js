'use client'

import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const Downnav = () => {
  const [btnActive, setBtnActive] = useState('');
  const btndata = [{name:'CAR INSURANCE',path:'/carinsurance'}, {name:'VAN INSURANCE',path:'/vaninsurance'},{name:'MOTOR TRADE',path:'/motortrade'}, {name:'ACCIDENT MANAGEMENT',path:'/accidentmanagmente'},{name:'HOME INSURANCE',path:'/homeinsurance'}, {name:'BUSINESS INSURANCE',path:'/businessinsurance'}];

  const checkActive = (index) => {
  
    setBtnActive(index);
    
  };

  return (
    <div className='bg-[#edeef0] py-3 w-full  hidden lg:block text-black'>
      <div className='block lg:hidden '></div>
      <div className='flex flex-row align-middle justify-center'>
      {btndata.map((val, index) => (
        <a
        key={index}
        href={val.path}
          onClick={()=>checkActive(index)}
          className={`border rounded-sm px-6 py-7 border-none text-lg ${btnActive === index ? 'bg-[#d2050d] text-white' : 'hover:bg-[#d2050d] hover:text-white'}`}
          >
          {val.name}
          </a>
         

      ))}
      </div>
    </div>
  );
};

export default Downnav;
