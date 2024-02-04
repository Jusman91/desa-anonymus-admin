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
import { useTableContext } from './use-context';
import { useQueryClient } from '@tanstack/react-query';
import { key } from '@/static/key';
import { useParams } from 'react-router-dom';
import { useUpdateFile } from '@/lib/react-query/mutation-file';
import { useForm } from './use-form';
import { useEffect } from 'react';

export function useUserHandlers() {
	const { setOpen, setIdDelete } = useTableContext();
	const { ResetFieldsValue } = useForm();
	const { id } = useParams();
	const url = `users/profile_pic/${id}`;

	const {
		mutate: createUser,
		isPending: isPendingCreate,
		isSuccess: isSuccessCreate,
	} = useCreateUser();

	const {
		mutateAsync: updatePic,
		isPending: isPendingUpload,
	} = useUpdateFile();

	const { mutate: updateUser, isPending: isPendingUpdate } =
		useUpdateUser();

	const {
		mutate: deleteUser,
		isPending: isPendingDelete,
		isSuccess: isSuccessDelete,
	} = useDeleteUser();

	const queryClient = useQueryClient();
	const { handleTableChange } = useTableHandlers();

	const loading =
		isPendingCreate ||
		isPendingUpload ||
		isPendingUpdate ||
		isPendingDelete;

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

	const handleSubmit = async (
		value: ICreateUser | IUpdateUser,
	) => {
		if (id && 'profilePic' in value) {
			const profilePicObj = value.profilePic;

			let picURL = '';
			if (
				profilePicObj &&
				typeof profilePicObj === 'object'
			) {
				const file = (profilePicObj as { file?: File })
					.file;
				if (file) {
					const result = await updatePic({ url, file });
					picURL = result;
				}
			}

			const newFormData: IUpdateUser = {
				...value,
				...(typeof profilePicObj === 'object' && {
					profilePic: picURL,
				}),
			};
			updateUser({ id, formData: newFormData });
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
			},
		});
		setOpen(false);
	};

	const onCancelDelete = () => {
		setOpen(false);
	};

	if (isSuccessCreate) {
		ResetFieldsValue;
	}

	useEffect(() => {
		if (isSuccessDelete) {
			setIdDelete('');
		}

		return () => {
			setIdDelete('');
		};
	}, [isSuccessDelete, setIdDelete]);

	return {
		loading,
		handleTableChangeUser,
		handleDelete,
		onCancelDelete,
		handleSubmit,
	};
}
