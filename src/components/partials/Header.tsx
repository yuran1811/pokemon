import { navLinkClass, navLinkActiveClass } from 'utils/getStyle';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const Header: FC = () => (
	<header className='flexcenter flex-wrap z-10 sticky top-0 p-8 w-full bg-ctbackground border-b-2 border-ctcolor'>
		<NavLink to='/' className={({ isActive }) => (isActive ? navLinkActiveClass : navLinkClass)}>
			Home
		</NavLink>

		<NavLink to='/pokemons' className={({ isActive }) => (isActive ? navLinkActiveClass : navLinkClass)}>
			Pokemon
		</NavLink>
	</header>
);

export default Header;
