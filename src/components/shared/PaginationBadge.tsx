import { PaginationBadgeProps } from 'shared/types';
import { FC } from 'react';

const PaginationBadge: FC<PaginationBadgeProps> = ({ idx }) => (
	<div
		className='flexcenter cursor-pointer w-[4rem] h-[4rem] text-ctcolor bg-ctbackground m-[1rem] p-[0.6rem] rounded-[50%] transition-all duration-300 ease-in-out hover:text-ctbackground hover:bg-ctcolor'
		key={idx}
	>
		<span className='font-bold text-[2.6rem]'>{idx}</span>
	</div>
);

export default PaginationBadge;
