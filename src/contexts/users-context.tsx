import { useSearchParamsQuery } from '@/hooks/use-search-params';
import { useToggle } from '@/hooks/use-toggle';
import { useGetUsers } from '@/lib/react-query/querys-mutations-user';
import { IUsersContext } from '@/types';
import {
	ReactNode,
	createContext,
	useMemo,
	useState,
} from 'react';

const initialValues = {
	id: '',
	setId: () => {},
	isOpenModal: false,
	setIsOpenModal: () => {},
	users: [],
	isLoading: false,
	isFetching: false,
	totalData: 0,
};

export const UsersContext =
	createContext<IUsersContext>(initialValues);

export const UserContextProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [id, setId] = useState('');

	const { page, limit, sort, search } =
		useSearchParamsQuery();

	const { data, isFetching, isLoading } = useGetUsers({
		page,
		limit,
		sort,
		search,
	});
	const { data: users, totalData } = data ?? {};
	const [isOpenModal, setIsOpenModal] = useToggle(false);

	const valueContext = useMemo(() => {
		return {
			id,
			setId,
			isOpenModal,
			setIsOpenModal,
			users,
			isFetching,
			isLoading,
			totalData,
		};
	}, [
		users,
		totalData,
		isFetching,
		isLoading,
		id,
		isOpenModal,
		setIsOpenModal,
	]);
	return (
		<UsersContext.Provider value={valueContext}>
			{children}
		</UsersContext.Provider>
	);
};
