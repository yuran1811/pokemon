import { Dispatch, SetStateAction } from 'react';

export interface Pokemon {
	readonly id: number;
	readonly name: string;
	readonly sprites: {
		front_default: string;
	};
	abilities: {
		ability: {
			name: string;
			url: string;
		};
		is_hidden: boolean;
		slot: number;
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
	readonly listPokes: {pokemons: Pokemon[], change: number};
	readonly viewDetail: PokemonDetailProps;
	readonly selectPokemon: (id: number) => void;
	readonly setDetail: Dispatch<SetStateAction<PokemonDetailProps>>;
}

export interface PokemonCardProps {
	readonly pokemon: Pokemon;
	readonly viewDetail: PokemonDetailProps;
	readonly setDetail: Dispatch<SetStateAction<PokemonDetailProps>>;
}

export interface PokemonContextProps {
	readonly pokemons: Pokemon[];
}

export interface PokemonSearchProps {
	setListPokesSearch: Dispatch<PokemonAction>;
}

export interface PokemonLoadMoreProps {
	readonly pokemons: Pokemon[];
	readonly label: string;
	readonly loading: boolean;
	loadAllPokemons?: Function;
	loadNextPage?: Function;
}
