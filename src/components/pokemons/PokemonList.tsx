import { FC } from "react";

import { PokemonListProps } from "@/shared/types";
import PokemonCard from "./PokemonCard";

const PokemonList: FC<PokemonListProps> = ({
  listPokes,
  viewDetail,
  selectPokemon,
  setDetail,
}) => (
  <div className="flexcenter my-8 flex-wrap px-4 lg:px-12">
    {!listPokes.pokemons.length ? (
      <div className="text-ctcolor px-8 text-center text-[4rem]">No Poke</div>
    ) : (
      listPokes.pokemons.map((_) => (
        <div key={_.name} onClick={() => selectPokemon(_.id)}>
          <PokemonCard
            pokemon={_}
            viewDetail={viewDetail}
            setDetail={setDetail}
          />
        </div>
      ))
    )}
  </div>
);

export default PokemonList;
