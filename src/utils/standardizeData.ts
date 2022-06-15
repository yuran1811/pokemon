import { Pokemon } from 'shared/types';

export const standardizePokemon = (pokemons: Pokemon[]): Pokemon[] => {
	const getPokemonMini = (_: Pokemon): Pokemon => ({
		id: _.id,
		name: _.name,
		sprites: {
			front_default: _.sprites.front_default,
		},
		abilities: _.abilities?.map(({ ability, is_hidden, slot }) => ({
			ability: {
				name: ability.name,
				url: ability.url,
			},
			is_hidden: is_hidden,
			slot: slot,
		})),
	});

	const listId = new Set<number>([]);

	pokemons
		.sort((a, b) => a.id - b.id)
		.forEach((_, idx) => {
			if (!listId.has(_.id)) listId.add(_.id);
			else pokemons.splice(idx, 1);
		});

	return pokemons.map((_) => getPokemonMini(_));
};
