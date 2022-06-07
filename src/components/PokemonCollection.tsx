import React from 'react';
import { PokemonCollectionProps } from '../types';
import PokemonList from './PokemonList';
import './pokemon.css';

const PokemonCollection: React.FC<PokemonCollectionProps> = (props) => {
	const { pokemons, viewDetail, setDetail } = props;

	const selectPokemon = (id: number) => {
		!viewDetail.isOpened && setDetail({ id, isOpened: true });
	};

	return (
		<>
			<section
				className={
					viewDetail.isOpened
						? 'collection-container-active'
						: 'collection-container'
				}
			>
				{viewDetail.isOpened ? <div className="overlay"></div> : ''}
				{pokemons.map((_) => (
					<div onClick={() => selectPokemon(_.id)}>
						<PokemonList
							key={_.id}
							abilities={_.abilities}
							id={_.id}
							img={_.sprites.front_default}
							name={_.name}
							viewDetail={viewDetail}
							setDetail={setDetail}
						/>
					</div>
				))}
			</section>
		</>
	);
};

export default PokemonCollection;
