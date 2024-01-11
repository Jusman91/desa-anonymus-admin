import {
	getCategoriesArticleFn,
	getCategoriesProductFn,
} from '@/api/categories';
import { key } from '@/static/key';
import { useQuery } from '@tanstack/react-query';

export function useGetCategoriesProduct() {
	const query = useQuery({
		queryKey: [key.QUERY_KEY_CATEGORIES_PRODUCT],
		queryFn: getCategoriesProductFn,
		refetchOnWindowFocus: false,
	});

	return query;
}

export function useGetCategoriesArticle() {
	const query = useQuery({
		queryKey: [key.QUERY_KEY_CATEGORIES_ARTICLE],
		queryFn: getCategoriesArticleFn,
		refetchOnWindowFocus: false,
	});

	return query;
}
