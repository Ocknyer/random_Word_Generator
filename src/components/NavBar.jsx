import React from 'react';
import { Link } from 'react-router-dom';
import { BookIcon, HomeIcon, QuizIcon } from '../assets/icons';

const NavBar = () => {
  return (
    <nav className='flex gap-2 w-full h-12 fixed bottom-0 justify-between border-t dark800 dark:border-zinc-500'>
      <Link to={'/'} className='flex items-center justify-center w-full'>
        <img src={HomeIcon} alt='홈' className='w-8 h-8 dark:invert' />
      </Link>
      <Link to={'/words'} className='flex items-center justify-center w-full'>
        <img src={BookIcon} alt='단어장' className='w-8 h-8 dark:invert' />
      </Link>
      <Link to={'/test'} className='flex items-center justify-center w-full'>
        <img src={QuizIcon} alt='시험' className='w-8 h-8 dark:invert' />
      </Link>
    </nav>
  );
};

export default NavBar;
