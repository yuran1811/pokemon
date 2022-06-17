import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetch = (url: string) => {
	const [data, setData] = useState<any>();

	useEffect(() => {
		axios
			.get<any, any>(url)
			.then((res) => res.json())
			.then((data) => setData(data));
	}, [data]);

	return [data, setData];
};
