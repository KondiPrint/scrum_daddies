import React from 'react';
import { FaDiscord } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

export default function Footer() {
  return (
    <footer className='footer items-center p-4 bg-neutral text-neutral-content'>
      <aside className='items-center grid-flow-col'>
        <img className='w-16' src='../../../assets/images/scrummy_white.png' alt='' />
        <p>Copyright © 2024 - Alexander, Andreas, Elias, Stefanie & Martin</p>
      </aside>
      <nav className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
        Viden Djurs:
        <a className='hover:brightness-150 cursor-pointer' href='https://videndjurs.dk/' target='_blank'>
          <TbWorldWww className='h-6 w-6' />
        </a>
        <a className='hover:brightness-150 cursor-pointer' href='https://discord.com/invite/qmrYtJF5' target='_blank'>
          <FaDiscord className='h-6 w-6' />
        </a>
        <a className='hover:brightness-150 cursor-pointer' href='https://www.youtube.com/@videndjurs1' target='_blank'>
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' className='fill-current'>
            <path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z'></path>
          </svg>
        </a>
        <a className='hover:brightness-150 cursor-pointer' href='https://www.facebook.com/VidenDjurs' target='_blank'>
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' className='fill-current'>
            <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'></path>
          </svg>
        </a>
      </nav>
    </footer>
  );
}
