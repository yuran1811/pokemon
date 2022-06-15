import { PokemonLoadMoreProps } from 'shared/types';
import LoadMoreButton from '../shared/LoadMoreButton';
import { FC, useCallback, useEffect } from 'react';

const PokemonLoadMore: FC<PokemonLoadMoreProps> = (props) => {
	const { label, pokemons, loading, loadNextPage, loadAllPokemons, ...attr } = props;

	const handleOnClick = useCallback(() => {
		if (!loading) {
			loadNextPage && loadNextPage();
			loadAllPokemons && loadAllPokemons();
		}
	}, [pokemons]);

	useEffect(() => {}, [loading]);

	return (
		<LoadMoreButton {...attr} onClick={handleOnClick}>
			{!loading ? label : 'Loading ...'}
		</LoadMoreButton>
	);
};

export default PokemonLoadMore;
