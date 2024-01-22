import { IUser } from '@/types';
import DataTable from '@/components/table/data-table';
import TableColumnUser from '@/components/table/table-column-user';
import { useGetUsers } from '@/lib/react-query/querys-mutations-user';
import { useSearchParamsQuery } from '@/hooks/use-search-params';
import { useUserHandlers } from '@/hooks/use-user-handlers';
import { DeleteUser } from '..';

const Users = () => {
	const { columnUser } = TableColumnUser();
	const { page, limit, sort, search } =
		useSearchParamsQuery();
	const { data, isFetching, isLoading } = useGetUsers({
		page,
		limit,
		sort,
		search,
	});
	const { data: users, totalData } = data ?? {};
	const loading = isLoading || isFetching;
	const { handleTableChangeUser } = useUserHandlers();

	return (
		<section className='relative'>
			<DataTable<IUser>
				columns={columnUser}
				data={users as IUser[]}
				totalData={totalData as number}
				loading={loading}
				onChange={handleTableChangeUser}
				addData='users'
			/>
			<DeleteUser />
		</section>
	);
};

export default Users;
