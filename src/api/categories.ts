import axiosInstance from '@/lib/axios/axios-instance';

export async function getCategoriesProductFn() {
	try {
		const { data } = await axiosInstance.get(
			'/categories/product',
		);
		return data;
	} catch (error) {
		console.log(error);
	}
}

export async function getCategoriesArticleFn() {
	try {
		const { data } = await axiosInstance.get(
			'/categories/article',
		);
		return data;
	} catch (error) {
		console.log(error);
	}
}
