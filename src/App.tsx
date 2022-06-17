import Home from 'components/home/Home';
import Header from 'components/partials/Header';
import Footer from 'components/partials/Footer';
import { ErrorContent } from 'components/shared';
import PokemonCollection from 'components/pokemons/PokemonCollection';
import { FC } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

const App: FC = () => (
	<div className='relative h-[100vh] overflow-x-hidden'>
		<Header />

		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/pokemons/*' element={<PokemonCollection />} />
			<Route path='*' element={<ErrorContent />} />
		</Routes>
		<Outlet />

		<Footer />
	</div>
);

export default App;
