import {
	useCreateUser,
	useDeleteUser,
	useUpdateUser,
} from '@/lib/react-query/querys-mutations-user';
import { ICreateUser, IUpdateUser, IUser } from '@/types';
import type {
	FilterValue,
	SorterResult,
	TablePaginationConfig,
} from 'antd/es/table/interface';
import { useTableHandlers } from './use-table-handlers';
import { useUserFormContext } from './use-context';
import { useQueryClient } from '@tanstack/react-query';
import { key } from '@/static/key';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export function useUserHandlers() {
	const {
		mutate: createUser,
		isPending: isPendingCreate,
		isSuccess: isSuccessCreate,
	} = useCreateUser();
	const { mutate: updateUser } = useUpdateUser();
	const { mutate: deleteUser } = useDeleteUser();
	const queryClient = useQueryClient();
	const { handleTableChange } = useTableHandlers();
	const { setOpen, form } = useUserFormContext();
	const { id } = useParams();

	const loading = isPendingCreate;

	const handleTableChangeUser = (
		pagination: TablePaginationConfig,
		_filters: Record<string, FilterValue | null>,
		sorter: SorterResult<IUser> | SorterResult<IUser>[],
	) => {
		handleTableChange<IUser>({
			pagination,
			sorter,
		});
	};

	const handleCreate = (value: ICreateUser) => {
		createUser(value, {
			onSuccess: () => {
				form.resetFields();
			},
		});
	};

	const handleSubmit = (
		value: ICreateUser | IUpdateUser,
	) => {
		if (id && 'profilePic' in value) {
			// updateUser({ id, formData: value });
			console.log(value);
		} else {
			createUser(value as ICreateUser);
		}
	};

	const handleDelete = async (id: string) => {
		deleteUser(id, {
			onSuccess: () => {
				queryClient.invalidateQueries({
					queryKey: [key.QUERY_KEY_USERS, id],
				});
				setOpen(false);
			},
		});
	};

	const onCancelDelete = () => {
		setOpen(false);
	};

	useEffect(() => {
		if (isSuccessCreate) {
			form.resetFields();
		}
	}, [form, isSuccessCreate]);

	return {
		loading,
		handleTableChangeUser,
		handleCreate,
		handleDelete,
		onCancelDelete,
		handleSubmit,
	};
}
