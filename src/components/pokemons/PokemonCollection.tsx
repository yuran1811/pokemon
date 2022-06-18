import { useLocalStore } from 'hooks';
import { standardizePokemon } from 'utils';
import { NUM_POKE_LOAD, pokeapiGet } from '../../constants';
import { Pokemon, PokemonAction, PokemonDetailProps, Pokemons } from 'shared/types';
import { Overlay } from 'components/shared';
import PokemonPagination from './PokemonPagination';
import PokemonLoadMore from './PokemonLoadMore';
import PokemonSearch from './PokemonSearch';
import PokemonList from './PokemonList';
import { FC, useCallback, useEffect, useReducer, useRef, useState } from 'react';
import axios from 'axios';

interface stateReducerType {
	searching: boolean;
	searchValue: string;
	pokemons: Pokemon[];
}

interface listPokesType {
	pokemons: Pokemon[];
	change: number;
}

const PokemonCollection: FC = () => {
	const [localData, setLocalData] = useLocalStore<Pokemon[]>('pokemons', [], '[]');
	const [localPageIdx, setLocalPageIdx] = useLocalStore<number>('pageIdx', 0, '0');
	const [localLastSearch, setLocalLastSearch] = useLocalStore<string>('lastSearch', 'null', 'null');

	const [pageIdx, setPageIdx] = useState<number>(localPageIdx);
	const [nextUrl, setNextUrl] = useState<string>('');
	const [canLoad, setCanLoad] = useState<boolean>(true);
	const [loading, setLoading] = useState<boolean>(false);
	const [pokemons, setPokemons] = useState<Pokemon[]>(localData);
	const [listPokes, setListPokes] = useState<listPokesType>({ pokemons: localData, change: 0 });
	const [loadTimes, setLoadTimes] = useState<number>(localData.length / NUM_POKE_LOAD);
	const [pokesEachPage, setPokesEachPage] = useState<Pokemon[]>(pokemons.slice(0, pageIdx * NUM_POKE_LOAD));
	const [viewDetail, setDetail] = useState<PokemonDetailProps>({
		id: 0,
		isOpened: false,
	});

	const thisCollection = useRef<HTMLDivElement>(null);

	const [listPokesSearch, setListPokesSearch] = useReducer(
		(listPokesSearch: stateReducerType, { searchValue }: PokemonAction): stateReducerType => {
			if (!searchValue) return { searching: false, searchValue, pokemons: [] };

			return { searching: true, searchValue, pokemons: pokemons.filter((_) => _.name.includes(searchValue)) };
		},
		{ searching: false, searchValue: localLastSearch === 'null' ? '' : localLastSearch, pokemons }
	);

	const loadNextPage = useCallback(async () => {
		try {
			setLoading(true);

			const { data } = await axios.get(nextUrl || `${pokeapiGet}?limit=${NUM_POKE_LOAD}&offset=${loadTimes * NUM_POKE_LOAD}`);

			data.results.forEach(async (_: Pokemons) => {
				try {
					const { data } = await axios.get(`${pokeapiGet}/${_.name}`);
					setPokemons((p) => [...p, data]);
				} catch (e) {
					console.log(e);
				}
			});

			setNextUrl(data.next);
			setLoadTimes((t) => t + 1);
		} catch (e) {
			console.log(e);
		} finally {
			setCanLoad(true);
			setLoading(false);
		}
	}, [nextUrl]);
	const selectPokemon = useCallback(
		(id: number) => {
			!viewDetail.isOpened && setDetail({ id, isOpened: true });
		},
		[viewDetail.isOpened]
	);

	useEffect(() => {
		setListPokesSearch({ searchValue: localLastSearch });
	}, []);

	useEffect(() => {
		setLocalData(standardizePokemon(pokemons));
		setListPokesSearch({ searchValue: listPokesSearch.searchValue });
	}, [pokemons]);

	useEffect(() => {
		setListPokes(({ change }) => ({
			pokemons: listPokesSearch.searching ? listPokesSearch.pokemons : pokesEachPage,
			change: change + 1,
		}));

		setLocalLastSearch(listPokesSearch.searchValue || '');
	}, [pokesEachPage, listPokesSearch]);

	useEffect(() => {
		setPokesEachPage(() => pokemons.slice((pageIdx - 1) * NUM_POKE_LOAD, pageIdx * NUM_POKE_LOAD));
		setLocalPageIdx(pageIdx);
	}, [pageIdx, pokemons]);

	return (
		<section ref={thisCollection} className='flexcentercol flex-wrap text-ctbackground font-semibold mt-[4rem]'>
			<PokemonSearch value={localLastSearch} placeholder='Type to search' setListPokesSearch={setListPokesSearch} />

			{viewDetail.isOpened && viewDetail.id && (
				<Overlay zIdx='z-[11]' onClick={() => setDetail({ id: 0, isOpened: !viewDetail.isOpened })} />
			)}

			<PokemonList listPokes={listPokes} viewDetail={viewDetail} selectPokemon={selectPokemon} setDetail={setDetail} />

			{pokemons.length ? <PokemonPagination localPageIdx={localPageIdx} pokemons={pokemons} setPageIdx={setPageIdx} /> : ''}

			{canLoad && <PokemonLoadMore label='More Pokemons' pokemons={pokemons} loading={loading} loadNextPage={loadNextPage} />}
		</section>
	);
};

export default PokemonCollection;
