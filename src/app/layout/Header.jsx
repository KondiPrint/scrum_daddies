import React from 'react';
import { FaChevronUp } from 'react-icons/fa';

export default function Header() {
  return (
    <header id='top' className='bg-neutral relative'>
      <nav className='navbar'>
        <div className='navbar-start h-fit'></div>
        <div className='navbar-center'>
          <img className='w-16' src='../../../assets/images/scrummy_white.png' alt='' />
        </div>
        <div className='navbar-end'></div>
      </nav>
      <span className='fixed bottom-24 right-1'>
        <a href='#top'>
          <FaChevronUp className='h-5 w-5 fill-black dark:fill-white hidden md:block' />
        </a>
      </span>
    </header>
  );
}
