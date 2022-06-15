import { PokemonSearchProps } from 'shared/types';
import SearchBar from '../shared/SearchBar';
import { ChangeEvent, FC, HTMLProps, useCallback, useEffect, useState } from 'react';

const PokemonSearch: FC<PokemonSearchProps & HTMLProps<HTMLInputElement>> = (props) => {
	const { setListPokesSearch, ...attr } = props;

	const [inpVal, setInpVal] = useState(props.value || '');

	const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setInpVal(() => e.target.value);
	}, []);

	useEffect(() => {
		setListPokesSearch({ name: inpVal.toString().toLowerCase() });
	}, [inpVal]);

	return <SearchBar {...attr} onChange={handleOnChange} />;
};

export default PokemonSearch;
