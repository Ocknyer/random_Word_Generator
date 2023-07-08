import React from 'react';
import puppy from '../assets/images/hachan.png';

const Header = () => {
  return (
    <div className='text-center'>
      <img src={puppy} alt='강아지' className='mask mask-heart w-80' />
      <h1 className='text-2xl'>랜덤 토익 단어 생성기</h1>
    </div>
  );
};

export default Header;
