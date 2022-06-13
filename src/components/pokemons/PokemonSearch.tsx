import { PokemonSearchProps } from '@mytypes/Pokemon';
import SearchBar from '../shared/SearchBar';
import { ChangeEvent, FC, HTMLProps, useCallback, useEffect, useState } from 'react';

const PokemonSearch: FC<PokemonSearchProps & HTMLProps<HTMLInputElement>> = (props) => {
	const { setListPokes, ...attr } = props;

	const [inpVal, setInpVal] = useState(props.value || '');

	const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setInpVal(() => e.target.value);
	}, []);

	useEffect(() => {
		setListPokes({ name: inpVal.toString() });
	}, [inpVal]);

	return <SearchBar {...attr} onChange={handleOnChange} />;
};

export default PokemonSearch;
