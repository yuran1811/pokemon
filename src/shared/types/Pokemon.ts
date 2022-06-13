import { Dispatch, SetStateAction } from 'react';

export interface Pokemon {
	readonly id: number;
	readonly name: string;
	readonly sprites: {
		front_default: string;
	};
	readonly abilities?: {
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
	readonly name: string;
}

export interface PokemonDetail extends Pokemon {
	readonly abilities?: {
		ability: {
			name: string;
			url: string;
		};
		is_hidden: boolean;
		slot: number;
	}[];
}

export interface PokemonDetailProps {
	readonly id: number;
	readonly isOpened: boolean;
}

export interface PokemonCollectionProps {
	readonly allPokemon: Pokemon[];
	readonly pokemons: PokemonDetail[];
	readonly viewDetail: PokemonDetailProps;
	readonly loading: boolean;
	readonly loadNextPage: Function;
	readonly setDetail: Dispatch<SetStateAction<PokemonDetailProps>>;
	readonly setPokemons: Dispatch<SetStateAction<Pokemon[]>>;
}

export interface PokemonListProps {
	readonly pokemon: Pokemon;
	readonly viewDetail: PokemonDetailProps;
	readonly setDetail: Dispatch<SetStateAction<PokemonDetailProps>>;
}

export interface PokemonContextProps {
	readonly pokemons: Pokemon[];
}

export interface PokemonSearchProps {
	setListPokes: Dispatch<PokemonAction>;
}

export interface PokemonLoadMoreProps {
	loading: boolean;
	loadNextPage: Function;
}
