import { useQuery } from "@tanstack/react-query";
import { FC, useCallback, useMemo } from "react";
import { useParams } from "react-router-dom";

import { pokeapiGet } from "@/constants";
import { getImgStyle, getImgsFromSprites } from "@/utils";

import { BackIcon } from "@/components/icons";
import { ErrorText } from "@/components/interfaces";

interface imgSourceType {
  fronts: string[];
  backs: string[];
  animates: string[];
}

type getImgSourceType = () => imgSourceType;

const PokemonDetail: FC = () => {
  const { pokemonId } = useParams();

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: [`pokemon/${pokemonId}`],
    queryFn: async () => {
      const res = await fetch(`${pokeapiGet}/${pokemonId}`);
      if (!res.ok) throw new Error("Failed to fetch");
      return await res.json();
    },
  });

  // const { data, err, controller } = useFetch<PokemonDetailType>(`${pokeapiGet}/${pokemonId}`);

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
      "Base exp": data?.base_experience,
      Weight: data?.weight,
      Abilities: { key: "ability", arr: data?.abilities || [] },
      Types: { key: "type", arr: data?.types || [] },
    }),
    [data],
  );
  const { fronts, backs, animates } = useMemo(() => getImgSource(), [data]);

  return (
    <>
      {error || data === null ? (
        <div className="pt-8">
          <ErrorText extraStyle="text-[3rem] p-4">
            Fail to load '{pokemonId}' data from pokeapi
          </ErrorText>
          <ErrorText extraStyle="text-[3rem] p-4">
            Type the name carefully
          </ErrorText>
          <BackIcon />
        </div>
      ) : (
        <section className="container mx-auto min-h-[calc(100dvh-120px)]">
          <div className="px-[2.5rem] pt-[1rem]">
            <BackIcon />
            {Object.entries(basicInfo).map(([key, val]) => {
              return (
                <div
                  key={`info_${key}`}
                  className="bg-ctbackground text-center text-[2.4rem] font-bold text-white"
                >
                  {key}:{" "}
                  {val instanceof Object ? (
                    val.arr.map((_: any) => (
                      <div
                        key={_[val.key].name}
                        className="mx-[0.5rem] inline-block"
                      >
                        <span className="text-ctgoldlight bg-ctbackground text-start text-[2.4rem]">
                          {_[val.key].name.includes("-")
                            ? _[val.key].name.split("-").join(" ")
                            : _[val.key].name}
                        </span>
                      </div>
                    ))
                  ) : (
                    <span className="bg-ctbackground text-start text-[2.4rem] text-blue-200 capitalize">
                      {val}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <div className="bg-ctbackground py-2 text-center text-[2.4rem] font-bold text-white">
            More Images
          </div>
          <div className="flex flex-wrap items-start justify-center">
            {fronts.map((_) => (
              <img
                key={`fronts_${_}`}
                className={`h-[10rem] w-[10rem]`}
                style={{ ...imgStyle(_) }}
              />
            ))}

            {backs.map((_) => (
              <img
                key={`backs_${_}`}
                className={`h-[10rem] w-[10rem]`}
                style={{ ...imgStyle(_) }}
              />
            ))}

            {animates.map((_) => (
              <img
                key={`animates_${_}`}
                className={`h-[10rem] w-[10rem]`}
                style={{ ...imgStyle(_) }}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default PokemonDetail;
