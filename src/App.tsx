import { pokeapiGet } from 'constants/links';
import { Pokemons, Pokemon, PokemonDetailProps } from '@mytypes/Pokemon';
import PokemonCollection from './components/pokemons/PokemonCollection';
import ErrorContent from './components/shared/ErrorContent';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import Home from './components/home/Home';
import { FC, useCallback, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

const App: FC = () => {
	const [nextUrl, setNextUrl] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(true);
	const [pokemons, setPokemons] = useState<Pokemon[]>([]);
	const [allPokemon, setAllPokemon] = useState<Pokemon[]>([]);
	const [viewDetail, setDetail] = useState<PokemonDetailProps>({
		id: 0,
		isOpened: false,
	});

	const getAllPokemon = useCallback(async () => {
		const { data } = await axios.get(`${pokeapiGet}?limit=100&offset=0`);
		data.results.forEach(async (_: Pokemons) => {
			const { data } = await axios.get(`${pokeapiGet}/${_.name}`);
			setAllPokemon((p) => [...p, data]);
		});
	}, []);

	const loadNextPage = useCallback(async () => {
		setLoading(true);

		const { data } = await axios.get(nextUrl || `${pokeapiGet}?limit=20&offset=0`);
		data.results.forEach(async (_: Pokemons) => {
			const { data } = await axios.get(`${pokeapiGet}/${_.name}`);
			setPokemons((p) => [...p, data]);
		});
		setNextUrl(data.next);

		setLoading(false);
	}, [nextUrl]);

	useEffect(() => {
		loadNextPage();
		// getAllPokemon();

		return () => {};
	}, []);

	return (
		<div className='relative h-[100vh]'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route
					path='/pokemons/*'
					element={
						<PokemonCollection
							loading={loading}
							pokemons={pokemons}
							allPokemon={allPokemon}
							viewDetail={viewDetail}
							setDetail={setDetail}
							setPokemons={setPokemons}
							loadNextPage={loadNextPage}
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
