import { useGetCategoriesProduct } from '@/lib/react-query/querys-categories';
import { ColumnFilterItem } from 'antd/es/table/interface';

export const TableColumFilterObj = () => {
	const { data: categories } = useGetCategoriesProduct();
	const filterObjCategory = {
		filters: categories?.map(
			(category: { name: string }): ColumnFilterItem => ({
				text: category.name,
				value: category.name,
			}),
		),
		filterMultiple: false,
	};

	const filterObjInStock = {
		filters: [
			{ text: 'Ready', value: true },
			{ text: 'Not Ready', value: false },
		],
		filterMultiple: false,
	};

	return { filterObjCategory, filterObjInStock };
};
