import type { SearchProps } from 'antd/es/input';
import { useSearchParamsQuery } from './use-search-params';
import {
	IHandleColumnCloseProps,
	IHandleColumnResetProps,
	IHandleColumnSearchProps,
	IHandleTableChangeProps,
} from '@/types';
import { useTableContext } from './use-context';
import { useSearchParams } from 'react-router-dom';

export function useTableHandlers() {
	const {
		setPageQuery,
		setLimitQuery,
		setSortQuery,
		setInStockQuery,
		setCategoryQuery,
		setSearchQuery,
		deleteQuery,
		deleteAllQuerys,
	} = useSearchParamsQuery();
	const [searchParams] = useSearchParams();
	const { setIdDelete, setOpen } = useTableContext();

	const handleTableChange = <T>({
		pagination,
		filters,
		sorter,
	}: IHandleTableChangeProps<T>) => {
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

		if (
			filters &&
			filters?.inStock !== null &&
			setInStockQuery
		) {
			setInStockQuery(
				filters?.inStock as unknown as string,
			);
		} else {
			deleteQuery('inStock');
		}

		if (
			filters &&
			filters?.category !== null &&
			filters?.category?.length > 0 &&
			setCategoryQuery
		) {
			const queryCategory = filters?.category[0];
			setCategoryQuery(queryCategory as string);
		} else {
			deleteQuery('category');
		}
	};

	const handleGlobalSearch: SearchProps['onSearch'] = (
		value,
		e,
	) => {
		e?.preventDefault();
		if (value.length > 0) {
			setSearchQuery(value);
		} else {
			deleteQuery('search');
		}
	};

	const handleGlobalReset = () => {
		if (searchParams.toString().length > 0) {
			deleteAllQuerys();
		}
	};

	const handleColumnSearch = ({
		selectedKeys,
		confirm,
		dataIndex,
		setSearchedColumn,
	}: IHandleColumnSearchProps) => {
		confirm();
		setSearchQuery(selectedKeys[0]);
		setSearchedColumn(dataIndex);
		deleteQuery('page');
		deleteQuery('sort');
		deleteQuery('limit');
		deleteQuery('inStock');
		deleteQuery('category');
		deleteQuery('price');
	};

	const handleColumnReset = ({
		clearFilters,
	}: IHandleColumnResetProps) => {
		clearFilters();
		deleteQuery('sort');
		deleteQuery('search');
	};

	const handleColumnClose = ({
		close,
	}: IHandleColumnCloseProps) => {
		close();
	};

	const handleButtonDeleteClick = (userId: string) => {
		setIdDelete(userId);
		setOpen(true);
	};

	return {
		handleTableChange,
		handleGlobalSearch,
		handleGlobalReset,
		handleColumnSearch,
		handleColumnReset,
		handleColumnClose,
		handleButtonDeleteClick,
	};
}
