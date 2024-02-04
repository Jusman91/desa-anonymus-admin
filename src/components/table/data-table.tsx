import { IDataTableProps } from '@/types';
import { Table } from 'antd';
import TablePagination from './table-pagination-config';
import {
	GlobalAddButton,
	GlobalResetButton,
	GlobalSearchInput,
} from './global-action';

const DataTable = <T extends object>(
	props: IDataTableProps<T>,
) => {
	const {
		data,
		columns,
		totalData,
		loading,
		onChange,
		addData,
	} = props;
	const paginationConfig = TablePagination(totalData);

	return (
		<div className='mt-4'>
			<div className='flex flex-col items-end gap-y-2 md:flex-row md:justify-between md:items-center md:gap-y-0 pb-1'>
				<GlobalAddButton addData={addData} />
				<div className='flex items-center gap-1'>
					<GlobalSearchInput />
					<GlobalResetButton />
				</div>
			</div>
			<Table
				scroll={{ x: 1000 }}
				size='small'
				rowKey='_id'
				dataSource={data}
				columns={columns}
				pagination={paginationConfig}
				loading={loading}
				onChange={onChange}
			/>
		</div>
	);
};

export default DataTable;
