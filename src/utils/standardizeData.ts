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

	const list: Pokemon[] = pokemons.map((_) => getPokemonMini(_));

	return list;
};
