import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookFillIcon, BookEmptyIcon, HomeFillIcon, HomeEmptyIcon, QuizFillIcon, QuizEmptyIcon } from '../assets/icons';

const NavBar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  console.log(location.pathname);

  return (
    <nav className='flex gap-2 w-full max-w-[1024px] h-12 fixed bottom-0 justify-between border-t dark:border-zinc-500 bg-white dark:bg-gray-800'>
      <Link to={'/'} className='flex items-center justify-center w-full'>
        <img src={pathname === '/' ? HomeFillIcon : HomeEmptyIcon} alt='홈' className='w-8 h-8 dark:invert' />
      </Link>
      {/* <Link to={'/words'} className='flex items-center justify-center w-full'>
        <img src={BookIcon} alt='단어장' className='w-8 h-8 dark:invert' />
      </Link> */}
      <Link to={'/addwords'} className='flex items-center justify-center w-full'>
        <img
          src={pathname === '/addwords' ? BookFillIcon : BookEmptyIcon}
          alt='단어 추가'
          className='w-8 h-8 dark:invert'
        />
      </Link>
      <Link to={'/test'} className='flex items-center justify-center w-full'>
        <img src={pathname === '/test' ? QuizFillIcon : QuizEmptyIcon} alt='시험' className='w-8 h-8 dark:invert' />
      </Link>
    </nav>
  );
};

export default NavBar;
