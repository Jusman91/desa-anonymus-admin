import axiosInstance from '@/lib/axios/axios-instance';
import {
	ICreateProduct,
	IFnParams,
	IResponseError,
	IResponseSuccess,
	IUpdateProductFnProps,
} from '@/types';
import axios from 'axios';

export async function getProductsFn(params: IFnParams) {
	try {
		const { data } = await axiosInstance.get('/products', {
			params,
		});
		return data as IResponseSuccess;
	} catch (error) {
		if (axios.isAxiosError<IResponseError>(error)) {
			throw error.response?.data;
		}
	}
}

export async function getProductFn(id: string) {
	try {
		const { data } = await axiosInstance.get(
			`/products/${id}`,
		);
		return data;
	} catch (error) {
		if (axios.isAxiosError<IResponseError>(error)) {
			throw error.response?.data;
		}
	}
}

export async function createProductFn(
	newProduct: ICreateProduct,
) {
	try {
		const { data } = await axiosInstance.post(
			'/products',
			newProduct,
		);
		return data;
	} catch (error) {
		if (axios.isAxiosError<IResponseError>(error)) {
			throw error.response?.data;
		}
	}
}

export async function upadateProductFn({
	id,
	formData,
}: IUpdateProductFnProps) {
	try {
		const { data } = await axiosInstance.put(
			`/products/${id}`,
			formData,
		);
		return data;
	} catch (error) {
		if (axios.isAxiosError<IResponseError>(error)) {
			throw error.response?.data;
		}
	}
}

export async function deleteProductFn(id: string) {
	try {
		const { data } = await axiosInstance.delete(
			`/product/${id}`,
		);
		return data;
	} catch (error) {
		if (axios.isAxiosError<IResponseError>(error)) {
			throw error.response?.data;
		}
	}
}
