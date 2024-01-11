import {
	createProductFn,
	deleteProductFn,
	getProductFn,
	getProductsFn,
	upadateProductFn,
} from '@/api/product';
import { useMessage } from '@/hooks/use-message';
import { key } from '@/static/key';
import {
	ICreateProduct,
	IFnParams,
	IResponseError,
	IUpdateProductFnProps,
} from '@/types';
import {
	keepPreviousData,
	useMutation,
	useQuery,
	useQueryClient,
} from '@tanstack/react-query';

export function useGetProducts(queryParams: IFnParams) {
	const query = useQuery({
		queryKey: [key.QUERY_KEY_PRODUCTS, queryParams],
		queryFn: () => getProductsFn(queryParams),
		placeholderData: keepPreviousData,
		refetchOnWindowFocus: false,
	});

	return query;
}

export function useGetProduct(id: string) {
	const query = useQuery({
		queryKey: [key.QUERY_KEY_PRODUCT, id],
		queryFn: () => getProductFn(id),
	});
	return query;
}

export function useCreateProduct() {
	const { toastMessage } = useMessage();
	const queryCLient = useQueryClient();
	const mutate = useMutation({
		mutationKey: [key.MUTATION_KEY_CREATE_PRODUCT],
		mutationFn: (newProduct: ICreateProduct) =>
			createProductFn(newProduct),
		onSuccess: (data) => {
			queryCLient.invalidateQueries({
				queryKey: [key.QUERY_KEY_PRODUCTS],
			});
			toastMessage({
				type: 'success',
				content: data.message,
			});
		},
		onError: (error) => {
			const myError = error as IResponseError;
			toastMessage({
				type: 'error',
				content: `${myError.status} ${myError.message}`,
			});
		},
	});
	return mutate;
}

export function useUpdateProduct() {
	const queryCLient = useQueryClient();
	const { toastMessage } = useMessage();
	const mutate = useMutation({
		mutationKey: [key.MUTATION_KEY_UPDATE_PRODUCT],
		mutationFn: ({ id, formData }: IUpdateProductFnProps) =>
			upadateProductFn({ id, formData }),
		onSuccess: (data) => {
			queryCLient.invalidateQueries({
				queryKey: [key.QUERY_KEY_PRODUCTS],
			});
			toastMessage({
				type: 'success',
				content: data.message,
			});
		},
		onError: (error) => {
			const myError = error as IResponseError;
			toastMessage({
				type: 'error',
				content: `${myError.status} ${myError.message}`,
			});
		},
	});
	return mutate;
}

export function useDeleteProduct() {
	const queryCLient = useQueryClient();
	const { toastMessage } = useMessage();
	const mutate = useMutation({
		mutationKey: [key.MUTATION_KEY_DELETE_USER],
		mutationFn: (id: string) => deleteProductFn(id),
		onSuccess: (data) => {
			queryCLient.invalidateQueries({
				queryKey: [key.QUERY_KEY_PRODUCTS],
			});
			toastMessage({
				type: 'success',
				content: data.message,
			});
		},
		onError: (error) => {
			const myError = error as IResponseError;
			toastMessage({
				type: 'error',
				content: `${myError.status} ${myError.message}`,
			});
		},
	});
	return mutate;
}
