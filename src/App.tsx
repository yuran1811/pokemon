import { Pokemon, PokemonDetailProps, Pokemons } from './shared/types';
import PokemonCollection from './components/PokemonCollection';
import { FC, useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import './App.scss';

const App: FC = () => {
	const [pokemons, setPokemons] = useState<Pokemon[]>([]);
	const [nextUrl, setNextUrl] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(true);
	const [viewDetail, setDetail] = useState<PokemonDetailProps>({
		id: 0,
		isOpened: false,
	});

	const loadNextPage = useCallback(async () => {
		setLoading(true);

		const { data } = await axios.get(
			nextUrl || 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
		);

		data.results.forEach(async (_: Pokemons) => {
			const { data } = await axios.get(
				`https://pokeapi.co/api/v2/pokemon/${_.name}`
			);

			setPokemons((p) => [...p, data]);
		});

		setNextUrl(data.next);
		setLoading(false);
	}, [nextUrl]);

	useEffect(() => {
		loadNextPage();

		return () => {};
	}, []);

	return (
		<div className="App">
			<div className={!viewDetail.isOpened ? "container": "container overlay"}>
				<header className="pokemon-header">Pokemon</header>

				<PokemonCollection
					pokemons={pokemons}
					viewDetail={viewDetail}
					setDetail={setDetail}
				/>

				{!viewDetail.isOpened && (
					<button
						className="load-more"
						onClick={() => loadNextPage()}
					>
						{!loading ? 'More Pokemons' : 'Loading ...'}
					</button>
				)}
			</div>
		</div>
	);
};

export default App;
