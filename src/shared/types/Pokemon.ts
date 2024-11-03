import { Dispatch, SetStateAction } from 'react';

export interface PokemonSprite {
  readonly back_default?: string | null;
  // readonly back_female?: string;
  // readonly back_shiny_female?: string;
  // readonly back_shiny?: string;
  readonly front_default?: string | null;
  // readonly front_female?: string;
  // readonly front_shiny_female?: string;
  // readonly front_shiny?: string;
}

export interface PokemonSprites extends PokemonSprite {
  readonly other?: {
    readonly 'official-artwork'?: PokemonSprite;
    readonly dreamwork?: PokemonSprite;
    readonly home?: PokemonSprite;
  };
  readonly versions?: {
    readonly 'generation-iii'?: {
      readonly 'firered-leafgreen'?: PokemonSprite;
      readonly 'ruby-sapphire'?: PokemonSprite;
      readonly emerald?: PokemonSprite;
    };
    readonly 'generation-iv'?: {
      readonly 'diamond-pearl'?: PokemonSprite;
      readonly 'heartgold-soulsilver'?: PokemonSprite;
      readonly platinum?: PokemonSprite;
    };
    readonly 'generation-v'?: {
      readonly 'black-white'?: {
        readonly animated?: PokemonSprite;
      } & PokemonSprite;
    };
  };
}

export interface Pokemon {
  readonly id: number;
  readonly name: string;
  readonly sprites: PokemonSprites;
  readonly abilities: {
    readonly ability: {
      readonly name: string;
      readonly url: string;
    };
    readonly is_hidden: boolean;
    readonly slot: number;
  }[];
}

export interface PokemonDetail extends Pokemon {
  readonly base_experience: number;
  readonly weight: number;
  readonly types: {
    readonly slot: number;
    readonly type: {
      readonly name: string;
    };
  }[];
}

export interface Pokemons {
  readonly name: string;
  readonly url: string;
}

export interface PokemonAction {
  readonly searchValue: string;
}

export interface PokemonDetailProps {
  readonly id: number;
  readonly isOpened: boolean;
}

export interface PokemonListProps {
  readonly listPokes: { pokemons: Pokemon[]; change: number };
  readonly viewDetail: PokemonDetailProps;
  readonly selectPokemon: (id: number) => void;
  readonly setDetail: Dispatch<SetStateAction<PokemonDetailProps>>;
}

export interface PokemonCardProps {
  readonly pokemon: Pokemon;
  readonly viewDetail: PokemonDetailProps;
  readonly setDetail: Dispatch<SetStateAction<PokemonDetailProps>>;
}

export interface PokemonSearchProps {
  readonly setListPokesSearch: Dispatch<PokemonAction>;
}

export interface PokemonLoadMoreProps {
  readonly label: string;
  readonly loading: boolean;
  readonly pokemons: Pokemon[];
  readonly loadAllPokemons?: Function;
  readonly loadNextPage?: Function;
}
