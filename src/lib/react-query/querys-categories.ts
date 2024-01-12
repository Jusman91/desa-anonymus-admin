import { getCategoriesFn } from '@/api/categories';
import { key } from '@/static/key';
import { useQuery } from '@tanstack/react-query';

export function useGetCategories(url: string) {
	const query = useQuery({
		queryKey: [key.QUERY_KEY_CATEGORIES],
		queryFn: () => getCategoriesFn(url),
		refetchOnWindowFocus: false,
	});

	return query;
}
