'use client'

import React, { useState } from 'react';



const Downnav = () => {
  const [btnActive, setBtnActive] = useState('');
  const btndata = [{name:'CAR INSURANCE',path:'/carinsurance'}, {name:'VAN INSURANCE',path:'/vaninsurance'},{name:'MOTOR TRADE',path:'/motortrade'}, {name:'ACCIDENT MANAGEMENT',path:'/accidentmanagment'},{name:'HOME INSURANCE',path:'/homeinsurance'}, {name:'BUSINESS INSURANCE',path:'/businessinsurance'}];

  const checkActive = (index) => {

    setBtnActive(index);
    
  };
  const [navbtn,setnavbtn]=useState(false)

  return (
    <div className='bg-[#edeef0] py-3 w-full text-black'>
      {
        <div onClick={()=>{setnavbtn(!navbtn)}} className='mx-auto flex flex-col justify-center items-center md:hidden'>
          {
            navbtn?(<div>
              <svg class="e-font-icon-svg e-fas-align-justify w-8 h-8 cursor-pointer" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg></div>): (<div>
          <svg tabindex="0" class="e-font-icon-svg e-far-window-close  w-8 h-8 cursor-pointer" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v340zM356.5 194.6L295.1 256l61.4 61.4c4.6 4.6 4.6 12.1 0 16.8l-22.3 22.3c-4.6 4.6-12.1 4.6-16.8 0L256 295.1l-61.4 61.4c-4.6 4.6-12.1 4.6-16.8 0l-22.3-22.3c-4.6-4.6-4.6-12.1 0-16.8l61.4-61.4-61.4-61.4c-4.6-4.6-4.6-12.1 0-16.8l22.3-22.3c4.6-4.6 12.1-4.6 16.8 0l61.4 61.4 61.4-61.4c4.6-4.6 12.1-4.6 16.8 0l22.3 22.3c4.7 4.6 4.7 12.1 0 16.8z"></path></svg>
          </div>)
          }
        {!navbtn ?  <div className='w-full flex flex-col justify-start items-start md:hidden'>
         {btndata.map((val, index) => (
        <a
        key={index}
        href={val.path}
          onClick={()=>checkActive(index)}
          className={`border rounded-sm w-full px-3 py-2 md:py-7 border-none text-lg ${btnActive === index ? 'bg-[#d2050d] text-white' : 'hover:bg-[#d2050d] hover:text-white'}`}
          >
          {val.name}
          </a>
         

      ))}
      </div> :""}
        </div>
        }
      <div className='flex max-md:hidden md:flex-row align-middle justify-center'>
      {btndata.map((val, index) => (
        <a
        key={index}
        href={val.path}
          onClick={()=>checkActive(index)}
          className={`border rounded-sm px-6 py-2 md:py-7 border-none text-lg ${btnActive === index ? 'bg-[#d2050d] text-white' : 'hover:bg-[#d2050d] hover:text-white'}`}
          >
          {val.name}
          </a>
         

      ))}
      </div>
    </div>
  );
};

export default Downnav;

