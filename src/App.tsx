import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import PokemonCollection from './components/PokemonCollection';
import { Pokemon, PokemonDetailProps, Pokemons } from './types';

const App: React.FC = () => {
	const [pokemons, setPokemons] = useState<Pokemon[]>([]);
	const [nextUrl, setNextUrl] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(true);
	const [viewDetail, setDetail] = useState<PokemonDetailProps>({
		id: 0,
		isOpened: false,
	});

	useEffect(() => {
		const getPokemons = async () => {
			setLoading(true);

			const { data } = await axios.get(
				'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
			);

			data.results.forEach(async (_: Pokemons) => {
				const { data } = await axios.get(
					`https://pokeapi.co/api/v2/pokemon/${_.name}`
				);

				setPokemons((p) => [...p, data]);
			});

			setNextUrl(data.next);
			setLoading(false);
		};

		getPokemons();

		return () => {};
	}, []);

	const loadNextPage = async () => {
		setLoading(true);

		const { data } = await axios.get(nextUrl);

		data.results.forEach(async (_: Pokemons) => {
			const { data } = await axios.get(
				`https://pokeapi.co/api/v2/pokemon/${_.name}`
			);

			setPokemons((p) => [...p, data]);
		});

		setNextUrl(data.next);
		setLoading(false);
	};

	return (
		<div className="App">
			<div className="container">
				<header className="pokemon-header">Pokemon</header>

				<PokemonCollection
					pokemons={pokemons}
					viewDetail={viewDetail}
					setDetail={setDetail}
				/>

				{!viewDetail.isOpened && (
					<div className="btn">
						<button onClick={loadNextPage}>
							{!loading ? 'More Pokemons' : 'Loading ...'}
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default App;
