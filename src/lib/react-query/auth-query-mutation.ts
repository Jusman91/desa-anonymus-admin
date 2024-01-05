import { getMeFn, loginUserFn } from '@/api/auth';
import { ILoginInput } from '@/types';
import { saveUser } from '@/utils/handle-session';
import {
	useMutation,
	useQuery,
} from '@tanstack/react-query';

export function useLogin() {
	return useMutation({
		mutationKey: ['login'],
		mutationFn: (userData: ILoginInput) =>
			loginUserFn(userData),
	});
}

export function useLoggedIn() {
	const query = useQuery({
		queryKey: ['loggedIn'],
		queryFn: getMeFn,
		enabled: false,
		retry: 1,
	});

	if (query.isSuccess) {
		saveUser(query.data);
	}

	return query;
}
