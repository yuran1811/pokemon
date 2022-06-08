import { PokemonListProps } from '../shared/types';
import { FC, useEffect, useState } from 'react';
import './pokemon.scss';

const PokemonList: FC<PokemonListProps> = (props) => {
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
						<div
							className="detail-close"
							onClick={closeDetail}
						></div>
						<div className="detail-info">
							<p className="detail-name">{name}</p>
							<div
								className="detail-img"
								style={{
									background: `url(${img})`,
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat',
									backgroundPosition: 'center',
								}}
							></div>
						</div>
						<div className="detail-skill">
							<p className="detail-ability">Abilities</p>
							<ul className="detail-ability-container">
								{abilities?.map((_) => (
									<li key={_.ability.name} className="detail-ability-item">
										{_.ability.name}
									</li>
								))}
							</ul>
						</div>
					</div>
				</section>
			) : (
				<section className="pokemon-list-container">
					<p className="pokemon-name">{name}</p>
					<div
						className="pokemon-img"
						style={{
							background: `url(${img})`,
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center',
						}}
					></div>
				</section>
			)}
		</>
	);
};

export default PokemonList;
