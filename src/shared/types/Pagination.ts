import { Pokemon } from '@mytypes/Pokemon';

export interface PaginationProps {
	allPokemon: Pokemon[];
	prev: boolean;
	next: boolean;
}

export interface PaginationBadgeProps {
	idx: string | number;
}

export interface PaginationButtonProps {
	type: string;
}
