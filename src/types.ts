export interface Pokemon {
	id: number;
	name: string;
	sprites: {
		front_default: string;
	};
}

export interface Pokemons {
	name: string;
	url: string;
}

export interface PokemonDetail extends Pokemon {
	abilities?: {
		ability: string;
		name: string;
	}[];
}

export interface PokemonDetailProps {
	id: number;
	isOpened: boolean;
}

export interface PokemonCollectionProps {
	pokemons: PokemonDetail[];
	viewDetail: PokemonDetailProps;
	setDetail: React.Dispatch<React.SetStateAction<PokemonDetailProps>>;
}

export interface PokemonListProps {
	id: number;
	img: string;
	name: string;
	abilities?: {
		ability: string;
		name: string;
	}[];
	viewDetail: PokemonDetailProps;
	setDetail: React.Dispatch<React.SetStateAction<PokemonDetailProps>>;
}
