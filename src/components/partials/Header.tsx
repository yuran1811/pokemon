import { FC } from 'react';

import { HeaderLink } from '@/components/interfaces';
import { hostUrl } from '@/constants';

const Header: FC = () => (
  <header className='z-10 flexcenter flex-wrap sticky top-0 p-4 w-full bg-ctbackground border-b-2 border-ctcolor'>
    <HeaderLink url={`${hostUrl}/`}>Home</HeaderLink>
    <HeaderLink url={`${hostUrl}/pokemons`}>Pokemon</HeaderLink>
  </header>
);

export default Header;
