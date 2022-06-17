import { pokeapi, technologies } from '../../constants';
import { HighlightLink } from 'components/interfaces';
import { FC } from 'react';

const About: FC = () => (
	<div className='flexcentercol w-full'>
		<div className='text-[3.5rem] text-ctcolor bg-ctbackground'>About</div>

		<div className='text-[2.4rem] text-ctwhite w-full mt-4'>
			<div className='flexcentercol w-full'>
				<p className='text[3rem] indent-[-5rem]'>Technologies</p>
				<ul className='list-disc pl-[2rem]'>
					{technologies.map((_) => (
						<li key={_}>{_}</li>
					))}
				</ul>
			</div>

			<div className='flexcentercol w-full mt-[4rem]'>
				<p className='text[3rem]'>
					This site use <HighlightLink url={pokeapi}>Poke API</HighlightLink>
				</p>
			</div>
		</div>
	</div>
);

export default About;
