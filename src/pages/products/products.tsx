import DataTable from '@/components/table/data-table';
import { useSearchParamsQuery } from '@/hooks/use-search-params';
import { useGetProducts } from '@/lib/react-query/querys-mutations-product';
import { IProduct } from '@/types';
import type {
	FilterValue,
	SorterResult,
	TablePaginationConfig,
} from 'antd/es/table/interface';
import TableColumnProduct from '@/components/table/table-column-product';
import { useTableHandlers } from '@/hooks/use-table-handlers';

const Products = () => {
	const { columnProduct } = TableColumnProduct();
	const { handleTableChange } = useTableHandlers();
	const { page, limit, sort, search, inStock, category } =
		useSearchParamsQuery();
	const { data, isFetching, isLoading } = useGetProducts({
		page,
		limit,
		sort,
		search,
		inStock,
		category,
	});

	console.log(data);
	const { data: products, totalData } = data ?? {};
	const loading = isLoading || isFetching;

	const handleTableChangeProduct = (
		pagination: TablePaginationConfig,
		filters: Record<string, FilterValue | null>,
		sorter:
			| SorterResult<IProduct>
			| SorterResult<IProduct>[],
	) => {
		handleTableChange<IProduct>({
			pagination,
			sorter,
			filters,
		});
	};

	return (
		<DataTable<IProduct>
			columns={columnProduct}
			data={products as IProduct[]}
			totalData={totalData as number}
			loading={loading}
			onChange={handleTableChangeProduct}
			addData='products'
		/>
	);
};

export default Products;
