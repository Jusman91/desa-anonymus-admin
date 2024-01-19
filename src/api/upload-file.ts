import axiosInstance from '@/lib/axios/axios-instance';
import { IResponseError, IUploadFile } from '@/types';
import axios from 'axios';

export async function uploadFile({
	url,
	file,
}: IUploadFile) {
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
