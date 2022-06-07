import React, { useEffect, useState } from 'react';
import { PokemonListProps } from '../types';
import './pokemon.css';

const PokemonList: React.FC<PokemonListProps> = (props) => {
	const { name, id, img, abilities, viewDetail, setDetail } = props;

	const [isSelected, setSelected] = useState(false);

	useEffect(() => {
		setSelected(id === viewDetail?.id);
	}, [viewDetail]);

	const closeDetail = () => {
		setDetail({ id: 0, isOpened: false });
	};

	return (
		<>
			{isSelected ? (
				<section className="pokemon-list-detailed">
					<div className="detail-container">
						<p className="detail-close" onClick={closeDetail}>
							x
						</p>
						<div className="detail-info">
							<img className="detail-img" src={img} alt={name} />
							<p className="detail-name">{name}</p>
						</div>
						<div className="detail-skill">
							<p className="detail-ability">Abilities</p>
							{abilities?.map((_: any) => (
								<div>{_.ability.name}</div>
							))}
						</div>
					</div>
				</section>
			) : (
				<section className="pokemon-list-container">
					<p className="pokemon-name">{name}</p>
					<img src={img} alt={name} />
				</section>
			)}
		</>
	);
};

export default PokemonList;
