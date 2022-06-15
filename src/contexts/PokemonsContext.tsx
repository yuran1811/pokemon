import { Pokemon } from 'shared/types';
import { createContext } from 'react';

export const PokemonsContext = createContext<Pokemon[]>([]);
