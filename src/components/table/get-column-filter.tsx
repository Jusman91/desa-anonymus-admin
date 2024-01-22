import { useGetCategories } from '@/lib/react-query/querys-categories';
import { IResponseCategories } from '@/types';
import { ColumnFilterItem } from 'antd/es/table/interface';

export const ColumFilter = (url: string) => {
	const { data: categories } = useGetCategories(
		url,
	) as IResponseCategories;
	const filterObjCategory = {
		filters: categories?.map(
			(category): ColumnFilterItem => ({
				text: category.name,
				value: category.name as unknown as boolean,
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
