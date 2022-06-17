import About from './About';
import { FC } from 'react';

const Home: FC = () => (
	<div className='relative top-0 w-full p-4'>
		<div className='p-4 font-semibold text-[3.5rem] text-center text-ctcolor bg-ctbackground'>Welcome to Pokemon Page</div>

		<About />
	</div>
);

export default Home;
