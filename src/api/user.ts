import axiosInstance from '@/lib/axios/axios-instance';
import {
	ICreateUser,
	IFnParams,
	IResponseError,
	IResponseSuccess,
	IUpdateUserFnParams,
	IUser,
} from '@/types';
import axios from 'axios';

export async function getUsersFn(params: IFnParams) {
	try {
		const { data } = await axiosInstance.get('/users', {
			params,
		});
		return data as IResponseSuccess;
	} catch (error) {
		if (axios.isAxiosError<IResponseError>(error)) {
			throw error.response?.data;
		}
	}
}

export async function getUserFn(userId: string) {
	try {
		const { data } = await axiosInstance.get(
			`/users/${userId}`,
		);
		return data as IUser;
	} catch (error) {
		if (axios.isAxiosError<IResponseError>(error)) {
			throw error.response?.data;
		}
	}
}

export async function createUserFn(newUser: ICreateUser) {
	try {
		const { data } = await axiosInstance.post(
			'/users',
			newUser,
		);
		return data;
	} catch (error) {
		if (axios.isAxiosError<IResponseError>(error)) {
			throw error.response?.data;
		}
	}
}

export async function upadateUserFn({
	id,
	formData,
}: IUpdateUserFnParams) {
	try {
		const { data } = await axiosInstance.put(
			`/users/${id}`,
			formData,
		);
		return data;
	} catch (error) {
		if (axios.isAxiosError<IResponseError>(error)) {
			throw error.response?.data;
		}
	}
}

export async function deleteUserFn(id: string) {
	try {
		const { data } = await axiosInstance.delete(
			`/users/${id}`,
		);
		return data;
	} catch (error) {
		if (axios.isAxiosError<IResponseError>(error)) {
			throw error.response?.data;
		}
	}
}

export async function getUserStatisticsFn() {
	try {
		const { data } = await axiosInstance.get(
			'/users/statistics',
		);
		return data;
	} catch (error) {
		if (axios.isAxiosError<IResponseError>(error)) {
			console.log(error);
			throw error.response?.data;
		}
	}
}
