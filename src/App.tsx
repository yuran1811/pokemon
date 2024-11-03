import { FC } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import Home from '@/components/home/Home';
import Footer from '@/components/partials/Footer';
import Header from '@/components/partials/Header';
import PokemonCollection from '@/components/pokemons/PokemonCollection';
import PokemonDetail from '@/components/pokemons/PokemonDetail';
import { ErrorContent } from '@/components/shared';

import { hostUrl } from '@/constants';

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
