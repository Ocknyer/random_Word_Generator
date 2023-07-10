import React from 'react';
import puppy from '../assets/images/hachan.png';

const Header = () => {
  return (
    <div className='text-center'>
      <h1 className='text-2xl mb-5'>랜덤 토익 단어 생성기</h1>
      <img src={puppy} alt='강아지' className='mask mask-heart w-80 mb-5' />
    </div>
  );
};

export default Header;
