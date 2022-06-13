import { PokemonLoadMoreProps } from '@mytypes/Pokemon';
import LoadMoreButton from '../shared/LoadMoreButton';
import { FC } from 'react';

const PokemonLoadMore: FC<PokemonLoadMoreProps> = (props) => {
	const { loading, loadNextPage, ...attr } = props;

	return (
		<LoadMoreButton {...attr} onClick={() => !loading && loadNextPage()}>
			{!loading ? 'More Pokemons' : 'Loading ...'}
		</LoadMoreButton>
	);
};

export default PokemonLoadMore;
