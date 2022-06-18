import { useFetch } from 'hooks';
import { getImgStyle } from 'utils';
import { pokeapiGet } from '../../constants';
import { ErrorText } from 'components/interfaces';
import { getImgsFromSprites } from 'utils/getImgsFromSprites';
import { PokemonDetail as PokemonDetailType } from 'shared/types';
import { FC, useCallback, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { BackIcon } from 'components/icons';

interface imgSourceType {
	fronts: string[];
	backs: string[];
	animates: string[];
}

type getImgSourceType = () => imgSourceType;

const PokemonDetail: FC = () => {
	const { pokemonId } = useParams();

	const { data, err, controller } = useFetch<PokemonDetailType>(`${pokeapiGet}/${pokemonId}`);

	const getImgSource: getImgSourceType = useCallback(() => {
		if (data) {
			const imgSrc = getImgsFromSprites(data);
			if (imgSrc) return imgSrc;
		}

		return { fronts: [], backs: [], animates: [] };
	}, [data]);
	const imgStyle = useCallback(getImgStyle, [data]);

	const basicInfo = useMemo(
		() => ({
			Name: data?.name,
			'Base exp': data?.base_experience,
			Weight: data?.weight,
			Abilities: { key: 'ability', arr: data?.abilities || [] },
			Types: { key: 'type', arr: data?.types || [] },
		}),
		[data]
	);
	const { fronts, backs, animates } = useMemo(() => getImgSource(), [data]);

	useEffect(() => {
		return () => {
			controller.abort();
		};
	}, [data, err]);

	return (
		<>
			{err || data === null ? (
				<div className='pt-8'>
					<ErrorText extraStyle='text-[3rem] p-4'>Fail to load '{pokemonId}' data from pokeapi</ErrorText>
					<ErrorText extraStyle='text-[3rem] p-4'>Type the name carefully</ErrorText>
					<BackIcon />
				</div>
			) : (
				<>
					<div className='container m-auto pt-[1rem] px-[2.5rem]'>
						<BackIcon />
						{Object.entries(basicInfo).map(([key, val]) => {
							return (
								<div key={`info_${key}`} className='text-[2.4rem] text-center text-white bg-ctbackground font-bold'>
									{key}:{' '}
									{val instanceof Object ? (
										val.arr.map((_: any) => (
											<div key={_[val.key].name} className='mx-[0.5rem] inline-block'>
												<span className='text-[2.4rem] text-start text-ctgoldlight bg-ctbackground'>
													{_[val.key].name.includes('-') ? _[val.key].name.split('-').join(' ') : _[val.key].name}
												</span>
											</div>
										))
									) : (
										<span className='text-[2.4rem] text-start text-blue-200 bg-ctbackground capitalize'>{val}</span>
									)}
								</div>
							);
						})}
					</div>

					<div className='text-[2.4rem] text-center text-white bg-ctbackground font-bold py-2'>More Images</div>
					<div className='flex flex-wrap justify-center items-start'>
						{fronts.map((_) => (
							<img key={`fronts_${_}`} className={`w-[10rem] h-[10rem]`} style={{ ...imgStyle(_) }} />
						))}

						{backs.map((_) => (
							<img key={`backs_${_}`} className={`w-[10rem] h-[10rem]`} style={{ ...imgStyle(_) }} />
						))}

						{animates.map((_) => (
							<img key={`animates_${_}`} className={`w-[10rem] h-[10rem]`} style={{ ...imgStyle(_) }} />
						))}
					</div>
				</>
			)}
		</>
	);
};

export default PokemonDetail;
