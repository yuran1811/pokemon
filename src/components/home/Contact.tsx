import { contacts } from '../../constants';
import { FC } from 'react';

const Contact: FC = () => (
	<div className='flexcentercol sm:w-[50%] w-full p-4'>
		<div className='font-semibold text-[3.5rem] text-pink-300 bg-ctbackground'>Contact</div>
		<div className='flexcenter text-[2.4rem] w-full mt-4'>
			{Object.values(contacts).map(({ ico, url }) => (
				<a key={ico + url} href={url} rel='noopener noreferer'>
					<span className='iconify text-[6rem] p-4 m-4' data-icon={ico}></span>
				</a>
			))}
		</div>
	</div>
);

export default Contact;
