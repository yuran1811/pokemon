import { PokemonLoadMoreProps } from 'shared/types';
import { LoadMoreButton } from 'components/shared';
import { FC, useCallback } from 'react';

const PokemonLoadMore: FC<PokemonLoadMoreProps> = (props) => {
	const { label, pokemons, loading, loadNextPage, ...attr } = props;

	const handleOnClick = useCallback(() => {
		if (loading) return;

		loadNextPage && loadNextPage();
	}, [pokemons]);

	return (
		<LoadMoreButton {...attr} onClick={handleOnClick}>
			{!loading ? label : 'Loading ...'}
		</LoadMoreButton>
	);
};

export default PokemonLoadMore;
