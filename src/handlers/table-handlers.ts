import { IHandleTableChangeProps } from '@/types';

export const handleTableChange = <T extends object>({
	pagination,
	sorter,
	filters,
	setPageQuery,
	setLimitQuery,
	setSortQuery,
	setInStockQuery,
	setCategoryQuery,
	deleteQuery,
}: IHandleTableChangeProps<T>): void => {
	if (pagination.current) {
		setPageQuery(pagination?.current?.toString());
	}
	if (pagination.pageSize) {
		setLimitQuery(pagination?.pageSize?.toString());
	}

	if (Array.isArray(sorter)) {
		const multipleSorters = sorter
			.map(
				(s) =>
					`${s.field}_${
						s.order === 'ascend' ? 'asc' : 'desc'
					}`,
			)
			.join(',');
		setSortQuery(multipleSorters);
	} else if (sorter && sorter.field && sorter.order) {
		const singleSorter = `${sorter.field}_${
			sorter.order === 'ascend' ? 'asc' : 'desc'
		}`;
		setSortQuery(singleSorter);
	}

	if (filters?.inStock !== null) {
		setInStockQuery(filters?.inStock as unknown as string);
	} else {
		deleteQuery('inStock');
	}

	if (
		filters?.category !== null &&
		filters?.category?.length > 0
	) {
		const queryCategory = filters?.category[0];
		setCategoryQuery(queryCategory as string);
	} else {
		deleteQuery('category');
	}
};
