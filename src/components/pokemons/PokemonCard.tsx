import { PokemonCardProps } from 'shared/types';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';

const PokemonCard: FC<PokemonCardProps> = (props) => {
	const { pokemon, viewDetail, setDetail } = props;
	const { name, id, sprites, abilities } = pokemon;
	const imgUrl = sprites.front_default;

	const [isSelected, setSelected] = useState(false);
	const backgroundStyles = useMemo(
		() => ({
			background: `url(${imgUrl})`,
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
		}),
		[]
	);

	const closeDetail = useCallback(() => {
		setDetail({ id: 0, isOpened: false });
	}, []);

	useEffect(() => {
		setSelected(id === viewDetail?.id);
	}, [viewDetail]);

	return (
		<section className='relative flexcentercol cursor-pointer w-[16rem] h-[16rem] m-[1rem] py-[1rem] rounded-[2.5rem] bg-ctwhite'>
			<p className='capitalize text-[2.5rem] pt-[1rem] px-[1rem] pb-[0.5rem]'>{name}</p>
			<div className='w-[80%] h-[80%]' style={backgroundStyles}></div>

			{isSelected && (
				<section className='z-[12] lg:w-[80%] lg:max-w-[70rem] fixed m-auto rounded-[2.5rem] bg-ctwhite w-[30rem] translate-center'>
					<div className='z-[2] relative lg:flex-row flex-col flexcenter rounded-[inherit]'>
						<div className='close-btn' onClick={closeDetail}></div>

						<div className='flexcentercol w-full pt-24 rounded-[inherit] bg-gradient-to-t from-ctgoldlight to-yellow-100'>
							<p className='lg:text-[4.5rem] font-bold text-[3.5rem] text-ctgold capitalize'>{name}</p>
							<div className='w-[24rem] h-[24rem]' style={backgroundStyles}></div>
						</div>

						<div className='detail-skill flex flex-wrap self-start gap-[0.5rem] w-full px-[2rem] py-[1rem] text-start'>
							<p className='lg:p-[1rem] lg:text-[4rem] block font-bold text-[3.5rem] text-ctgold w-full'>Abilities</p>
							<ul className='lg:h-[25rem] w-full h-[10rem] overflow-x-hidden overflow-y-auto pr-[1rem] pl-[3rem] list-disc'>
								{abilities?.map((_) => (
									<li key={_.ability.name} className='lg:text-[2.6rem] p-[0.6rem] my-[0.3rem] text-[2rem] capitalize'>
										{_.ability.name}
									</li>
								))}
							</ul>
						</div>
					</div>
				</section>
			)}
		</section>
	);
};

export default PokemonCard;

/**
 *	<Link to={pokemon.name}>
 *		background: -webkit-linear-gradient(-70deg, #8250df 0%, #d42a32 100%);
 *	</Link>
 */
