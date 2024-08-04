import React from 'react';
import { Link } from 'react-router-dom';
import { BookIcon, EditIcon, HomeIcon, QuizIcon } from '../assets/icons';

const NavBar = () => {
  return (
    <nav className='flex gap-2 w-full max-w-[1024px] h-12 fixed bottom-0 justify-between border-t dark:border-zinc-500 bg-white dark:bg-gray-800'>
      <Link to={'/'} className='flex items-center justify-center w-full'>
        <img src={HomeIcon} alt='홈' className='w-8 h-8 dark:invert' />
      </Link>
      <Link to={'/words'} className='flex items-center justify-center w-full'>
        <img src={BookIcon} alt='단어장' className='w-8 h-8 dark:invert' />
      </Link>
      <Link to={'/addwords'} className='flex items-center justify-center w-full'>
        <img src={EditIcon} alt='단어 추가' className='w-8 h-8 dark:invert' />
      </Link>
      <Link to={'/test'} className='flex items-center justify-center w-full'>
        <img src={QuizIcon} alt='시험' className='w-8 h-8 dark:invert' />
      </Link>
    </nav>
  );
};

export default NavBar;
