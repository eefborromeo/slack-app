import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../contexts/User';

export default function useFetch(url) {
	const [status, setStatus] = useState('idle');
	const [data, setData] = useState([]);
	const {
		user: { expiry, uid, accessToken, client },
	} = useContext(UserContext);
	const params = {
		expiry: expiry,
		uid: uid,
		'access-token': accessToken,
		client: client,
	};

	useEffect(() => {
		if (!url) return;

		const fetchData = async () => {
			setStatus('fetching');
			let {
				data: { data },
			} = await axios.get(url, { params });
			setData(data);
			setStatus('fetched');
		};

		fetchData();
	}, [url]);

	return { status, data };
}
