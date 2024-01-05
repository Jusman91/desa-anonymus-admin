import {
	getAccessToken,
	removeAccessToken,
	removeUser,
} from '@/utils/handle-session';
import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: `${import.meta.env.VITE_API_URL}`,
	headers: {
		'Content-Type': 'application/json',
	},
});

axiosInstance.interceptors.request.use((req) => {
	const accessToken = getAccessToken();
	if (accessToken) {
		req.headers.Authorization = `Bearer ${accessToken}`;
	}

	return req;
});

axiosInstance.interceptors.response.use(
	(res) => {
		return res;
	},
	(error) => {
		if (error.response && error.response.status === 401) {
			removeUser();
			removeAccessToken();
			window.location.href = '/auth/login';
		}
		return Promise.reject(error);
	},
);

export default axiosInstance;
