import { IDataTableProps } from '@/types';
import { Table } from 'antd';
import TablePagination from './table-pagination-config';

const DataTable = <T extends object>(
	props: IDataTableProps<T>,
) => {
	const { data, columns, totalData, loading, onChange } =
		props;
	const paginationConfig = TablePagination(totalData);
	return (
		<Table
			size='small'
			rowKey='_id'
			dataSource={data}
			columns={columns}
			pagination={paginationConfig}
			loading={loading}
			onChange={onChange}
		/>
	);
};

export default DataTable;
