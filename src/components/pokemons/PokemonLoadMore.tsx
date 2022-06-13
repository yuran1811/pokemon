import { PokemonLoadMoreProps } from 'shared/types';
import LoadMoreButton from '../shared/LoadMoreButton';
import { FC } from 'react';

const PokemonLoadMore: FC<PokemonLoadMoreProps> = (props) => {
	const {label, loading, loadNextPage, loadAllPokemons, ...attr } = props;

	const handleOnClick = () => {
		if (!loading) {
			loadNextPage && loadNextPage();
			loadAllPokemons && loadAllPokemons();
		}
	};

	return (
		<LoadMoreButton {...attr} onClick={handleOnClick}>
			{!loading ? label : 'Loading ...'}
		</LoadMoreButton>
	);
};

export default PokemonLoadMore;
