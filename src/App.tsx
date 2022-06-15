import PokemonCollection from 'components/pokemons/PokemonCollection';
import ErrorContent from 'components/shared/ErrorContent';
import Header from 'components/partials/Header';
import Footer from 'components/partials/Footer';
import Home from 'components/home/Home';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

const App: FC = () => {
	return (
		<div className='relative h-[100vh] overflow-x-hidden'>
			<Header />

			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/pokemons/*' element={<PokemonCollection />}></Route>
				<Route path='*' element={<ErrorContent />}></Route>
			</Routes>

			<Footer />
		</div>
	);
};

export default App;
