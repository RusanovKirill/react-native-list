import React, {
	useState,
	useEffect,
} from 'react';

export const useFetch = (url) => {
	const [stateData, setStateData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const concatData = (...arrs) => [ ...new Set( [].concat(...arrs) ) ];

	const fetchData = async () => {
		setIsLoading(true);

		const param = `?per_page=100&since=${!stateData.length ? 0 : stateData[stateData.length - 1].id}`;
		const response = await fetch(`${url}${param}`);
		const data = await response.json();

		setStateData(concatData(stateData, data));
		setIsLoading(false);
	};

	useEffect(() => {
		if (!url) return;

		fetchData();
	}, [url]);

	return { isLoading, stateData, fetchData };
};
