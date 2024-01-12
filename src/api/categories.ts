import axiosInstance from '@/lib/axios/axios-instance';

export async function getCategoriesFn(url: string) {
	try {
		const { data } = await axiosInstance.get(
			`/categories/${url}`,
		);
		return data;
	} catch (error) {
		console.log(error);
	}
}
