import { getInStock } from '@/lib/utils/utils';
import { useSearchParams } from 'react-router-dom';

export function useSearchParamsQuery() {
	const [searchParams, setSearchParams] = useSearchParams();
	const page = parseInt(
		searchParams.get('page') ?? '1',
		10,
	);
	const limit = parseInt(
		searchParams.get('limit') ?? '10',
		10,
	);
	const sort = searchParams.get('sort') ?? undefined;
	const search = searchParams.get('search') ?? undefined;
	const category =
		searchParams.get('category') ?? undefined;
	const inStockString = searchParams.get('inStock');
	const inStock = getInStock(inStockString);

	const setPageQuery = (page: string) => {
		setSearchParams((prevSearchParams) => {
			prevSearchParams.set('page', page);
			return prevSearchParams;
		});
	};

	const setLimitQuery = (limit: string) => {
		setSearchParams((prevSearchParams) => {
			prevSearchParams.set('limit', limit ?? '10');
			return prevSearchParams;
		});
	};

	const setSortQuery = (sort: string) => {
		setSearchParams((prevSearchParams) => {
			if (sort !== undefined) {
				prevSearchParams.set('sort', sort);
			} else {
				prevSearchParams.delete('sort');
			}
			return prevSearchParams;
		});
	};

	const setSearchQuery = (search: string) => {
		setSearchParams((prevSearchParams) => {
			if (search !== undefined) {
				prevSearchParams.set('search', search);
			} else {
				prevSearchParams.delete('search');
			}
			return prevSearchParams;
		});
	};

	const setInStockQuery = (inStock: string) => {
		setSearchParams((prevSearchParams) => {
			if (inStock !== undefined) {
				prevSearchParams.set('inStock', inStock);
			} else {
				prevSearchParams.delete('inStock');
			}
			return prevSearchParams;
		});
	};
	const setCategoryQuery = (category: string) => {
		setSearchParams((prevSearchParams) => {
			if (category !== undefined) {
				prevSearchParams.set('category', category);
			} else {
				prevSearchParams.delete('category');
			}
			return prevSearchParams;
		});
	};

	const deleteQuery = (query: string) => {
		setSearchParams((prevSearchParams) => {
			prevSearchParams.delete(query);
			return prevSearchParams;
		});
	};

	return {
		page,
		limit,
		sort,
		search,
		category,
		inStock,
		setPageQuery,
		setLimitQuery,
		setSortQuery,
		setSearchQuery,
		setInStockQuery,
		setCategoryQuery,
		deleteQuery,
	};
}
