import { useSearchParamsQuery } from '@/hooks/use-search-params';
import type { TablePaginationConfig } from 'antd';

const TablePagination = (totalData: number) => {
	const { limit, page } = useSearchParamsQuery();
	const config: TablePaginationConfig = {
		current: page,
		pageSize: limit,
		total: totalData,
		showQuickJumper: true,
		showSizeChanger: true,
	};
	return config;
};

export default TablePagination;
