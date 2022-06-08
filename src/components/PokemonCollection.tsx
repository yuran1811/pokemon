import { PokemonCollectionProps } from '../shared/types';
import PokemonList from './PokemonList';
import { FC } from 'react';
import './pokemon.scss';

const PokemonCollection: FC<PokemonCollectionProps> = (props) => {
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
				{viewDetail.isOpened && <div className="overlay"></div>}

				{pokemons.map((_) => {
					return (
						<div key={_.name} onClick={() => selectPokemon(_.id)}>
							<PokemonList
								abilities={_.abilities}
								id={_.id}
								img={_.sprites.front_default}
								name={_.name}
								viewDetail={viewDetail}
								setDetail={setDetail}
							/>
						</div>
					);
				})}
			</section>
		</>
	);
};

export default PokemonCollection;
