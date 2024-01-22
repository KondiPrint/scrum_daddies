import React from 'react';
import { FaChevronUp } from 'react-icons/fa';

export default function Header() {
  return (
    <header id='top' className='bg-neutral relative'>
      <nav className='navbar'>
        <div className='navbar-start h-20'>
          <img className=' rounded-3xl scale-50 w-36' src='../../../assets/images/logo1.png' alt='' />
        </div>
        <div className='navbar-center'>I'm a header</div>
        <div className='navbar-end'></div>
      </nav>
      <span className='fixed top-5 right-5'>
        <a href='#top'>
          <FaChevronUp className='h-5 w-5 fill-black dark:fill-white hidden md:block' />
        </a>
      </span>
    </header>
  );
}
