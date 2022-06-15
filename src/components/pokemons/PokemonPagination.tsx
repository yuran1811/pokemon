import { NUM_POKE_LOAD } from '../../constants';
import { Pokemon } from 'shared/types';
import Pagination from 'components/shared/Pagination';
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';

interface PokemonPaginationProps {
	pokemons: Pokemon[];
	setPageIdx: Dispatch<SetStateAction<number>>;
}

const PokemonPagination: FC<PokemonPaginationProps> = ({ pokemons, setPageIdx }) => {
	const [badgesLength, setBadgesLength] = useState(pokemons.length / NUM_POKE_LOAD);

	useEffect(() => {
		console.log('Rerender Poke Pagination');

		setBadgesLength(() => pokemons.length / NUM_POKE_LOAD);
	}, [pokemons.length]);

	return <Pagination badgesLength={badgesLength} setPageIdx={setPageIdx} />;
};

export default PokemonPagination;
