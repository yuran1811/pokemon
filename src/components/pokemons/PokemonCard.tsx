import { FC, useCallback, useEffect, useMemo, useState } from 'react';

import { getImgStyle } from '@/utils';
import { PokemonCardProps } from '@/shared/types';
import { CloseIcon, InfoIcon } from '@/components/icons';

const PokemonCard: FC<PokemonCardProps> = (props) => {
  const { pokemon, viewDetail, setDetail } = props;
  const { name, id, sprites, abilities } = pokemon;
  const imgUrl = sprites?.front_default;

  const [isSelected, setSelected] = useState(false);

  const backgroundStyles = useMemo(() => {
    if (!imgUrl) return {};

    return getImgStyle(imgUrl);
  }, []);

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
        <section className='z-[12] lg:w-[80%] lg:max-w-[70rem] fixed m-auto rounded-[2.5rem] bg-ctwhite w-[30rem] max-h-[55rem] h-[90vh] translate-center'>
          <div className='relative h-full flex lg:flex-row flex-col justify-start items-center rounded-[inherit]'>
            <InfoIcon url={name} />
            <CloseIcon onClick={closeDetail} />

            <div className='flexcentercol relative top-0 w-full lg:h-full pt-24 rounded-[inherit] bg-gradient-to-t from-ctgoldlight to-yellow-100'>
              <p className='lg:text-[4.5rem] font-bold text-[3.5rem] text-ctgold capitalize'>{name}</p>
              <div className='lg:w-[35rem] w-[18rem] lg:h-[35rem] h-[18rem]' style={backgroundStyles}></div>
            </div>

            <div className='detail-skill flex flex-col flex-wrap items-start gap-[0.5rem] w-full lg:h-[55rem] h-full lg:px-[4rem] px-[2rem] py-[1rem] text-start'>
              <p className='lg:p-[1rem] lg:text-[4rem] block font-bold text-[3.5rem] text-sky-700 w-full lg:h-[7rem] h-[4.5rem]'>
                Abilities
              </p>
              <ul className='w-full h-[calc(100%-8rem)] overflow-x-hidden overflow-y-auto pr-[1rem] pl-[3rem] list-disc'>
                {abilities?.map((_) => (
                  <li key={_.ability.name} className='lg:text-[2.6rem] p-[0.6rem] my-[0.3rem] text-[2rem] capitalize'>
                    {!_.ability.name.includes('-') ? _.ability.name : _.ability.name.split('-').join(' ')}
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
