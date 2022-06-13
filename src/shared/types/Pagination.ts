import { Pokemon } from 'shared/types';

export interface PaginationProps {
	pokemons: Pokemon[];
	prev: boolean;
	next: boolean;
}

export interface PaginationBadgeProps {
	idx: string | number;
}

export interface PaginationButtonProps {
	type: string;
}
