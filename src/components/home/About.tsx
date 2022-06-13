import { pokeapi, technologies } from '../../constants';
import { ctUnderline } from 'utils';
import { FC } from 'react';

const About: FC = () => (
	<div className='flexcentercol w-full'>
		<div className='text-[3.5rem] text-ctcolor bg-ctbackground'>About</div>
		<div className='text-[2.4rem] text-ctwhite w-full mt-4'>
			<div className='flexcentercol w-full'>
				<p className='text[3rem] indent-[-5rem]'>Technologies</p>
				<ul className='list-disc pl-[2rem]'>
					{technologies.map((_, idx) => (
						<li key={idx}>{_}</li>
					))}
				</ul>
			</div>
			<div className='flexcentercol w-full mt-[4rem]'>
				<p className='text[3rem]'>
					This site use{' '}
					<a
						className={`relative text-ctlinkcolor font-semibold ${ctUnderline} after:transition-all after:duration-300 after:ease-in-out after:origin-center after:scale-x-0 hover:after:scale-x-100`}
						href={pokeapi}
						target='_blank'
						rel='noopener noreferrer'
					>
						Poke API
					</a>
				</p>
			</div>
		</div>
	</div>
);

export default About;
