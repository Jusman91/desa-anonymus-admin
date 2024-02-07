import axios from 'axios';
import axiosInstance from '@/lib/axios/axios-instance';
import {
	IArticle,
	ICreateArticle,
	IFnParams,
	IResponseError,
	IResponseSuccess,
	IUpdateArticleFnProps,
} from '@/types';

export async function getArticlesFn(params: IFnParams) {
	try {
		const { data } = await axiosInstance.get('/articles', {
			params,
		});
		return data as IResponseSuccess;
	} catch (error) {
		if (axios.isAxiosError<IResponseError>(error)) {
			throw error.response?.data;
		}
	}
}

export async function getArticleFn(id: string) {
	try {
		const { data } = await axiosInstance.get(
			`/articles/${id}`,
		);
		return data as IArticle;
	} catch (error) {
		if (axios.isAxiosError<IResponseError>(error)) {
			throw error.response?.data;
		}
	}
}

export async function createArticleFn(
	newArticle: ICreateArticle,
) {
	try {
		const { data } = await axiosInstance.post(
			'/articles',
			newArticle,
		);
		return data;
	} catch (error) {
		if (axios.isAxiosError<IResponseError>(error)) {
			throw error.response?.data;
		}
	}
}

export async function upadateArticleFn({
	id,
	formData,
}: IUpdateArticleFnProps) {
	try {
		const { data } = await axiosInstance.put(
			`/articles/${id}`,
			formData,
		);
		return data;
	} catch (error) {
		if (axios.isAxiosError<IResponseError>(error)) {
			throw error.response?.data;
		}
	}
}

export async function deleteArticleFn(id: string) {
	try {
		const { data } = await axiosInstance.delete(
			`/articles/${id}`,
		);
		return data;
	} catch (error) {
		if (axios.isAxiosError<IResponseError>(error)) {
			throw error.response?.data;
		}
	}
}

export async function getArticleStatisticsFn() {
	try {
		const { data } = await axiosInstance.get(
			'/articles/statistics',
		);
		return data;
	} catch (error) {
		if (axios.isAxiosError<IResponseError>(error)) {
			console.log(error);
			throw error.response?.data;
		}
	}
}
