import { FC } from "react";

import { HeaderLink } from "@/components/interfaces";
import { hostUrl } from "@/constants";

const Header: FC = () => (
  <header className="flexcenter bg-ctbackground border-ctcolor sticky top-0 z-10 w-full flex-wrap border-b-2 p-4">
    <HeaderLink url={`${hostUrl}/`}>Home</HeaderLink>
    <HeaderLink url={`${hostUrl}/pokemons`}>Pokemon</HeaderLink>
  </header>
);

export default Header;
