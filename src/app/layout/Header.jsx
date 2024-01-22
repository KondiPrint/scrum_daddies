import React from 'react';
import { FaChevronUp } from 'react-icons/fa';

export default function Header() {
  return (
    <header id='top' className='bg-neutral relative'>
      <nav className='navbar'>
        <div className='navbar-start'></div>
        <div className='navbar-center'>I'm a header</div>
        <div className='navbar-end'></div>
      </nav>
      <span className='fixed bottom-20 right-5'>
        <a href='#top'>
          <FaChevronUp className='h-5 w-5 fill-black dark:fill-white hidden md:block' />
        </a>
      </span>
    </header>
  );
}
