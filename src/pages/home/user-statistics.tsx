import TotalData from '@/components/dashboard/total-data';
import { useGetUserStatistics } from '@/lib/react-query/querys-mutations-user';

const UserStatistics = () => {
	const { data: userStatistic } = useGetUserStatistics();
	return (
		<TotalData
			title='Total Users'
			path='/users'
			data={userStatistic}
		/>
	);
};

export default UserStatistics;
