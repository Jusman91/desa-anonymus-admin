import { getMeFn, getloginUserFn } from '@/api/auth';
import { key } from '@/static/key';
import { ILoginInput } from '@/types';
import { saveUser } from '@/handlers/handle-session';
import {
	useMutation,
	useQuery,
} from '@tanstack/react-query';

export function useLogin() {
	return useMutation({
		mutationKey: [key.MUTATION_KEY_LOGIN],
		mutationFn: (userData: ILoginInput) =>
			getloginUserFn(userData),
	});
}

export function useLoggedIn() {
	const query = useQuery({
		queryKey: [key.QUERY_KEY_LOGIN],
		queryFn: getMeFn,
		enabled: false,
		retry: 1,
	});

	if (query.isSuccess) {
		saveUser(query.data);
	}

	return query;
}
