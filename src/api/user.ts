import axiosInstance from '@/lib/axios/axios-instance';
import { ICreateUser } from '@/types';

export async function fetchUsers() {
	const { data } = await axiosInstance.get('/users');
	return data;
}

export async function fetchUser(userId: string) {
	const { data } = await axiosInstance.get(
		`/users/${userId}`,
	);
	return data;
}

export async function createUser(newUser: ICreateUser) {
	const { data } = await axiosInstance.post(
		'/users',
		newUser,
	);
	return data;
}

export async function upadateUser(userId: string) {
	const { data } = await axiosInstance.put(
		`/users/${userId}`,
	);
	return data;
}

export async function deleteUser(userId: string) {
	const { data } = await axiosInstance.delete(
		`/users/${userId}`,
	);
	return data;
}
