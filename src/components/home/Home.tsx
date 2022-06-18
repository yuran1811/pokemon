import { pokeapi } from '../../constants';
import { HighlightLink } from 'components/interfaces';
import Contact from './Contact';
import Technologies from './Technologies';
import { FC } from 'react';

const Home: FC = () => (
	<div className='relative top-0 w-full p-4 text-white'>
		<div className='p-4 font-bold text-[3.5rem] text-center text-indigo-300 bg-ctbackground'>Welcome to Pokemon Page</div>

		<div className='flex flex-wrap justify-between items-start'>
			<Technologies />
			<Contact />
		</div>

		<div className='flexcentercol text-[3rem] w-full mt-[2.5rem]'>
			<p>
				This site use <HighlightLink url={pokeapi}>Poke API</HighlightLink>
			</p>
		</div>
	</div>
);

export default Home;
