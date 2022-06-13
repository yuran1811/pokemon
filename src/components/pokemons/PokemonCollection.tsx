import { Pokemon, PokemonAction, PokemonCollectionProps } from 'shared/types';
import Pagination from 'components/shared/Pagination';
import PokemonLoadMore from './PokemonLoadMore';
import PokemonSearch from './PokemonSearch';
import PokemonList from './PokemonList';
import { FC, useCallback, useEffect, useReducer } from 'react';

interface stateReducerType {
	pokemons: Pokemon[];
}

const _st = {
	active: 'flexcentercol flex-wrap text-ctbackground font-semibold mt-[4rem]', // h-[calc(99vh)] overflow-y-hidden
	default: 'flexcentercol flex-wrap text-ctbackground font-semibold mt-[4rem]',
};

const PokemonCollection: FC<PokemonCollectionProps> = (props) => {
	const { canLoad, loading, pokemons, viewDetail, setDetail, setPokemons, loadNextPage, loadAllPokemons } = props;

	const [listPokes, setListPokes] = useReducer(
		(listPokes: stateReducerType, action: PokemonAction): stateReducerType => {
			return !action.name ? { pokemons } : { pokemons: pokemons.filter((_) => _.name.includes(action.name)) };
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
			<PokemonSearch placeholder='Type to search' setListPokes={setListPokes} />

			{viewDetail.isOpened && <div className='z-[9] fixed top-0 left-0 w-[100vw] h-[100vh] bg-slate-900 opacity-80'></div>}

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

			{/* <Pagination pokemons={pokemons} prev={true} next={true} /> */}
			{canLoad && (
				<>
					<PokemonLoadMore label='More Pokemons' loading={loading} loadNextPage={loadNextPage} />
					<PokemonLoadMore label='Load all pokemons' loading={loading} loadAllPokemons={loadAllPokemons} />
				</>
			)}
		</section>
	);
};

export default PokemonCollection;
