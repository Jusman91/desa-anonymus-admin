import DataTable from '@/components/table/data-table';
import { useSearchParamsQuery } from '@/hooks/use-search-params';
import { useGetProducts } from '@/lib/react-query/querys-mutations-product';
import { IProduct } from '@/types';
import TableColumnProduct from '@/components/table/table-column-product';
import { DeleteProduct } from '..';
import { useProductHandlers } from '@/hooks/use-product-handlers';

const Products = () => {
	const { columnProduct } = TableColumnProduct();
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

	const { data: products, totalData } = data ?? {};
	const loading = isLoading || isFetching;
	const { handleTableChangeProduct } = useProductHandlers();

	return (
		<section className='relative'>
			<DataTable<IProduct>
				columns={columnProduct}
				data={products as IProduct[]}
				totalData={totalData as number}
				loading={loading}
				onChange={handleTableChangeProduct}
				addData='products'
			/>
			<DeleteProduct />
		</section>
	);
};

export default Products;
