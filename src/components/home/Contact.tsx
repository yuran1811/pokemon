import { contacts } from '../../constants';
import { FC } from 'react';

const Contact: FC = () => (
	<div className='flexcentercol sm:w-[30rem] w-full p-4'>
		<div className='font-semibold text-[3.5rem] text-pink-300 bg-ctbackground'>Contact</div>
		<div className='flexcenter text-[2.4rem] w-full mt-4'>
			{Object.values(contacts).map(({ ico, url }) => (
				<a key={ico + url} href={url} rel='noopener noreferer' target='_blank'>
					<span className='iconify text-[5.2rem] p-2 m-2' data-icon={ico}></span>
				</a>
			))}
		</div>
	</div>
);

export default Contact;
