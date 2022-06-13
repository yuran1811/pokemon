import { Dispatch, useEffect, useState } from 'react';

const getInitialValue = (key: string, value: any, defaultValue: string): any => {
	const localData = JSON.parse(localStorage.getItem(key) ?? defaultValue);
	if (localData) return localData;

	return value instanceof Function ? value() : value;
};

export const useLocalStore = <T>(key: string, value: T, defaultValue: string): [T, Dispatch<T>] => {
	const [data, setData] = useState(() => getInitialValue(key, value, defaultValue));

	useEffect(() => {
		console.log('useLocalData from hook: ', data);
		localStorage.setItem(key, JSON.stringify(data));
	}, [data]);

	return [data, setData];
};
