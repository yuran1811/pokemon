import { hostUrl } from './constants';
import Home from 'components/home/Home';
import Header from 'components/partials/Header';
import Footer from 'components/partials/Footer';
import { ErrorContent } from 'components/shared';
import PokemonDetail from 'components/pokemons/PokemonDetail';
import PokemonCollection from 'components/pokemons/PokemonCollection';
import { Outlet, Route, Routes } from 'react-router-dom';
import { FC } from 'react';

const App: FC = () => (
	<div className='relative h-[100vh] overflow-x-hidden'>
		<Header />

		<Routes>
			<Route path={`/${hostUrl}`}>
				<Route index element={<Home />} />
				<Route path='pokemons/*'>
					<Route index element={<PokemonCollection />} />
					<Route path=':pokemonId' element={<PokemonDetail />} />
					<Route path='*' element={<ErrorContent />} />
				</Route>
				<Route path='*' element={<ErrorContent />} />
			</Route>
		</Routes>
		<Outlet />

		<Footer />
	</div>
);

export default App;
