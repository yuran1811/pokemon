import { NUM_POKE_LOAD } from '../../constants';
import { PaginationProps } from 'shared/types';
import PaginationButton from './PaginationButton';
import PaginationBadge from './PaginationBadge';
import { FC } from 'react';

const Pagination: FC<PaginationProps> = ({ pokemons, prev, next }) => {
	const badgesLength = pokemons.length / NUM_POKE_LOAD;
	const badges = [];

	for (let i = 0; i < badgesLength; i++) badges.push(<PaginationBadge key={i} idx={+i + 1} />);

	return (
		<div className='flexcenter justify-between w-[70%] p-[2rem]'>
			{prev && <PaginationButton type='prev' />}

			<div className='flexcenter mx-[1rem] overflow-x-auto'>{badges.map((_) => _)}</div>

			{next && <PaginationButton type='next' />}
		</div>
	);
};

export default Pagination;
