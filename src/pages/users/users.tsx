import { useGetUsers } from '@/lib/react-query/querys-mutations-user';
import { IUser } from '@/types';
import type {
	FilterValue,
	SorterResult,
	TablePaginationConfig,
} from 'antd/es/table/interface';
import { useSearchParamsQuery } from '@/hooks/use-search-params';
import DataTable from '@/components/table/data-table';
import { handleTableChange } from '@/handlers/table-handlers';
import TableColumnUser from '@/components/table/table-column-user';

const Users = () => {
	const { columnUser } = TableColumnUser();
	const {
		page,
		limit,
		sort,
		search,
		setPageQuery,
		setLimitQuery,
		setSortQuery,
		deleteQuery,
	} = useSearchParamsQuery();
	const { data, isFetching, isLoading } = useGetUsers({
		page,
		limit,
		sort,
		search,
	});
	console.log(data);
	const { data: users, totalData } = data ?? {};
	const loading = isLoading || isFetching;

	const handleTableChangeUser = (
		pagination: TablePaginationConfig,
		_filters: Record<string, FilterValue | null>,
		sorter: SorterResult<IUser> | SorterResult<IUser>[],
	) => {
		handleTableChange<IUser>({
			pagination,
			sorter,
			setLimitQuery,
			setPageQuery,
			setSortQuery,
			deleteQuery,
		});
	};

	return (
		<DataTable<IUser>
			columns={columnUser}
			data={users as IUser[]}
			totalData={totalData as number}
			loading={loading}
			onChange={handleTableChangeUser}
		/>
	);
};

export default Users;
