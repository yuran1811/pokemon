import { hostUrl } from '../../constants';
import { navLinkClass, navLinkActiveClass } from 'utils';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const Header: FC = () => (
	<header className='z-10 flexcenter flex-wrap sticky top-0 p-4 w-full bg-ctbackground border-b-2 border-ctcolor'>
		<NavLink to={`${hostUrl}/`} className={({ isActive }) => (isActive ? navLinkActiveClass : navLinkClass)}>
			Home
		</NavLink>

		<NavLink to={`${hostUrl}/pokemons`} className={({ isActive }) => (isActive ? navLinkActiveClass : navLinkClass)}>
			Pokemon
		</NavLink>
	</header>
);

export default Header;
