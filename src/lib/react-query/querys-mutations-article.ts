import {
	createArticleFn,
	deleteArticleFn,
	getArticleFn,
	getArticlesFn,
	upadateArticleFn,
} from '@/api/article';
import { useMessage } from '@/hooks/use-message';
import { key } from '@/static/key';
import {
	ICreateArticle,
	IFnParams,
	IResponseError,
	IUpdateArticleFnProps,
} from '@/types';
import {
	keepPreviousData,
	useMutation,
	useQuery,
	useQueryClient,
} from '@tanstack/react-query';

export function useGetArticles(queryParams: IFnParams) {
	const query = useQuery({
		queryKey: [key.QUERY_KEY_ARTICLES, queryParams],
		queryFn: () => getArticlesFn(queryParams),
		placeholderData: keepPreviousData,
		refetchOnWindowFocus: false,
	});

	return query;
}

export function useGetArticle(articleId: string) {
	const query = useQuery({
		queryKey: [key.QUERY_KEY_ARTICLE, articleId],
		queryFn: () => getArticleFn(articleId),
		enabled: !!articleId,
		retry: 1,
		refetchOnWindowFocus: false,
	});
	return query;
}

export function useCreateArticle() {
	const { toastMessage } = useMessage();
	const queryCLient = useQueryClient();
	const mutate = useMutation({
		mutationKey: [key.MUTATION_KEY_CREATE_ARTICLE],
		mutationFn: (newArticle: ICreateArticle) =>
			createArticleFn(newArticle),
		onSuccess: (data) => {
			queryCLient.invalidateQueries({
				queryKey: [key.QUERY_KEY_ARTICLES],
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

export function useUpdateArticle() {
	const queryCLient = useQueryClient();
	const { toastMessage } = useMessage();
	const mutate = useMutation({
		mutationKey: [key.MUTATION_KEY_UPDATE_ARTICLE],
		mutationFn: ({ id, formData }: IUpdateArticleFnProps) =>
			upadateArticleFn({ id, formData }),
		onSuccess: (data) => {
			queryCLient.invalidateQueries({
				queryKey: [key.QUERY_KEY_ARTICLES],
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

export function useDeleteArticle() {
	const queryCLient = useQueryClient();
	const { toastMessage } = useMessage();
	const mutate = useMutation({
		mutationKey: [key.MUTATION_KEY_DELETE_USER],
		mutationFn: (id: string) => deleteArticleFn(id),
		onSuccess: (data) => {
			queryCLient.invalidateQueries({
				queryKey: [key.QUERY_KEY_ARTICLES],
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
