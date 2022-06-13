import { pokeapiGet, NUM_POKE_LOAD } from './constants';
import { standardizePokemon } from 'utils';
import { Pokemon, PokemonDetailProps, Pokemons } from 'shared/types';
import PokemonCollection from 'components/pokemons/PokemonCollection';
import ErrorContent from 'components/shared/ErrorContent';
import Header from 'components/partials/Header';
import Footer from 'components/partials/Footer';
import Home from 'components/home/Home';
import { useLocalStore } from 'hooks';
import { FC, useCallback, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

const App: FC = () => {
	const [localData, setLocalData] = useLocalStore<Pokemon[]>('pokemons', [], '[]');
	const [nextUrl, setNextUrl] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);
	const [canLoad, setCanLoad] = useState<boolean>(true);
	const [loadTimes, setLoadTimes] = useState<number>(localData.length / NUM_POKE_LOAD);
	const [pokemons, setPokemons] = useState<Pokemon[]>(localData);
	const [viewDetail, setDetail] = useState<PokemonDetailProps>({
		id: 0,
		isOpened: false,
	});

	const loadAllPokemons = useCallback(async () => {
		setLoading(true);

		const { data } = await axios.get(`${pokeapiGet}?limit=200&offset=${NUM_POKE_LOAD * loadTimes}`);
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

		setLoading(false);
	}, [nextUrl]);

	useEffect(() => {
		!localData.length && loadNextPage();
		return () => {};
	}, []);

	useEffect(() => {
		setLocalData(standardizePokemon(pokemons));
		return () => {};
	}, [pokemons]);

	return (
		<div className='relative h-[100vh] overflow-x-hidden'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route
					path='/pokemons/*'
					element={
						<PokemonCollection
							canLoad={canLoad}
							loading={loading}
							pokemons={pokemons}
							viewDetail={viewDetail}
							setDetail={setDetail}
							setPokemons={setPokemons}
							loadNextPage={loadNextPage}
							loadAllPokemons={loadAllPokemons}
						/>
					}
				></Route>
				<Route path='*' element={<ErrorContent />}></Route>
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
