import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';

import { NUM_POKE_LOAD } from '@/constants';
import { Pokemon } from '@/shared/types';
import { Pagination } from '@/components/shared';

interface PokemonPaginationProps {
  pokemons: Pokemon[];
  localPageIdx: number;
  setPageIdx: Dispatch<SetStateAction<number>>;
}

const PokemonPagination: FC<PokemonPaginationProps> = ({ pokemons, localPageIdx, setPageIdx }) => {
  const [badgesLength, setBadgesLength] = useState(pokemons.length / NUM_POKE_LOAD);

  useEffect(() => {
    setBadgesLength(() => pokemons.length / NUM_POKE_LOAD);
  }, [pokemons.length]);

  return <Pagination localPageIdx={localPageIdx} badgesLength={badgesLength} setPageIdx={setPageIdx} />;
};

export default PokemonPagination;
