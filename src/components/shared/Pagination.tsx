import { PaginationProps } from '@mytypes/Pagination';
import PaginationButton from './PaginationButton';
import PaginationBadge from './PaginationBadge';
import { FC } from 'react';

const Pagination: FC<PaginationProps> = ({ prev, next }) => (
	<div className='flexcenter justify-between w-[70%] p-[2rem]'>
		{prev && <PaginationButton type='prev' />}

		<div className='flexcenter mx-[1rem] overflow-x-auto'>
			{Array(100, 1).map((_, idx) => (
				<PaginationBadge key={idx} idx={+idx + 1} />
			))}
		</div>

		{next && <PaginationButton type='next' />}
	</div>
);

export default Pagination;
