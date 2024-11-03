import { PokemonDetail, PokemonSprite, PokemonSprites } from '@/shared/types';

export const getImgsFromSprites = (data: PokemonDetail) => {
  if (data === null || !data?.sprites) return;

  const animates: string[] = [];
  const fronts: string[] = [];
  const backs: string[] = [];

  const { sprites } = data;

  const pushToArray = (sprites: PokemonSprite | undefined, animated: boolean = false) => {
    if (sprites === undefined) return;

    if (animated) {
      sprites?.front_default && animates.push(sprites.front_default);
      sprites?.back_default && animates.push(sprites.back_default);
      return;
    }

    sprites?.front_default && fronts.push(sprites.front_default);
    sprites?.back_default && backs.push(sprites.back_default);
  };

  pushToArray(sprites);

  if (sprites?.other) {
    pushToArray(sprites.other?.dreamwork);
    pushToArray(sprites.other?.home);
    pushToArray(sprites.other['official-artwork']);
  }

  if (sprites?.versions) {
    if (sprites.versions['generation-iii']) {
      pushToArray(sprites.versions['generation-iii'].emerald);
      pushToArray(sprites.versions['generation-iii']['firered-leafgreen']);
      pushToArray(sprites.versions['generation-iii']['ruby-sapphire']);
    }

    if (sprites.versions['generation-iv']) {
      pushToArray(sprites.versions['generation-iv'].platinum);
      pushToArray(sprites.versions['generation-iv']['diamond-pearl']);
      pushToArray(sprites.versions['generation-iv']['heartgold-soulsilver']);
    }

    if (sprites.versions['generation-v']) {
      pushToArray(sprites.versions['generation-v']['black-white']?.animated, true);
      pushToArray(sprites.versions['generation-v']['black-white']);
    }
  }

  return { fronts, backs, animates };
};
