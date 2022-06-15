import { useLocalStore } from 'hooks';
import { standardizePokemon } from 'utils';
import { NUM_POKE, NUM_POKE_LOAD, pokeapiGet } from '../../constants';
import { Pokemon, PokemonAction, PokemonDetailProps, Pokemons } from 'shared/types';
import Overlay from 'components/shared/Overlay';
import PokemonPagination from './PokemonPagination';
import PokemonLoadMore from './PokemonLoadMore';
import PokemonSearch from './PokemonSearch';
import PokemonList from './PokemonList';
import { FC, useCallback, useEffect, useReducer, useRef, useState } from 'react';
import axios from 'axios';

interface stateReducerType {
	pokemons: Pokemon[];
}

const PokemonCollection: FC = () => {
	const [localData, setLocalData] = useLocalStore<Pokemon[]>('pokemons', [], '[]');
	const [pageIdx, setPageIdx] = useState(1);
	const [nextUrl, setNextUrl] = useState<string>('');
	const [canLoad, setCanLoad] = useState<boolean>(true);
	const [loading, setLoading] = useState<boolean>(false);
	const [pokemons, setPokemons] = useState<Pokemon[]>(localData);
	const [loadTimes, setLoadTimes] = useState<number>(localData.length / NUM_POKE_LOAD);
	const [pokesEachPage, setPokesEachPage] = useState<Pokemon[]>(pokemons.slice(0, pageIdx * NUM_POKE_LOAD));
	const [viewDetail, setDetail] = useState<PokemonDetailProps>({
		id: 0,
		isOpened: false,
	});

	const [listPokesSearch, setListPokesSearch] = useReducer(
		(listPokesSearch: stateReducerType, action: PokemonAction): stateReducerType => {
			return !action.name ? { pokemons: [] } : { pokemons: pokemons.filter((_) => _.name.includes(action.name)) };
		},
		{ pokemons }
	);

	const loadAllPokemons = useCallback(async () => {
		const offsetLength = NUM_POKE - pokemons.length;
		if (offsetLength < 0) {
			setCanLoad(false);
			return;
		}

		setLoading(true);

		const { data } = await axios.get(`${pokeapiGet}?limit=${NUM_POKE - pokemons.length}&offset=${NUM_POKE_LOAD * loadTimes}`);
		data.results.forEach(async (_: Pokemons) => {
			const { data } = await axios.get(`${pokeapiGet}/${_.name}`);
			setPokemons((p) => [...p, ...data]);
		});
		setCanLoad(false);

		setLoading(false);
	}, [pokemons]);

	const loadNextPage = useCallback(async () => {
		setLoading(true);

		const { data } = await axios.get(nextUrl || `${pokeapiGet}?limit=${NUM_POKE_LOAD}&offset=${loadTimes * NUM_POKE_LOAD}`);
		data.results.forEach(async (_: Pokemons) => {
			const { data } = await axios.get(`${pokeapiGet}/${_.name}`);
			setPokemons((p) => [...p, data]);
		});
		setNextUrl(data.next);
		setLoadTimes((t) => t + 1);
		setCanLoad(true);

		setLoading(false);
	}, [nextUrl]);

	const selectPokemon = useCallback(
		(id: number) => {
			!viewDetail.isOpened && setDetail({ id, isOpened: true });
		},
		[viewDetail.isOpened]
	);

	useEffect(() => {
		!localData.length && loadNextPage();
	}, []);

	useEffect(() => {
		setListPokesSearch({ name: '' });
		setLocalData(standardizePokemon(pokemons));
	}, [pokemons]);

	useEffect(() => {
		setPokesEachPage(() => pokemons.slice((pageIdx - 1) * NUM_POKE_LOAD, pageIdx * NUM_POKE_LOAD));
	}, [pageIdx]);

	const thisCollection = useRef<HTMLDivElement>(null);

	useEffect(() => {
		thisCollection.current && thisCollection.current.scrollIntoView({ behavior: 'smooth' });
	}, [pokesEachPage]);

	return (
		<section ref={thisCollection} className='flexcentercol flex-wrap text-ctbackground font-semibold mt-[4rem]'>
			<PokemonSearch placeholder='Type to search' setListPokesSearch={setListPokesSearch} />

			{viewDetail.isOpened && viewDetail.id && (
				<Overlay zIdx='z-[11]' onClick={() => setDetail({ id: 0, isOpened: !viewDetail.isOpened })} />
			)}

			<PokemonList
				listPokes={{ pokemons: listPokesSearch.pokemons.length ? listPokesSearch.pokemons : pokesEachPage }}
				viewDetail={viewDetail}
				selectPokemon={selectPokemon}
				setDetail={setDetail}
			/>

			<PokemonPagination pokemons={pokemons} setPageIdx={setPageIdx} />

			{canLoad && (
				<>
					<PokemonLoadMore label='More Pokemons' pokemons={pokemons} loading={loading} loadNextPage={loadNextPage} />
					{/* <PokemonLoadMore label='Load all pokemons' pokemons={pokemons} loading={loading} loadAllPokemons={loadAllPokemons} /> */}
				</>
			)}
		</section>
	);
};

export default PokemonCollection;
