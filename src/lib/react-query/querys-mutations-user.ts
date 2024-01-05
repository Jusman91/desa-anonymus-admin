import { useQuery } from '@tanstack/react-query';
import { fetchUser, fetchUsers } from '@/api/user';

export function useGetUsers() {
	return useQuery({
		queryKey: ['users'],
		queryFn: fetchUsers,
	});
}

export function useGetUser(userId: string) {
	return useQuery({
		queryKey: ['user', userId],
		queryFn: () => fetchUser(userId),
	});
}
