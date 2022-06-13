import { PokemonListProps } from '@mytypes/Pokemon';
import { FC, useEffect, useState, useMemo } from 'react';

const PokemonList: FC<PokemonListProps> = (props) => {
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

	useEffect(() => {
		setSelected(id === viewDetail?.id);

		return () => {};
	}, [viewDetail]);

	const closeDetail = () => {
		setDetail({ id: 0, isOpened: false });
	};

	return (
		<>
			{isSelected ? (
				<section className='lg:w-[80%] lg:max-w-[70rem] absolute rounded-[2.5rem] bg-ctwhite w-[30rem] translate-center'>
					<div className='lg:flex-row flex-col flexcenter rounded-[inherit]'>
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
			) : (
				<section className='flexcentercol cursor-pointer w-[16rem] h-[16rem] m-[1rem] py-[1rem] rounded-[2.5rem] bg-ctwhite'>
					<p className='capitalize text-[2.5rem] pt-[1rem] px-[1rem] pb-[0.5rem]'>{name}</p>
					<div className='w-[80%] h-[80%]' style={backgroundStyles}></div>
				</section>
			)}
		</>
	);
};

export default PokemonList;
