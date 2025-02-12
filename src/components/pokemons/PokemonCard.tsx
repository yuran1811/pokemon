import { FC, useCallback, useEffect, useMemo, useState } from "react";

import { getImgStyle } from "@/utils";
import { PokemonCardProps } from "@/shared/types";
import { CloseIcon, InfoIcon } from "@/components/icons";

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
    <section className="flexcentercol bg-ctwhite relative m-[1rem] h-[16rem] w-[16rem] cursor-pointer rounded-[2.5rem] py-[1rem]">
      <p className="px-[1rem] pt-[1rem] pb-[0.5rem] text-[2.5rem] capitalize">
        {name}
      </p>
      <div className="h-[80%] w-[80%]" style={backgroundStyles}></div>

      {isSelected && (
        <section className="bg-ctwhite translate-center fixed z-12 m-auto h-[90vh] max-h-[55rem] w-[30rem] rounded-[2.5rem] lg:w-[80%] lg:max-w-[70rem]">
          <div className="relative flex h-full flex-col items-center justify-start rounded-[inherit] lg:flex-row">
            <InfoIcon url={name} />
            <CloseIcon onClick={closeDetail} />

            <div className="flexcentercol from-ctgoldlight relative top-0 w-full rounded-[inherit] bg-linear-to-t to-yellow-100 pt-24 lg:h-full">
              <p className="text-ctgold text-[3.5rem] font-bold capitalize lg:text-[4.5rem]">
                {name}
              </p>
              <div
                className="h-[18rem] w-[18rem] lg:h-[35rem] lg:w-[35rem]"
                style={backgroundStyles}
              ></div>
            </div>

            <div className="detail-skill flex h-full w-full flex-col flex-wrap items-start gap-[0.5rem] px-[2rem] py-[1rem] text-start lg:h-[55rem] lg:px-[4rem]">
              <p className="block h-[4.5rem] w-full text-[3.5rem] font-bold text-sky-700 lg:h-[7rem] lg:p-[1rem] lg:text-[4rem]">
                Abilities
              </p>
              <ul className="h-[calc(100%-8rem)] w-full list-disc overflow-x-hidden overflow-y-auto pr-[1rem] pl-[3rem]">
                {abilities?.map((_) => (
                  <li
                    key={_.ability.name}
                    className="my-[0.3rem] p-[0.6rem] text-[2rem] capitalize lg:text-[2.6rem]"
                  >
                    {!_.ability.name.includes("-")
                      ? _.ability.name
                      : _.ability.name.split("-").join(" ")}
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
