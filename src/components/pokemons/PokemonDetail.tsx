import { FC } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetail: FC = (props) => {
	const params = useParams();

	return <h2>Pokemon Detail: {params.pokemon} </h2>;
};

export default PokemonDetail;
