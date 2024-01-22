import {
	createUserFn,
	deleteUserFn,
	getUserFn,
	getUsersFn,
	upadateUserFn,
} from '@/api/user';
import { useMessage } from '@/hooks/use-message';
import { key } from '@/static/key';
import {
	ICreateUser,
	IFnParams,
	IResponseError,
	IUpdateUserFnParams,
} from '@/types';
import {
	keepPreviousData,
	useMutation,
	useQuery,
	useQueryClient,
} from '@tanstack/react-query';

export function useGetUsers(queryParams: IFnParams) {
	const query = useQuery({
		queryKey: [key.QUERY_KEY_USERS, queryParams],
		queryFn: () => getUsersFn(queryParams),
		placeholderData: keepPreviousData,
		refetchOnWindowFocus: false,
	});

	return query;
}

export function useGetUser(userId: string) {
	const query = useQuery({
		queryKey: [key.QUERY_KEY_USER, userId],
		queryFn: () => getUserFn(userId),
		enabled: !!userId,
		retry: 1,
		refetchOnWindowFocus: false,
	});
	return query;
}

export function useCreateUser() {
	const { toastMessage } = useMessage();
	const queryCLient = useQueryClient();
	const mutate = useMutation({
		mutationKey: [key.MUTATION_KEY_CREATE_USER],
		mutationFn: (newUser: ICreateUser) =>
			createUserFn(newUser),
		onSuccess: (data) => {
			queryCLient.invalidateQueries({
				queryKey: [key.QUERY_KEY_USERS],
			});
			toastMessage({
				type: 'success',
				content: data.message,
			});
		},
		onError: (error) => {
			const myError = error as IResponseError;
			toastMessage({
				type: 'error',
				content: `${myError.status} ${myError.message}`,
			});
		},
	});
	return mutate;
}

export function useUpdateUser() {
	const queryCLient = useQueryClient();
	const { toastMessage } = useMessage();
	const mutate = useMutation({
		mutationKey: [key.MUTATION_KEY_UPDATE_USER],
		mutationFn: ({ id, formData }: IUpdateUserFnParams) =>
			upadateUserFn({ id, formData }),
		onSuccess: (data) => {
			queryCLient.invalidateQueries({
				queryKey: [key.QUERY_KEY_USERS],
			});
			toastMessage({
				type: 'success',
				content: data.message,
			});
		},
		onError: (error) => {
			const myError = error as IResponseError;
			toastMessage({
				type: 'error',
				content: `${myError.status} ${myError.message}`,
			});
		},
	});
	return mutate;
}

export function useDeleteUser() {
	const queryClient = useQueryClient();
	const { toastMessage } = useMessage();
	const mutate = useMutation({
		mutationKey: [key.MUTATION_KEY_DELETE_USER],
		mutationFn: (id: string) => deleteUserFn(id),
		onSuccess: (data) => {
			queryClient.invalidateQueries({
				queryKey: [key.QUERY_KEY_USERS],
			});
			toastMessage({
				type: 'success',
				content: data.message,
			});
		},
		onError: (error) => {
			const myError = error as IResponseError;
			toastMessage({
				type: 'error',
				content: `${myError.status} ${myError.message}`,
			});
		},
	});
	return mutate;
}
