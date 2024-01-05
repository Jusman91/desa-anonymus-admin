import { useMessage } from '@/hooks/use-message';
import {
	useLoggedIn,
	useLogin,
} from '@/lib/react-query/auth-query-mutation';
import {
	IAuthFormContextProps,
	ILoginInput,
	IResponseError,
} from '@/types';
import { saveAccessToken } from '@/utils/handle-session';
import {
	ReactNode,
	createContext,
	useCallback,
	useMemo,
} from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthFormContext = createContext<
	IAuthFormContextProps | undefined
>(undefined);

export const AuthFormContextProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const navigate = useNavigate();
	const { mutate: userLogin, isPending: loginIsPending } =
		useLogin();
	const { refetch } = useLoggedIn();
	const toastMessage = useMessage();

	const handleSubmit = useCallback(
		(values: ILoginInput) => {
			userLogin(values as ILoginInput, {
				onSuccess: async (data) => {
					saveAccessToken(data?.accessToken ?? '');
					await refetch();
					toastMessage({
						type: 'success',
						content: data?.message,
					});
					navigate('/');
				},
				onError: (error) => {
					const myError = error as IResponseError;
					toastMessage({
						type: 'error',
						content: `${myError.status} ${myError.message}`,
					});
				},
			});
		},
		[navigate, toastMessage, userLogin, refetch],
	);

	const value = useMemo(() => {
		return {
			handleSubmit,
			loginIsPending,
		};
	}, [handleSubmit, loginIsPending]);

	return (
		<AuthFormContext.Provider value={value}>
			{children}
		</AuthFormContext.Provider>
	);
};
