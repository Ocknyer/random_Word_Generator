import React from 'react';
import puppy from '../assets/images/hachan.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleToStamp = () => {
    navigate('/stamp');
  };

  return (
    <div className='text-center w-full flex-col items-center flex justify-center'>
      <h1 className='title text-white text-3xl mb-5'>랜덤 토익 단어 생성기</h1>
      <img src={puppy} alt='강아지' className='mask mask-heart w-60 mb-5' />
      <button
        className='btn absolute right-10 top-10 rounded-lg bg-secondary'
        onClick={handleToStamp}
      >
        내 스탬프
      </button>
    </div>
  );
};

export default Header;
