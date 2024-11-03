import { createContext } from 'react';
import { Pokemon } from '@/shared/types';

export const PokemonsContext = createContext<Pokemon[]>([]);
