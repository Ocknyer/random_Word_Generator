import React from 'react';
import Blink from '../assets/images/blink.gif';
import { useNavigate } from 'react-router-dom';

const Stamp = () => {
  return (
    <div className='w-full h-full border-dashed border-2 border-secondary overflow-hidden flex'>
      <div className='border-b-2 border-dashed h-8 w-full border-secondary text-center text-white'>
        Day5
      </div>
      {/* <img src={Blink} alt='stamp' className='w-24' /> */}
    </div>
  );
};

const StampList = ({ stampList }) => {
  const navigate = useNavigate();

  const handleToHome = () => {
    navigate('/');
  };

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center p-5'>
      <div className='w-full h-full flex flex-col justify-start items-center bg-primary p-9'>
        <button
          className='btn absolute right-14 top-10 rounded-lg bg-secondary'
          onClick={handleToHome}
        >
          홈으로
        </button>
        <h1 className='title text-2xl text-white'>내 스탬프</h1>
        <div className='w-full h-full grid gap-3 grid-cols-5 grid-rows-6 border-dashed border-2 border-secondary mt-10 rounded-xl p-3'>
          <div className='w-full h-full border-dashed border-2 border-secondary overflow-hidden flex'>
            <div className='border-b-2 border-dashed h-8 w-full border-secondary text-center text-white'>
              Day5
            </div>
            {/* <img src={Blink} alt='stamp' className='w-24' /> */}
          </div>
          <div className='w-full h-full border-dashed border-2 border-secondary overflow-hidden flex'>
            {/* <img src={Blink} alt='stamp' className='w-24' /> */}
          </div>
          <div className='w-full h-full border-dashed border-2 border-secondary overflow-hidden flex'>
            {/* <img src={Blink} alt='stamp' className='w-24' /> */}
          </div>
          <div className='w-full h-full border-dashed border-2 border-secondary overflow-hidden flex'>
            {/* <img src={Blink} alt='stamp' className='w-24' /> */}
          </div>
          <div className='w-full h-full border-dashed border-2 border-secondary overflow-hidden flex'>
            {/* <img src={Blink} alt='stamp' className='w-24' /> */}
          </div>
          <div className='w-full h-full border-dashed border-2 border-secondary overflow-hidden flex'>
            {/* <img src={Blink} alt='stamp' className='w-24' /> */}
          </div>
          <div className='w-full h-full border-dashed border-2 border-secondary overflow-hidden flex'>
            {/* <img src={Blink} alt='stamp' className='w-24' /> */}
          </div>
          <div className='w-full h-full border-dashed border-2 border-secondary overflow-hidden flex'>
            {/* <img src={Blink} alt='stamp' className='w-24' /> */}
          </div>
          <div className='w-full h-full border-dashed border-2 border-secondary overflow-hidden flex'>
            {/* <img src={Blink} alt='stamp' className='w-24' /> */}
          </div>
          <div className='w-full h-full border-dashed border-2 border-secondary overflow-hidden flex'>
            {/* <img src={Blink} alt='stamp' className='w-24' /> */}
          </div>
          <div className='w-full h-full border-dashed border-2 border-secondary overflow-hidden flex'>
            {/* <img src={Blink} alt='stamp' className='w-24' /> */}
          </div>
          <div className='w-full h-full border-dashed border-2 border-secondary overflow-hidden flex'>
            {/* <img src={Blink} alt='stamp' className='w-24' /> */}
          </div>
          <div className='w-full h-full border-dashed border-2 border-secondary overflow-hidden flex'>
            {/* <img src={Blink} alt='stamp' className='w-24' /> */}
          </div>
          <div className='w-full h-full border-dashed border-2 border-secondary overflow-hidden flex'>
            {/* <img src={Blink} alt='stamp' className='w-24' /> */}
          </div>
          <div className='w-full h-full border-dashed border-2 border-secondary overflow-hidden flex'>
            {/* <img src={Blink} alt='stamp' className='w-24' /> */}
          </div>
          <div className='w-full h-full border-dashed border-2 border-secondary overflow-hidden flex'>
            {/* <img src={Blink} alt='stamp' className='w-24' /> */}
          </div>
          <div className='w-full h-full border-dashed border-2 border-secondary overflow-hidden flex'>
            {/* <img src={Blink} alt='stamp' className='w-24' /> */}
          </div>
          <div className='w-full h-full border-dashed border-2 border-secondary overflow-hidden flex'>
            {/* <img src={Blink} alt='stamp' className='w-24' /> */}
          </div>
          <div className='w-full h-full border-dashed border-2 border-secondary overflow-hidden flex'>
            {/* <img src={Blink} alt='stamp' className='w-24' /> */}
          </div>
          <div className='w-full h-full border-dashed border-2 border-secondary overflow-hidden flex'>
            {/* <img src={Blink} alt='stamp' className='w-24' /> */}
          </div>
          <div className='w-full h-full border-dashed border-2 border-secondary overflow-hidden flex'>
            {/* <img src={Blink} alt='stamp' className='w-24' /> */}
          </div>
          <div className='w-full h-full border-dashed border-2 border-secondary overflow-hidden flex'>
            {/* <img src={Blink} alt='stamp' className='w-24' /> */}
          </div>
          <div className='w-full h-full border-dashed border-2 border-secondary overflow-hidden flex'>
            {/* <img src={Blink} alt='stamp' className='w-24' /> */}
          </div>
          <div className='w-full h-full border-dashed border-2 border-secondary overflow-hidden flex'>
            {/* <img src={Blink} alt='stamp' className='w-24' /> */}
          </div>
          <div className='w-full h-full border-dashed border-2 border-secondary overflow-hidden flex'>
            {/* <img src={Blink} alt='stamp' className='w-24' /> */}
          </div>
          <div className='w-full h-full border-dashed border-2 border-secondary overflow-hidden flex'>
            {/* <img src={Blink} alt='stamp' className='w-24' /> */}
          </div>
          <div className='w-full h-full border-dashed border-2 border-secondary overflow-hidden flex'>
            {/* <img src={Blink} alt='stamp' className='w-24' /> */}
          </div>
          <div className='w-full h-full border-dashed border-2 border-secondary overflow-hidden flex'>
            {/* <img src={Blink} alt='stamp' className='w-24' /> */}
          </div>
          <div className='w-full h-full border-dashed border-2 border-secondary overflow-hidden flex'>
            {/* <img src={Blink} alt='stamp' className='w-24' /> */}
          </div>
          <div className='w-full h-full border-dashed border-2 border-secondary overflow-hidden flex'>
            {/* <img src={Blink} alt='stamp' className='w-24' /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StampList;
