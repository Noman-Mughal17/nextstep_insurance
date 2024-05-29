import React, { useState } from 'react';

const btndata = [{name:'CAR INSURANCE',path:''}, {name:'VAN INSURANCE',path:''},{name:'MOTOR TRADE',path:''}, {name:'ACCIDENT MANAGEMENT',path:''},{name:'HOME INSURANCE',path:''}, {name:'BUSINESS INSURANCE',path:''}];

const Downnav = () => {
  const [btnActive, setBtnActive] = useState('');

  const checkActive = (index) => {
    setBtnActive(index);
  };

  return (
    <div className='bg-[#edeef0] py-3 w-full  hidden lg:block'>
      <div className='block lg:hidden z'></div>
      <div className='flex flex-row align-middle justify-center'>
      {btndata.map((val, index) => (
        <button
          key={index}
          onClick={() => checkActive(index)}
          className={`border rounded-sm px-6 py-7 border-none text-lg ${btnActive === index ? 'bg-[#d2050d] text-white' : 'hover:bg-[#d2050d] hover:text-white'}`}
        >
          {val.name}
        </button>
      ))}
      </div>
    </div>
  );
};

export default Downnav;
