import { useGetUsers } from '@/lib/react-query/querys-mutations-user';
import { IUser } from '@/types';
import type {
	FilterValue,
	SorterResult,
	TablePaginationConfig,
} from 'antd/es/table/interface';
import { TableColumns } from '@/components/table/table-columns';
import { useSearchParamsQuery } from '@/hooks/use-search-params';
import DataTable from '@/components/table/data-table';
import { handleTableChange } from '@/handlers/table-handlers';

const Users = () => {
	const { columnUser } = TableColumns();
	const {
		page,
		limit,
		sort,
		search,
		setPageQuery,
		setLimitQuery,
		setSortQuery,
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
