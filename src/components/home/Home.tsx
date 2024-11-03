import { FC } from 'react';

import { HighlightLink } from '@/components/interfaces';
import { pokeapi } from '@/constants';
import Contact from './Contact';
import Technologies from './Technologies';

const Home: FC = () => (
  <div className='relative top-0 w-full p-4 text-white'>
    <div className='p-12 font-bold text-6xl text-center text-indigo-300 bg-ctbackground'>Welcome to Pokemon Wiki</div>

    <div className='flex flex-wrap justify-center items-start'>
      <Technologies />
      <Contact />
    </div>

    <p className='flexcentercol text-4xl w-full my-12'>
      This site using <HighlightLink url={pokeapi}>Poke API</HighlightLink>
    </p>
  </div>
);

export default Home;
