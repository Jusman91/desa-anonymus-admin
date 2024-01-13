import DataTable from '@/components/table/data-table';
import TableColumnArticle from '@/components/table/table-column-article';
import { useSearchParamsQuery } from '@/hooks/use-search-params';
import { useTableHandlers } from '@/hooks/use-table-handlers';
import { useGetArticles } from '@/lib/react-query/querys-mutations-article';
import { IArticle } from '@/types';
import type {
	FilterValue,
	SorterResult,
	TablePaginationConfig,
} from 'antd/es/table/interface';

const Articles = () => {
	const { columnArticle } = TableColumnArticle();
	const { handleTableChange } = useTableHandlers();
	const { page, limit, sort, search, category } =
		useSearchParamsQuery();
	const { data, isFetching, isLoading } = useGetArticles({
		page,
		limit,
		sort,
		search,
		category,
	});
	const { data: articles, totalData } = data ?? {};
	const loading = isFetching || isLoading;

	const handleTableChangeArticle = (
		pagination: TablePaginationConfig,
		filters: Record<string, FilterValue | null>,
		sorter:
			| SorterResult<IArticle>
			| SorterResult<IArticle>[],
	) => {
		handleTableChange<IArticle>({
			pagination,
			sorter,
			filters,
		});
	};
	return (
		<DataTable
			columns={columnArticle}
			data={articles as IArticle[]}
			totalData={totalData as number}
			loading={loading}
			onChange={handleTableChangeArticle}
			addData='articles'
		/>
	);
};

export default Articles;
