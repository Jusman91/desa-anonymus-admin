import { IDataTableProps } from '@/types';
import { Table } from 'antd';
import TablePagination from './table-pagination-config';
import Icon from '../elements/icon';
import { MdAddCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { GlobalResetButton } from './table-column-buttons';
import { GlobalSearchInput } from './column-search-input';

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
			<div className='flex justify-between items-center pb-1'>
				<Link
					to={`/${addData}/create`}
					className='flex items-center text-white hover:text-red-500'>
					<Icon>{<MdAddCircle />}</Icon>
					Add
				</Link>
				<div className='flex items-center gap-1'>
					<GlobalSearchInput />
					<GlobalResetButton />
				</div>
			</div>
			<Table
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
