import { FC } from 'react';

import { ghRepo } from '@/constants';

const Footer: FC = () => (
  <footer className='z-10 sticky bottom-0 py-[1.2rem] w-full font-semibold text-[2rem] text-ctcolor text-center tracking-[0.25rem] bg-ctbackground'>
    Made by{' '}
    <a
      className='text-ctcolor bg-ctbackground px-[1rem] py-[0.7rem] transition-all duration-300 ease-in-out hover:text-ctbackground hover:bg-ctcolor'
      href={ghRepo}
      target='_blank'
      rel='noopener noreferrer'
    >
      yuran1811
    </a>
  </footer>
);

export default Footer;
