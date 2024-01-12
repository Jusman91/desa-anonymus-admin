import DataTable from '@/components/table/data-table';
import TableColumnArticle from '@/components/table/table-column-article';
import { handleTableChange } from '@/handlers/table-handlers';
import { useSearchParamsQuery } from '@/hooks/use-search-params';
import { useGetArticles } from '@/lib/react-query/querys-mutations-article';
import { IArticle } from '@/types';
import type {
	FilterValue,
	SorterResult,
	TablePaginationConfig,
} from 'antd/es/table/interface';

const Articles = () => {
	const { columnArticle } = TableColumnArticle();
	const {
		page,
		limit,
		sort,
		search,
		category,
		setPageQuery,
		setLimitQuery,
		setSortQuery,
		setCategoryQuery,
		deleteQuery,
	} = useSearchParamsQuery();
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
			setLimitQuery,
			setPageQuery,
			setSortQuery,
			setCategoryQuery,
			deleteQuery,
		});
	};
	return (
		<DataTable
			columns={columnArticle}
			data={articles as IArticle[]}
			totalData={totalData as number}
			loading={loading}
			onChange={handleTableChangeArticle}
		/>
	);
};

export default Articles;
