import { PokemonAction, PokemonCollectionProps, PokemonDetail } from '@mytypes/Pokemon';
import Pagination from '../shared/Pagination';
import PokemonLoadMore from './PokemonLoadMore';
import PokemonSearch from './PokemonSearch';
import PokemonList from './PokemonList';
import { FC, useCallback, useEffect, useReducer } from 'react';

interface stateReducerType {
	pokemons: PokemonDetail[];
}

const _st = {
	active: 'flexcentercol flex-wrap text-ctbackground font-semibold mt-[4rem] h-[100vh] overflow-y-hidden',
	default: 'flexcentercol flex-wrap text-ctbackground font-semibold mt-[4rem]',
};

const PokemonCollection: FC<PokemonCollectionProps> = (props) => {
	const { loading, pokemons, allPokemon, viewDetail, setDetail, setPokemons, loadNextPage } = props;

	const [listPokes, setListPokes] = useReducer(
		(listPokes: stateReducerType, action: PokemonAction): stateReducerType => {
			return !action.name ? { pokemons } : { pokemons: pokemons.filter((_) => _.name.toLowerCase().includes(action.name)) };
		},
		{ pokemons }
	);

	const selectPokemon = useCallback(
		(id: number) => {
			!viewDetail.isOpened && setDetail({ id, isOpened: true });
		},
		[viewDetail]
	);

	useEffect(() => {
		setListPokes({ name: '' });

		return () => {};
	}, [pokemons]);

	return (
		<section className={viewDetail.isOpened ? _st.active : _st.default}>
			{!viewDetail.isOpened && <PokemonSearch placeholder='Type to search' setListPokes={setListPokes} />}
			{viewDetail.isOpened && <div className='w-[100vw] h-[100vh]'></div>}

			<div className='flexcenter flex-wrap px-12 my-8'>
				{!listPokes.pokemons.length ? (
					<div className='text-[4rem] text-center text-ctcolor p-8'>No Poke</div>
				) : (
					listPokes.pokemons.map((_) => (
						<div key={_.name} onClick={() => selectPokemon(_.id)}>
							<PokemonList pokemon={_} viewDetail={viewDetail} setDetail={setDetail} />
						</div>
					))
				)}
			</div>

			{/* {!viewDetail.isOpened && <Pagination allPokemon={allPokemon} prev={true} next={true} />} */}
			{!viewDetail.isOpened && <PokemonLoadMore loading={loading} loadNextPage={loadNextPage} />}
		</section>
	);
};

export default PokemonCollection;
