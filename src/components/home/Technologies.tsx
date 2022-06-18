import { technologies } from '../../constants';
import { FC } from 'react';

const Technologies: FC = () => (
	<div className='flexcentercol sm:w-[50%] w-full p-4'>
		<div className='font-semibold text-[3.5rem] text-pink-300 bg-ctbackground'>Technologies</div>
		<div className='flexcentercol text-[2.4rem] w-full mt-4'>
			<ul className='list-disc w-[80%]'>
				{technologies.map(({ name, ico, size }) => (
					<li key={name} className='flex items-center justify-center w-full'>
						<span className={`iconify px-4 text-[${size}]`} data-icon={ico}></span>
						<span>{name}</span>
					</li>
				))}
			</ul>
		</div>
	</div>
);

export default Technologies;
