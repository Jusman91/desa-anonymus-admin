import { useGetCategories } from '@/lib/react-query/querys-categories';
import { ColumnFilterItem } from 'antd/es/table/interface';

export const TableColumFilterObj = (url: string) => {
	const { data: categories } = useGetCategories(url);
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
