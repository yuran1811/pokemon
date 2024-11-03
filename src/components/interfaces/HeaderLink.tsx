import { FC, PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';

import { ctUnderline } from '@/utils';

const navLinkDefault = 'lg:text-4xl text-3xl font-semibold text-center text-green-200 tracking-[0.25rem] mx-4 px-2';
const navLinkActive = `${navLinkDefault} relative ${ctUnderline}`;

interface HeaderLinkProps {
  url: string;
}

export const HeaderLink: FC<HeaderLinkProps & PropsWithChildren> = ({ children, url }) => (
  <NavLink to={url} className={({ isActive }) => (isActive ? navLinkActive : navLinkDefault)}>
    {children}
  </NavLink>
);
