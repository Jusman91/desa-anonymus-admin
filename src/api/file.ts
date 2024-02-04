import axiosInstance from '@/lib/axios/axios-instance';
import { IFileFn, IResponseError } from '@/types';
import axios from 'axios';

export async function uploadFileFn({ url, file }: IFileFn) {
	const formData = new FormData();
	formData.append('file', file);
	try {
		const { data } = await axiosInstance.post(
			url,
			formData,
			{
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			},
		);

		return data;
	} catch (error) {
		if (axios.isAxiosError<IResponseError>(error)) {
			throw error.response?.data;
		}
	}
}

export async function updateFileFn({ url, file }: IFileFn) {
	const formData = new FormData();
	formData.append('file', file);
	try {
		const { data } = await axiosInstance.put(
			url,
			formData,
			{
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			},
		);

		return data;
	} catch (error) {
		if (axios.isAxiosError<IResponseError>(error)) {
			throw error.response?.data;
		}
	}
}
